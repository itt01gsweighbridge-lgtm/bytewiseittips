---
title: "How to Repair Corrupted Windows System Files with SFC and DISM"
description: "Use Windows' built-in DISM and System File Checker tools to find and repair corrupted system files in Windows 11 and Windows 10, and learn how to read the results."
date: 2026-11-07
category: windows
keywords: [sfc, dism, system file checker, corrupted files, windows 11, command prompt, repair]
relatedSlugs: [windows-update-stuck-fix, windows-11-slow-startup-fixes, uninstall-stubborn-programs]
faq:
  - q: "Should I run DISM or SFC first?"
    a: "Microsoft's guidance is to run DISM first to repair the Windows component store, then run SFC. SFC uses the component store as its source of good files, so fixing the store first gives SFC the best chance of success."
  - q: "Will SFC or DISM delete my files?"
    a: "No. Both tools only check and replace protected Windows system files. Your documents, photos and installed apps are not touched. It's still sensible to have a backup before any repair work."
  - q: "How long does DISM RestoreHealth take?"
    a: "Typically 10 to 30 minutes, depending on the speed of your PC and internet connection. It can appear stuck at a percentage such as 20% or 62% for a while – that's normal, so leave it running."
references:
  - title: "Microsoft Support – Use the System File Checker tool to repair missing or corrupted system files"
    url: "https://support.microsoft.com/en-us/topic/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system-files-79aa86cb-ca52-166a-92a3-966e85d4094e"
  - title: "Microsoft Learn – sfc command reference"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/sfc"
  - title: "Microsoft Learn – Repair a Windows image (DISM)"
    url: "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/repair-a-windows-image"
---

When Windows starts behaving strangely – settings pages that won’t open, features that crash, updates that fail, or error messages about missing DLL files – corrupted system files are a common culprit. Windows includes two free tools to fix them: **DISM** (Deployment Image Servicing and Management) and **SFC** (System File Checker). Used together, they resolve a surprising number of problems without reinstalling Windows.

## What the two tools do

- **SFC** scans all protected Windows system files and replaces any that are damaged or modified with a correct copy.
- **DISM** checks and repairs the *component store* – the folder of original files (WinSxS) that SFC copies from. If the component store itself is damaged, SFC can’t fix things on its own.

That’s why the recommended order is **DISM first, then SFC**.

## Before you begin

- You need an account with **administrator** rights.
- DISM’s repair option downloads clean files from Windows Update, so stay connected to the internet.
- Close other programs and plug in laptops – the process can take a while.
- If the PC belongs to your employer, check with IT first; managed devices may use different update sources.

## Step 1: Open an elevated terminal

1. Right-click the **Start** button.
2. Choose **Terminal (Admin)** (on some versions, **Windows PowerShell (Admin)** or **Command Prompt (Admin)**).
3. Select **Yes** in the User Account Control prompt.

Both PowerShell and Command Prompt can run these commands.

## Step 2: Run DISM

Run the three DISM checks in order. The first two only *check*; the third *repairs*.

```
DISM /Online /Cleanup-Image /CheckHealth
```

This is a quick check of whether corruption has already been recorded.

```
DISM /Online /Cleanup-Image /ScanHealth
```

This performs a more thorough scan and takes several minutes.

```
DISM /Online /Cleanup-Image /RestoreHealth
```

This scans again and repairs any problems it finds, downloading replacement files from Windows Update. When it finishes, you should see *“The restore operation completed successfully.”*

> Many people skip straight to `/RestoreHealth`, which is fine – it includes the scan. Running the first two is helpful when you want to know whether corruption existed before repairing.

## Step 3: Run SFC

Now run the System File Checker:

```
sfc /scannow
```

The scan goes through several stages and usually takes 5–15 minutes. Don’t close the window until it reaches 100%.

## Step 4: Understand the results

SFC ends with one of these messages:

| Message | What it means | What to do |
|---|---|---|
| *Windows Resource Protection did not find any integrity violations.* | No corrupted system files. | Your problem lies elsewhere – drivers, apps or hardware. |
| *Windows Resource Protection found corrupt files and successfully repaired them.* | Problems were fixed. | Restart the PC and check whether the issue is gone. |
| *Windows Resource Protection found corrupt files but was unable to fix some of them.* | Some files couldn’t be repaired. | Restart, run DISM `/RestoreHealth` again, then `sfc /scannow` again. |
| *Windows Resource Protection could not perform the requested operation.* | SFC couldn’t run normally. | Try running SFC from Safe Mode or from the Windows Recovery Environment. |

Details of what SFC found are written to `%windir%\Logs\CBS\CBS.log`. The file is large and technical, but searching it for “[SR]” shows the SFC entries.

## Step 5: Restart and test

Always restart after repairs – some replaced files are only loaded at startup. Then try whatever was failing before.

## If DISM fails

DISM can fail if Windows Update itself is broken or blocked. Common causes and fixes:

- **No internet or a firewall blocking Windows Update** – check your connection and any third-party security software.
- **Windows Update components damaged** – follow the reset steps in our [Windows Update troubleshooting guide](/articles/windows-update-stuck-fix/), then try again.
- **Use installation media as the repair source** – advanced users can mount a Windows ISO of the *same version and language* and point DISM to it with the `/Source` option, as described in Microsoft’s DISM documentation. Create media with our guide to [making a Windows 11 installation USB](/articles/create-windows-11-installation-usb/).

## When to consider other options

If SFC and DISM both report success but problems continue, the cause is probably not system file corruption. Look at recently installed apps or drivers, use **System Restore** if a restore point exists, or consider **Settings › System › Recovery › Reset this PC** (choosing *Keep my files*). If you see disk errors or the PC is freezing, check the health of the drive as well – failing storage can corrupt files repeatedly.

## Conclusion

DISM and SFC are safe, built-in tools that every Windows user should know. Run `DISM /Online /Cleanup-Image /RestoreHealth` first, then `sfc /scannow`, restart, and test. Together they fix a wide range of “Windows is acting weird” problems without touching your personal files.
