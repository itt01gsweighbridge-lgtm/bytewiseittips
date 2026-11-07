---
title: "How to Uninstall Programs That Won't Uninstall in Windows"
description: "Remove stubborn Windows programs step by step: use Settings and Control Panel, Microsoft's Program Install and Uninstall troubleshooter, Safe Mode, winget and vendor removal tools."
date: 2026-09-14
category: software
keywords: [uninstall, windows 11, stubborn program, safe mode, troubleshooter, winget, removal tool]
relatedSlugs: [install-software-safely-windows, winget-package-manager-guide, repair-windows-sfc-dism]
faq:
  - q: "Is it safe to delete a program's folder manually?"
    a: "Deleting the folder in Program Files without uninstalling leaves registry entries, services and shortcuts behind, and can cause errors. Always try a proper uninstall method first. Manually deleting leftover folders after a successful uninstall is usually fine."
  - q: "Why can't I uninstall some built-in Windows apps?"
    a: "Some apps are part of Windows and can't be removed through Settings – the Uninstall option is greyed out. These are generally safe to leave. You can often hide them from the Start menu or disable them from starting automatically instead."
  - q: "Do I need third-party uninstaller software?"
    a: "Usually not. Windows' own tools, Safe Mode, winget and the publisher's removal tool handle most cases. If you do use a third-party uninstaller, download it from the developer's official website."
references:
  - title: "Microsoft Support – Uninstall or remove apps and programs in Windows"
    url: "https://support.microsoft.com/en-us/windows/uninstall-or-remove-apps-and-programs-in-windows-4b55f974-2cc6-2d2b-d092-5905080eaf98"
  - title: "Microsoft Support – Fix problems that block programs from being installed or removed"
    url: "https://support.microsoft.com/en-us/topic/fix-problems-that-block-programs-from-being-installed-or-removed-cca7d1b6-65a9-3d98-426b-e9f927e1eb4d"
  - title: "Microsoft Support – Windows startup settings (including Safe Mode)"
    url: "https://support.microsoft.com/en-us/windows/start-your-pc-in-safe-mode-in-windows-92c27cff-db89-8644-1ce4-b3e5e56fe234"
---

Most programs uninstall in a couple of clicks. Some don’t – the uninstaller crashes, says the program is in use, or the program simply isn’t listed. This guide moves from standard methods to stronger ones. Work in order and stop as soon as one succeeds.

> **Work or school PC?** Software may be deployed and protected by your organisation. Contact your IT team rather than forcing removal.

## Method 1: Settings

1. Open **Settings › Apps › Installed apps**.
2. Find the program (use the search box).
3. Select the **⋯** menu next to it and choose **Uninstall**.

Follow the uninstaller’s prompts and restart if asked.

## Method 2: Control Panel

Some older programs uninstall more reliably from the classic Control Panel:

1. Press <kbd>Win</kbd>+<kbd>R</kbd>, type `appwiz.cpl` and press <kbd>Enter</kbd>.
2. Select the program and click **Uninstall** (or **Change**, which sometimes offers a removal option).

## Method 3: Close it first

“The program is in use” or “close the application to continue” errors mean part of the program is still running.

- Exit it from the **system tray** (near the clock) – many apps keep running there.
- Open **Task Manager** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Esc</kbd>), find any related processes and choose **End task**.
- Disable it in **Settings › Apps › Startup**, restart the PC, then try uninstalling again.

## Method 4: Repair, then uninstall

If the uninstaller is broken or files are missing, repairing the program first can restore the uninstaller. In **Control Panel › Programs and Features**, select the program and look for **Repair** or **Change › Repair**. Alternatively, download and run the **same version’s installer** from the official website, which often offers a *Repair* or *Remove* option.

## Method 5: Microsoft’s Program Install and Uninstall troubleshooter

Microsoft provides a troubleshooter that fixes problems blocking programs from being installed or removed, including corrupted registry keys. Download it from Microsoft’s support page (linked in the sources below), run it, choose **Uninstalling**, then select the program from the list. If the program isn’t listed, choose *Not listed* and follow the prompts.

## Method 6: Use winget

The Windows Package Manager can trigger uninstallers by ID:

```
winget list
winget uninstall --id Publisher.AppName --exact
```

Replace the ID with the one shown in `winget list`. See our [winget guide](/articles/winget-package-manager-guide/) for details.

## Method 7: Uninstall in Safe Mode

Safe Mode starts Windows with minimal drivers and startup programs, so background components can’t block removal.

1. Go to **Settings › System › Recovery** and select **Restart now** next to *Advanced startup*.
2. Choose **Troubleshoot › Advanced options › Startup Settings › Restart**.
3. Press <kbd>4</kbd> or <kbd>F4</kbd> for **Safe Mode**.
4. Uninstall the program from Settings or Control Panel.

Some installers need the Windows Installer service, which isn’t always available in Safe Mode. Advanced users can enable it for Safe Mode as described in Microsoft’s documentation, or simply try another method.

> If your device uses BitLocker, you may be asked for the recovery key when entering advanced startup. Make sure you have it before you begin.

## Method 8: Use the publisher’s removal tool

Antivirus programs, VPN clients, graphics drivers and some office suites are notoriously hard to remove because they install deep system components. Many publishers offer a dedicated **removal or clean-up tool** on their support websites (for example, most antivirus vendors provide one). Search the publisher’s official support site for “removal tool” plus the product name.

Microsoft also provides an uninstall support tool for Microsoft 365 and Office, available from its support site.

## Method 9: Clean up leftovers (with care)

After a successful uninstall, folders may remain in:

- `C:\Program Files` and `C:\Program Files (x86)`
- `%AppData%` and `%LocalAppData%` (type these into File Explorer’s address bar)

Deleting a clearly named folder that belongs to the removed program is generally safe. **Avoid editing the registry** unless you’re confident and have a backup – mistakes can stop Windows working.

## Unwanted programs you didn’t install

If a program appeared without your knowledge – toolbars, “PC optimisers”, unknown browser extensions – run a full scan with **Windows Security**, then check your browsers’ extensions and reset browser settings if your home page or search engine changed. Our guide to [installing software safely](/articles/install-software-safely-windows/) helps prevent this in future.

## Conclusion

Start with Settings or Control Panel and make sure the program isn’t running. If that fails, repair it, use Microsoft’s troubleshooter or winget, and try Safe Mode. For security software and drivers, the publisher’s own removal tool is usually the cleanest solution.
