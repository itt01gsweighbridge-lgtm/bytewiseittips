---
title: "Microsoft Store Not Working in Windows 11? How to Fix It"
description: "Microsoft Store won't open, or apps won't download or update? Work through these safe Windows 11 fixes, from clearing the Store cache to repairing the app."
date: 2026-11-28
category: software
keywords: [microsoft store not working, microsoft store won't open, wsreset, store downloads stuck, reset microsoft store, windows 11 apps, store app not updating]
relatedSlugs: [install-software-safely-windows, winget-package-manager-guide, repair-windows-sfc-dism]
faq:
  - q: "Does wsreset.exe delete my apps?"
    a: "No. wsreset.exe clears the Microsoft Store's cache only. Your installed apps, their data and your purchases are not removed. When it finishes, the Store opens automatically."
  - q: "What is the difference between Repair and Reset for the Microsoft Store?"
    a: "Repair tries to fix the app without touching its data. Reset returns the app to its original state, so you may need to sign in to the Store again afterwards. Microsoft recommends trying Repair first and using Reset if Repair isn't available or doesn't help."
  - q: "Can I uninstall and reinstall the Microsoft Store?"
    a: "Microsoft states that removing the Microsoft Store app is not supported. Instead, use the Repair and Reset options, re-register the app with PowerShell, or update Windows, as described in this guide."
  - q: "Can I install Store apps without the Store?"
    a: "Yes. winget, the Windows Package Manager, can install many Microsoft Store apps from the command line using the msstore source, which is useful if the Store itself won't open."
references:
  - title: "Microsoft Support – Microsoft Store doesn't open"
    url: "https://support.microsoft.com/help/4027338/microsoft-store-does-not-launch"
  - title: "Microsoft Support – Fix problems with apps from Microsoft Store"
    url: "https://support.microsoft.com/en-us/help/4027498"
  - title: "Microsoft Support – Repair apps and programs in Windows"
    url: "https://support.microsoft.com/en-au/windows/repair-apps-and-programs-in-windows-e90eefe4-d0a2-7c1b-dd59-949a9030f317"
  - title: "Microsoft Learn – Modern, Inbox, and Microsoft Store Apps troubleshooting guidance"
    url: "https://learn.microsoft.com/en-us/troubleshoot/windows-client/shell-experience/modern-inbox-store-apps-troubleshooting-guidance"
---

The Microsoft Store is how Windows 11 installs and updates many apps, including some of Windows' own tools. When it stops working, the symptoms vary: the Store won't open at all, it opens and closes straight away, a download sits at "Pending" forever, or updates fail with an error. The good news is that most Store problems are caused by a corrupted cache, an out-of-date Windows installation or incorrect settings, and all of these can be fixed without reinstalling Windows.

This guide works from the quickest and safest fixes to the more technical ones. Try each step in order and check whether the Store works before moving on.

## Restart the PC and check your connection

It sounds obvious, but a full restart clears stuck background processes that the Store relies on. Use **Start › Power › Restart** rather than shutting down, because Windows' Fast Startup feature means a normal shutdown doesn't always start everything fresh.

While you're at it, check that other websites load. If your internet connection is unreliable, the Store will struggle to download anything. Our guide to [Wi-Fi that's connected but has no internet](/articles/wifi-connected-no-internet/) can help if the problem is wider than the Store.

## Reset the Microsoft Store cache with wsreset

Microsoft's first recommendation when the Store won't open is to clear its cache. This is safe: it doesn't remove your apps, their data or your purchases.

1. Press <kbd>Windows</kbd>+<kbd>R</kbd> to open the **Run** dialog.
2. Type the following and select **OK**:

```
wsreset.exe
```

3. A blank Command Prompt window appears. After about ten seconds it closes and the Microsoft Store opens automatically.

Don't close the blank window yourself – just wait. If the Store opens normally, try your download or update again.

## Install the latest Windows updates

The Store depends on components that are updated through Windows Update, so an out-of-date PC is a common cause of failed downloads.

1. Go to **Start › Settings › Windows Update**.
2. Select **Check for updates**.
3. If updates are available, install them and restart when asked.

If Windows Update itself is failing, fix that first with our guide to [Windows Update getting stuck](/articles/windows-update-stuck-fix/).

## Check the date, time and region

Microsoft lists time and location settings as something to check when the Store won't work. The Store uses secure connections, and an incorrect clock can cause them to fail.

1. Go to **Settings › Time & language › Date & time**.
2. Turn on **Set time automatically** and **Set time zone automatically** if they're available, then select **Sync now**.
3. Under **Settings › Time & language › Language & region**, make sure **Country or region** is set to where you actually are.

## Make sure you're signed in

Many Store features need a Microsoft account. Open the Store and select your profile picture at the top of the window. If you're not signed in, sign in. If you are, signing out and back in again can clear a stuck account session.

If you're using a work or school PC, your organisation may restrict or block the Store. In that case, contact your IT department rather than trying the steps below.

## Update the Store and retry the download

Once the Store opens, it's worth updating it and your apps in one go:

1. Open **Microsoft Store** and select **Library** in the bottom-left corner.
2. Select **Get updates**. Any update for the Store itself installs automatically.
3. If a particular app failed to install, find it in **Library** and select **Install** again.

Also check that you have enough free space in **Settings › System › Storage**. Large apps and games need room for the download as well as the installed files.

## Repair or reset the Microsoft Store app

Windows 11 has built-in repair options for Store apps, including the Store itself. Try **Repair** first, because it doesn't touch the app's data.

1. Go to **Start › Settings › Apps › Installed apps**.
2. Find **Microsoft Store** in the list and select the **More** icon (three dots) next to it.
3. Select **Advanced options**.
4. Select **Repair** and wait for the tick to appear. Test the Store.
5. If that doesn't help, return to the same page and select **Reset**.

> **Before you select Reset:** it returns the Store app to its original state, so you may need to sign in to the Store again. It does not uninstall the apps you've already installed.

You can use the same steps for any individual app from the Store that won't open or keeps crashing.

## Re-register the Microsoft Store with PowerShell

If the Store still won't open, its registration with Windows may be damaged. Microsoft's troubleshooting guidance for Store apps shows how to re-register an app package using PowerShell. This doesn't delete anything; it tells Windows to register the existing Store package again for your user account.

> **Note:** this is an advanced step. Type the command exactly as shown and don't run removal commands you find online – Microsoft warns that removing app packages can be irreversible, and removing the Microsoft Store app is not supported.

1. Right-click **Start** and choose **Terminal**. A normal (non-administrator) window is fine, because the command applies to your own account.
2. Paste the following command and press <kbd>Enter</kbd>:

```
Get-AppxPackage *WindowsStore* | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}
```

3. Wait for the command to finish, restart the PC and try opening the Store again.

To check that the Store package is present at all, you can run:

```
Get-AppxPackage *WindowsStore*
```

If this returns nothing, the Store isn't installed for your account. Microsoft suggests searching the Start menu for **Microsoft Store** first, and if it's missing, installing it again from the Microsoft Store website.

## Install apps with winget while you troubleshoot

If you need an app urgently and the Store still isn't cooperating, winget can install many Store apps from the command line. Microsoft's own guidance uses the `msstore` source for this. For example, to search for an app and then install it by its Store ID:

```
winget search "app name" --source msstore
winget install --id <StoreID> --source msstore
```

Replace `<StoreID>` with the ID shown in the search results. Our [winget guide](/articles/winget-package-manager-guide/) explains the basics, and our guide to [installing software safely](/articles/install-software-safely-windows/) covers what to check before installing apps from any source.

## If nothing works: repair Windows system files

When the Store and several other built-in apps misbehave, the problem may be corrupted Windows system files rather than the Store itself. Running the built-in SFC and DISM tools can repair them without affecting your personal files – see our step-by-step guide to [repairing Windows with SFC and DISM](/articles/repair-windows-sfc-dism/).

## Conclusion

Most Microsoft Store problems in Windows 11 are fixed by the simple steps: restart, run `wsreset.exe`, install Windows updates and check the date, time and region. If the Store still won't behave, use the **Repair** and **Reset** options in Settings, then re-register the app with PowerShell. Keep winget in mind as a handy alternative when you need an app straight away, and if several built-in apps are failing, repair Windows' system files next. On a work or school device, check with your IT team first, as the Store may be managed by your organisation.
