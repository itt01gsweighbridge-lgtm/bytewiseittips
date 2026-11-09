---
title: "Windows 11 Slow to Start? 9 Practical Fixes for Faster Boot Times"
description: "Find out why your Windows 11 PC takes ages to boot and how to speed it up safely – from startup apps and Fast Startup to drivers, malware checks and storage upgrades."
date: 2026-11-07
category: windows
videos: ["jyglXnSi5UE"]
keywords: [windows 11, slow boot, startup apps, fast startup, task manager, ssd, performance]
relatedSlugs: [repair-windows-sfc-dism, windows-update-stuck-fix, ssd-vs-hdd]
faq:
  - q: "How long should Windows 11 take to start?"
    a: "On a reasonably modern PC with an SSD, reaching a usable desktop usually takes well under a minute. If it regularly takes several minutes, or the desktop appears but stays unresponsive for a long time, something is worth investigating."
  - q: "Is it safe to disable startup apps?"
    a: "Yes. Disabling an app in the Startup apps list only stops it launching automatically when you sign in; it doesn't uninstall it. You can still open it manually, and you can re-enable it at any time. Be cautious with security software, which should normally stay enabled."
  - q: "Should I turn Fast Startup off?"
    a: "Fast Startup usually makes boot quicker, so leave it on unless you are troubleshooting. Some people turn it off because it can interfere with dual-boot setups or with certain driver updates being applied, in which case a full restart is a cleaner start."
references:
  - title: "Microsoft Support – Tips to improve PC performance in Windows"
    url: "https://support.microsoft.com/en-us/windows/tips-to-improve-pc-performance-in-windows-b3b3ef5b-5953-fb6a-2528-4bbed82fba96"
  - title: "Microsoft Support – Configure startup applications in Windows"
    url: "https://support.microsoft.com/en-us/windows/configure-startup-applications-in-windows-115a420a-0bff-4a6f-90e0-1934c844e473"
---

A slow startup is one of the most common Windows complaints. Sometimes the cause is obvious – a laptop with an old mechanical hard drive – but more often it is a pile-up of small things: too many apps launching at sign-in, an outdated driver, or a pending update that keeps trying to install. This guide works from the quickest, safest fixes towards the more involved ones.

Before you start, it helps to know **when** the delay happens. Is it the time before you see the sign-in screen, or the time after you sign in until the desktop becomes usable? Delays *before* sign-in point to firmware, drivers, updates or hardware. Delays *after* sign-in usually point to startup apps.

## 1. Restart properly (not just shut down)

With **Fast Startup** enabled (the default on most PCs), choosing *Shut down* saves part of the system state to disk rather than starting completely fresh next time. That's normally a good thing, but it means a problem in memory can carry over. Choosing **Restart** performs a full, clean start. If your PC has been slow for days, restart it once and see whether the problem disappears.

## 2. Reduce startup apps

Every app that launches when you sign in competes for processor time and disk access.

1. Open **Settings › Apps › Startup**.
2. Review the list. Each app shows an impact rating (*High*, *Medium*, *Low* or *No impact*).
3. Turn off anything you don’t need immediately after signing in – chat apps, game launchers, updaters for printers or cameras, and cloud tools you rarely use are common candidates.

You can see the same list with more detail in **Task Manager** (press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Esc</kbd>, then choose **Startup apps**). Task Manager also shows a *Last BIOS time* figure at the top – the time your firmware took before handing over to Windows. A very high number points to firmware settings or hardware rather than Windows itself.

> Keep your antivirus and anything your employer installed enabled. If the PC is managed by an organisation, check with your IT team before changing startup items.

## 3. Install pending updates and restart

An update that downloaded but hasn’t finished installing can slow every boot as Windows tries to complete it. Go to **Settings › Windows Update**, install anything available, and restart. If updates fail repeatedly, follow our guide to [fixing Windows Update when it's stuck](/articles/windows-update-stuck-fix/).

## 4. Update drivers and firmware

Storage, chipset and graphics drivers have a big effect on startup. Check **Windows Update › Advanced options › Optional updates** for driver updates, and visit your PC or motherboard manufacturer’s support page for the latest chipset drivers and BIOS/UEFI firmware. Many manufacturers offer an update utility that does this automatically.

Firmware updates are generally safe when you follow the manufacturer’s instructions, but **never interrupt one** – keep laptops plugged in and don’t power off until it finishes.

## 5. Check for malware

Malware often runs at startup and slows the whole system. Open **Windows Security › Virus & threat protection** and run a **Quick scan**. If you suspect a problem, choose **Scan options › Microsoft Defender Antivirus (offline scan)**, which restarts the PC and scans before Windows fully loads – useful for threats that hide while Windows is running.

## 6. Check your storage drive

The single biggest factor in boot time is your storage.

- Open **Task Manager › Performance** and select your disk. If it shows *HDD* (or the drive type is listed as a hard disk drive in **Settings › System › Storage › Advanced storage settings › Disks & volumes**), upgrading to an SSD will typically make the biggest difference of anything in this list. See [SSD vs HDD](/articles/ssd-vs-hdd/) and our [laptop SSD upgrade guide](/articles/upgrade-laptop-to-ssd/).
- Make sure the system drive isn’t almost full. Windows needs free space for updates, temporary files and virtual memory. Aim to keep at least 10–15% free. **Settings › System › Storage** shows what’s using space, and **Storage Sense** can clear temporary files automatically.

## 7. Repair system files

If boot is slow *and* you see other odd behaviour – error messages, settings that won’t open, crashes – corrupted system files may be involved. Our guide to [repairing Windows with SFC and DISM](/articles/repair-windows-sfc-dism/) walks through the built-in repair tools.

## 8. Review firmware boot settings

A few settings in your PC’s UEFI/BIOS can add seconds to every boot: network (PXE) booting placed before the internal drive, a long boot-menu delay, or USB devices checked first. If you’re comfortable entering the firmware setup (often via a key such as <kbd>F2</kbd>, <kbd>Del</kbd> or <kbd>F10</kbd> at power-on, or from **Settings › System › Recovery › Advanced startup**), make sure the Windows drive is first in the boot order. If you’re unsure, leave these settings alone – incorrect changes can stop the PC from booting.

Also try disconnecting external drives, USB hubs and card readers. Some PCs pause at startup to check every connected device.

## 9. Consider a reset as a last resort

If nothing else helps, **Settings › System › Recovery › Reset this PC** reinstalls Windows. The *Keep my files* option preserves your personal files but removes installed apps and settings. Back up first regardless – see our [3-2-1 backup guide](/articles/3-2-1-backup-rule/).

## Conclusion

For most PCs, trimming startup apps, installing pending updates and restarting properly solve the bulk of slow-boot problems. If the PC still uses a mechanical hard drive, an SSD upgrade is the most effective improvement you can make. Work through the steps in order, test after each change, and you’ll know exactly which fix made the difference.
