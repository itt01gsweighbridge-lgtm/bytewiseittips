/* ByteWise IT Tips – site behaviour. Progressive enhancement: the site works without JavaScript. */
(function () {
  "use strict";
  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  // Theme toggle
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.dataset.theme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      store.set("bw-theme", next);
    });
  }

  // Mobile navigation
  var navBtn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (navBtn && nav) {
    navBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navBtn.setAttribute("aria-expanded", open ? "true" : "false");
      navBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        navBtn.setAttribute("aria-expanded", "false");
        navBtn.focus();
      }
    });
  }

  // Copy buttons for code blocks
  document.querySelectorAll(".prose pre").forEach(function (pre) {
    if (!navigator.clipboard) return;
    var b = document.createElement("button");
    b.type = "button";
    b.className = "copy-btn";
    b.textContent = "Copy";
    b.setAttribute("aria-label", "Copy code to clipboard");
    b.addEventListener("click", function () {
      var code = pre.querySelector("code");
      navigator.clipboard.writeText((code || pre).innerText).then(function () {
        b.textContent = "Copied";
        setTimeout(function () { b.textContent = "Copy"; }, 1600);
      });
    });
    pre.appendChild(b);
  });

  // Highlight current section in table of contents
  var tocLinks = document.querySelectorAll(".toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove("active"); });
          var l = map[en.target.id];
          if (l) l.classList.add("active");
        }
      });
    }, { rootMargin: "-90px 0px -70% 0px" });
    Object.keys(map).forEach(function (id) { var h = document.getElementById(id); if (h) io.observe(h); });
  }

  // Consent banner (built-in provider)
  var banner = document.getElementById("consent");
  var openers = document.querySelectorAll("[data-open-consent]");
  function applyConsent(c) {
    store.set("bw-consent", JSON.stringify({ analytics: !!c.analytics, ads: !!c.ads, ts: Date.now() }));
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: c.analytics ? "granted" : "denied",
        ad_storage: c.ads ? "granted" : "denied",
        ad_user_data: c.ads ? "granted" : "denied",
        ad_personalization: c.ads ? "granted" : "denied"
      });
    }
    if (window.adsbygoogle) window.adsbygoogle.requestNonPersonalizedAds = c.ads ? 0 : 1;
    if (banner) banner.hidden = true;
  }
  if (banner) {
    var opts = banner.querySelector(".consent-options");
    var saveBtn = banner.querySelector(".consent-save");
    if (!store.get("bw-consent")) banner.hidden = false;
    banner.addEventListener("click", function (e) {
      var action = e.target.getAttribute && e.target.getAttribute("data-consent");
      if (!action) return;
      if (action === "accept") applyConsent({ analytics: true, ads: true });
      else if (action === "reject") applyConsent({ analytics: false, ads: false });
      else if (action === "customise") {
        opts.hidden = false; saveBtn.hidden = false; e.target.hidden = true;
        var saved = {};
        try { saved = JSON.parse(store.get("bw-consent") || "{}"); } catch (x) {}
        opts.querySelectorAll("input").forEach(function (i) { i.checked = !!saved[i.name]; });
        var first = opts.querySelector("input"); if (first) first.focus();
      } else if (action === "save") {
        var c = {};
        opts.querySelectorAll("input").forEach(function (i) { c[i.name] = i.checked; });
        applyConsent(c);
      }
    });
  }
  openers.forEach(function (btn) {
    if (banner) {
      btn.addEventListener("click", function () {
        banner.hidden = false;
        var b = banner.querySelector("[data-consent=customise]");
        if (b && !b.hidden) b.click();
      });
    } else if (window.BW_CONSENT_PROVIDER === "google") {
      // Google's certified CMP (AdSense > Privacy & messaging) exposes a revocation entry point.
      btn.addEventListener("click", function () {
        window.googlefc = window.googlefc || {};
        window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
        window.googlefc.callbackQueue.push(function () {
          if (window.googlefc.showRevocationMessage) window.googlefc.showRevocationMessage();
        });
      });
    } else {
      // No optional cookies in use: point to the cookie policy instead.
      btn.addEventListener("click", function () {
        var cp = document.querySelector('a[href*="cookie-policy"]');
        window.location.href = cp ? cp.href : "/cookie-policy/";
      });
    }
  });
})();
