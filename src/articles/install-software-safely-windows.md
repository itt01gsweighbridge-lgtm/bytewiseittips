---
title: "How to Install Software Safely on Windows (and Avoid Bundled Junk)"
description: "Download and install Windows software safely: use official sources and the Microsoft Store, spot fake download buttons, avoid bundled extras, and understand SmartScreen and UAC warnings."
date: 2026-10-12
category: software
keywords: [install software, windows 11, microsoft store, smartscreen, uac, bundleware, malware, safe download]
relatedSlugs: [winget-package-manager-guide, uninstall-stubborn-programs, recognise-phishing-emails]
faq:
  - q: "Is the Microsoft Store safe?"
    a: "Apps in the Microsoft Store are reviewed by Microsoft and installed in a managed way that makes them easier to update and remove. No store is perfect, so still check the publisher name and reviews, but it is generally a safer source than random download sites."
  - q: "What should I do if SmartScreen blocks an app?"
    a: "Stop and check where the file came from. SmartScreen warns about apps that are unknown or reported as unsafe. If you downloaded it from the official developer's website and are confident it's genuine, you can choose 'More info' and 'Run anyway' – but when in doubt, don't."
  - q: "How can I tell if a download site is fake?"
    a: "Check the address bar carefully for misspellings, prefer the developer's own website over 'download portals', and be wary of multiple large 'Download' buttons, which are often adverts. Searching for the official site through a search engine can still lead to adverts, so check the URL before clicking."
references:
  - title: "Microsoft Support – Microsoft Defender SmartScreen"
    url: "https://support.microsoft.com/en-us/microsoft-edge/how-can-smartscreen-help-protect-me-in-microsoft-edge-1c9a874a-6826-be5e-45b1-67fa445a74c8"
  - title: "Microsoft Learn – How User Account Control works"
    url: "https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/how-it-works"
  - title: "CISA – Update software"
    url: "https://www.cisa.gov/secure-our-world/update-software"
---

Installing software is something most of us do without thinking – which is exactly what malware distributors count on. Fake download sites, adware bundled with free tools and look-alike adverts for popular programs are common ways computers become infected. A few habits keep you safe.

## 1. Get software from the right source

In order of preference:

1. **The Microsoft Store** – apps are reviewed, install cleanly and update automatically. Many popular programs are available there.
2. **The developer’s official website** – type the address yourself or check it carefully.
3. **Trusted package managers** such as **winget**, which installs software from official sources using a single command. See our [winget guide](/articles/winget-package-manager-guide/).

Avoid third-party “download portals”, file-sharing sites and links sent in emails or messages. Never install “cracked” or pirated software – it is one of the most common sources of malware.

## 2. Watch out for fake download buttons and search adverts

Search results often place **sponsored adverts** above the real website, and criminals sometimes buy adverts that imitate popular software. Before clicking:

- check the **web address**: it should be the developer’s genuine domain;
- on download pages, look for the developer’s real download link rather than large, flashy “Download now” buttons, which are frequently adverts;
- be suspicious if a site insists you install a “download manager” first.

## 3. Read every installer screen

Free software is sometimes funded by bundling extra programs – browser toolbars, “PC optimisers” or changes to your home page and search engine. During installation:

- choose **Custom** or **Advanced** installation where offered, rather than *Express*;
- **untick offers** for additional software you didn’t ask for;
- read before clicking *Next* – some installers present an offer with the “accept” option highlighted.

If you end up with unwanted extras, see our guide to [uninstalling stubborn programs](/articles/uninstall-stubborn-programs/).

## 4. Understand Windows’ security prompts

Windows gives you two important checkpoints:

### Microsoft Defender SmartScreen

SmartScreen checks downloaded apps against Microsoft’s reputation data. A blue *“Windows protected your PC”* window means the app is unrecognised or reported as unsafe. Don’t simply click past it. Ask yourself: Did I download this from the official source? Was I expecting it? If you have any doubt, delete the file.

### User Account Control (UAC)

The *“Do you want to allow this app to make changes to your device?”* prompt appears when a program requests administrator rights. Check the **program name** and **verified publisher** shown. A genuine installer from a known company normally shows its publisher; *“Publisher: Unknown”* deserves extra caution. Never turn UAC off.

## 5. Check the file before running it

- Make sure the file type makes sense: installers are usually `.exe` or `.msi` files. A “PDF” or “invoice” that ends in `.exe`, `.scr` or `.js` is malicious. Turning on **File name extensions** in File Explorer’s **View › Show** menu makes this visible.
- Right-click the file, choose **Properties › Digital Signatures** to see if it’s signed by the expected company.
- If unsure, right-click the file and choose **Scan with Microsoft Defender**.

## 6. Use a standard account for everyday work

Using a standard (non-administrator) account day to day means installers must ask for an administrator password, giving you an extra moment to think – and limiting what malware can do if something slips through. In business environments, IT departments often manage software installation centrally for the same reason.

## 7. Keep installed software up to date

Outdated software contains known security vulnerabilities. Turn on automatic updates where available, update Microsoft Store apps from the Store’s **Library** page, and remove programs you no longer use. `winget upgrade --all` updates many apps in one go.

## 8. Be wary of “tech support” and urgent warnings

Pop-ups claiming your computer is infected and telling you to call a number or download a cleaning tool are scams. Close the browser tab (use Task Manager if it won’t close) and run a scan with Windows Security. See [how to recognise phishing and scams](/articles/recognise-phishing-emails/).

## Quick checklist

- Official source or Microsoft Store? ✔
- Correct web address? ✔
- Custom install with extras unticked? ✔
- SmartScreen and UAC prompts checked? ✔
- Expected file type and publisher? ✔

## Conclusion

Safe installation is mostly about where you get software and paying attention during setup. Stick to the Microsoft Store, official websites and trusted package managers, read each installer screen, and treat SmartScreen and UAC prompts as genuine checkpoints rather than obstacles.
