#!/usr/bin/env python3
"""Generates all original site artwork (no third-party images, so no licensing issues).

Outputs:
  src/_data/icons.json                 - 24px stroke icon paths used in templates
  src/assets/img/categories/<slug>.svg - article/card illustrations (1200x520)
  src/assets/img/og/<slug>.png + default.png - 1200x630 social share images (rendered with headless Chrome)
  src/assets/img/favicon.svg, favicon.ico, apple-touch-icon.png, logo-512.png
Run: python3 scripts/make_images.py   (requires Pillow and google-chrome/chromium for PNGs)
"""
import json, os, random, shutil, subprocess, tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
cats = json.loads((SRC / "_settings/categories.json").read_text())["items"]

ICONS = {
    "windows": '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>',
    "hardware": '<rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M2 19h20"/><path d="M9 8.5l2 2 4-4"/>',
    "networking": '<path d="M2 8.8a15 15 0 0 1 20 0"/><path d="M5 12.6a10 10 0 0 1 14 0"/><path d="M8.5 16.2a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',
    "m365": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    "security": '<path d="M12 2.5 4 5.5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10v-6z"/><rect x="9" y="10.5" width="6" height="5" rx="1"/><path d="M10.2 10.5V9a1.8 1.8 0 0 1 3.6 0v1.5"/>',
    "android": '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
    "software": '<path d="M12 2.5 3.5 7v10L12 21.5 20.5 17V7z"/><path d="M3.5 7 12 11.5 20.5 7"/><path d="M12 11.5v10"/>',
    "tutorials": '<path d="M2 8.5 12 4l10 4.5-10 4.5z"/><path d="M6 10.4v4.6c0 1.6 2.7 3 6 3s6-1.4 6-3v-4.6"/><path d="M22 8.5v5"/>',
    "ai": '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    "buying": '<path d="M3 4h2.2l2.2 11h10.2l2-8H6.3"/><circle cx="9" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>',
}
(SRC / "_data/icons.json").write_text(json.dumps(ICONS, indent=2))

def hex2rgb(h):
    h = h.lstrip("#"); return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def mix(c, w, t):
    a, b = hex2rgb(c), hex2rgb(w)
    return "#%02x%02x%02x" % tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))

def illustration(cat, w=1200, h=520, seed=0):
    rnd = random.Random(cat["slug"] + str(seed))
    col = cat["color"]; dark = mix(col, "#020617", 0.55); light = mix(col, "#ffffff", 0.35)
    nodes = []
    # circuit-like traces
    for _ in range(14):
        x = rnd.randrange(0, w, 40); y = rnd.randrange(0, h, 40); L = rnd.randrange(80, 260, 40)
        x2 = x + L if rnd.random() > .5 else x; y2 = y if x2 != x else y + L
        x3 = x2 + rnd.choice([0, 40, 80]); y3 = y2 + rnd.choice([0, 40, 80])
        nodes.append(f'<path d="M{x} {y}L{x2} {y2}L{x3} {y3}" fill="none" stroke="#fff" stroke-opacity=".14" stroke-width="2"/>'
                     f'<circle cx="{x3}" cy="{y3}" r="5" fill="#fff" fill-opacity=".22"/>')
    icon = ICONS[cat["icon"]]
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{dark}"/><stop offset="1" stop-color="{col}"/></linearGradient>
<pattern id="d" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="#fff" fill-opacity=".10"/></pattern>
<radialGradient id="r" cx=".72" cy=".45" r=".5"><stop offset="0" stop-color="{light}" stop-opacity=".55"/><stop offset="1" stop-color="{light}" stop-opacity="0"/></radialGradient></defs>
<rect width="{w}" height="{h}" fill="url(#g)"/><rect width="{w}" height="{h}" fill="url(#d)"/>{''.join(nodes)}
<rect width="{w}" height="{h}" fill="url(#r)"/>
<g transform="translate({w*0.72 - 150} {h/2 - 150})"><rect x="0" y="0" width="300" height="300" rx="70" fill="#fff" fill-opacity=".12" stroke="#fff" stroke-opacity=".35" stroke-width="2"/>
<g transform="translate(54 54) scale(8)" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">{icon}</g></g>
</svg>'''

out_cat = SRC / "assets/img/categories"; out_cat.mkdir(parents=True, exist_ok=True)
for c in cats:
    (out_cat / f"{c['slug']}.svg").write_text(illustration(c))

LOGO = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="bwg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs><rect x="2" y="2" width="44" height="44" rx="12" fill="url(#bwg)"/><path d="M14 17l-5 7 5 7M34 17l5 7-5 7" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/><path d="M19.5 14h7.2c3.6 0 5.8 1.9 5.8 4.8 0 2-1.1 3.4-2.8 4 2.2.5 3.6 2.2 3.6 4.5 0 3.3-2.5 5.4-6.4 5.4h-7.4zm4.4 7.7h2.3c1.5 0 2.3-.7 2.3-1.9s-.8-1.9-2.3-1.9h-2.3zm0 7.3h2.8c1.6 0 2.5-.8 2.5-2.1s-.9-2.1-2.5-2.1h-2.8z" fill="#fff"/></svg>'''
img = SRC / "assets/img"
(img / "favicon.svg").write_text(LOGO)
(img / "logo.svg").write_text(LOGO)

chrome = shutil.which("google-chrome") or shutil.which("chromium") or shutil.which("chromium-browser")
font = (SRC / "assets/fonts/inter-var.woff2").as_uri()

def render(html, path, w, h):
    with tempfile.TemporaryDirectory() as td:
        f = Path(td) / "p.html"; f.write_text(html)
        subprocess.run([chrome, "--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars",
                        f"--window-size={w},{h}", f"--screenshot={path}", "--default-background-color=00000000",
                        f.as_uri()], check=True, capture_output=True)

def og_html(title, sub, cat):
    art = illustration(cat, 1200, 630, seed=1) if cat else illustration(
        {"slug": "default", "color": "#2563eb", "icon": "networking"}, 1200, 630, seed=1)
    return f'''<html><head><style>@font-face{{font-family:I;src:url({font})}}
body{{margin:0;width:1200px;height:630px;position:relative;font-family:I,sans-serif;color:#fff;overflow:hidden}}
.bg{{position:absolute;inset:0}} .t{{position:absolute;left:72px;top:150px;width:640px}}
.b{{display:flex;align-items:center;gap:16px;position:absolute;left:72px;top:64px;font-weight:800;font-size:34px;letter-spacing:-1px}}
.b small{{font-size:16px;letter-spacing:4px;font-weight:700;opacity:.85;display:block}}
h1{{font-size:64px;line-height:1.06;margin:0 0 22px;font-weight:800;letter-spacing:-2px}} p{{font-size:28px;opacity:.9;margin:0;line-height:1.35}}
</style></head><body><div class="bg">{art}</div>
<div class="b"><div style="width:58px;height:58px">{LOGO}</div><div>ByteWise<small>IT TIPS</small></div></div>
<div class="t"><h1>{title}</h1><p>{sub}</p></div></body></html>'''

if chrome:
    og = img / "og"; og.mkdir(exist_ok=True)
    render(og_html("Clear fixes for everyday tech problems", "Windows · Networking · Microsoft 365 · Security · Android", None), og / "default.png", 1200, 630)
    for c in cats:
        render(og_html(c["name"], "Step-by-step guides from ByteWise IT Tips", c), og / f"{c['slug']}.png", 1200, 630)
    icon_html = lambda s: f'<html><body style="margin:0;width:{s}px;height:{s}px">{LOGO.replace("<svg ", f"<svg width={s} height={s} ")}</body></html>'
    render(icon_html(512), img / "logo-512.png", 512, 512)
    render(icon_html(180), img / "apple-touch-icon.png", 180, 180)
    render(icon_html(192), img / "icon-192.png", 192, 192)
    try:
        from PIL import Image
        Image.open(img / "logo-512.png").convert("RGBA").save(img / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
        for p in list(og.glob("*.png")):
            Image.open(p).convert("RGB").save(p.with_suffix(".jpg"), quality=84, optimize=True, progressive=True)
            p.unlink()
    except ImportError:
        print("Pillow not installed: favicon.ico not generated")
else:
    print("Chrome not found: PNG images not regenerated")
print("Images generated.")
