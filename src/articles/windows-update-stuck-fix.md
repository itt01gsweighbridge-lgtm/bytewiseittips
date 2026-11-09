---
title: "Windows Update Stuck or Failing? A Step-by-Step Troubleshooting Guide"
description: "Fix Windows Update when it's stuck downloading, stuck at a percentage or failing with an error code – from simple checks to safely resetting Windows Update components."
date: 2026-11-07
category: windows
keywords: [windows update, stuck, error, softwaredistribution, troubleshooter, windows 11]
relatedSlugs: [repair-windows-sfc-dism, windows-11-slow-startup-fixes]
faq:
  - q: "How long should I wait before deciding an update is stuck?"
    a: "Large feature updates can sit at one percentage for 30 minutes or more, especially on older PCs with hard drives. As a rule of thumb, if there has been no change in the percentage and no disk activity for two hours, treat it as stuck."
  - q: "Is it safe to turn off my PC during an update?"
    a: "Avoid it if possible, because interrupting an installation can cause problems. If an update has genuinely been frozen for hours, a forced restart is usually recoverable – Windows will typically roll back the update automatically on the next start."
  - q: "Is it safe to delete the SoftwareDistribution folder?"
    a: "Renaming it (as described in this guide) is safe once the update services are stopped. Windows rebuilds the folder automatically. You will lose your update history list, and Windows will re-download any pending updates."
references:
  - title: "Microsoft Support – Troubleshoot problems updating Windows"
    url: "https://support.microsoft.com/en-us/windows/troubleshoot-problems-updating-windows-188c2b0f-10a7-d72f-65b8-32d177eb136c"
  - title: "Microsoft Learn – Windows Update common errors and mitigation"
    url: "https://learn.microsoft.com/en-us/troubleshoot/windows-client/installing-updates-features-roles/common-windows-update-errors"
---

Windows Update is essential for security, so a failing update isn’t something to ignore. Problems usually look like one of three things: an update that sits at the same percentage forever, an update that fails with an error code such as 0x80070002 or 0x800f0922, or an update that installs, fails and tries again on every restart. This guide covers all three.

> **Is this a work or school PC?** Organisations often control updates centrally. If you see “Some settings are managed by your organization”, contact your IT team instead of following the advanced steps below.

## Step 1: Give it time and check the basics

Large feature updates can take a long time, particularly on PCs with mechanical hard drives. Before intervening:

- **Check for disk activity.** If the drive light is flickering or Task Manager shows disk activity, the update is still working.
- **Check free space.** Updates need room to download and unpack. Open **Settings › System › Storage**; if the system drive has less than about 20 GB free, clear space first.
- **Check your connection.** Metered connections pause downloads. In **Settings › Network & internet**, open your connection’s properties and make sure *Metered connection* is off, or allow downloads over metered connections in **Windows Update › Advanced options**.
- **Check the date and time.** An incorrect clock can break secure connections to update servers. Go to **Settings › Time & language › Date & time** and turn on *Set time automatically*.

## Step 2: Restart and try again

A restart finishes pending installations and clears temporary glitches. Use **Start › Power › Update and restart** if available, otherwise **Restart**. Then return to **Settings › Windows Update** and select **Check for updates**.

If the PC appears frozen on a “Working on updates” screen with no progress for several hours, hold the power button to force it off, then turn it on again. Windows normally either finishes or rolls back the update.

## Step 3: Run the Windows Update troubleshooter

Windows includes an automated troubleshooter that resets common settings. Depending on your version of Windows 11, it is under **Settings › System › Troubleshoot › Other troubleshooters › Windows Update**, or Windows opens the **Get Help** app with the equivalent automated checks. Run it, apply any fixes it suggests, and restart.

## Step 4: Disconnect peripherals and pause security software

Some updates fail because of a driver for an external device. Unplug USB drives, docking stations, printers and other non-essential accessories, then retry. Third-party antivirus software can also interfere – temporarily disabling it during the update is a reasonable test, provided you turn it back on immediately afterwards. Microsoft Defender doesn’t need to be disabled.

## Step 5: Look up the error code

If **Windows Update › Update history** shows a failure code, search Microsoft’s documentation for it – the [common Windows Update errors](https://learn.microsoft.com/en-us/troubleshoot/windows-client/installing-updates-features-roles/common-windows-update-errors) page lists many. A few common patterns:

- **0x80070002 / 0x80070003** – files missing from the update cache. The reset in Step 7 usually fixes this.
- **0x80070070** – not enough disk space.
- **0x800f0922** – often a connection problem (for example a VPN) or insufficient space on the system reserved partition.

## Step 6: Repair system files

Corrupted system files can stop updates from installing. Run DISM and SFC as described in our guide to [repairing Windows system files](/articles/repair-windows-sfc-dism/), then restart and try the update again.

## Step 7: Reset Windows Update components

This advanced step clears Windows Update’s download cache and restarts its services. It is safe when followed exactly, but requires administrator rights.

1. Right-click **Start** and choose **Terminal (Admin)**.
2. Stop the update-related services:

```
net stop wuauserv
net stop cryptSvc
net stop bits
net stop msiserver
```

3. Rename the cache folders so Windows creates fresh ones:

```
ren C:\Windows\SoftwareDistribution SoftwareDistribution.old
ren C:\Windows\System32\catroot2 catroot2.old
```

If you are using PowerShell and `ren` complains, use `Rename-Item` with the same paths, for example `Rename-Item C:\Windows\SoftwareDistribution SoftwareDistribution.old`.

4. Start the services again:

```
net start wuauserv
net start cryptSvc
net start bits
net start msiserver
```

5. Restart the PC and check for updates.

If a rename fails with “access denied”, one of the services is still running – repeat the `net stop` commands. Once updates are working again, you can delete the `.old` folders to recover disk space.

## Step 8: Install the update manually

If one particular update keeps failing, you can download it directly from the **Microsoft Update Catalog** (catalog.update.microsoft.com). Search for its KB number (shown in Update history), download the version matching your system (for most PCs, x64), and run the file.

For feature updates (moving to a new Windows 11 version), Microsoft’s **Installation Assistant** on the Windows 11 download page can perform the upgrade while keeping your files and apps.

## Step 9: Last resorts

If updates still fail, **Settings › System › Recovery** offers *Fix problems using Windows Update*, which reinstalls the current version of Windows while keeping your files, apps and settings (available on recent Windows 11 versions). Failing that, *Reset this PC* is the final option – back up first.

## Conclusion

Most update problems are solved by patience, free disk space, a restart and the built-in troubleshooter. When they aren’t, repairing system files and resetting the Windows Update cache resolve the majority of stubborn failures. Keep going in order and avoid drastic steps until the simple ones have been ruled out.
