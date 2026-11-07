---
title: "How to Install and Update Apps from the Command Line with winget"
description: "A beginner-friendly guide to winget, the Windows Package Manager: search for apps, install by ID, update everything at once, uninstall programs and export your app list to a new PC."
date: 2026-09-28
category: software
keywords: [winget, windows package manager, command line, install apps, update apps, powershell, windows 11]
relatedSlugs: [install-software-safely-windows, uninstall-stubborn-programs, create-windows-11-installation-usb]
faq:
  - q: "Is winget safe?"
    a: "winget is developed by Microsoft and installs apps from configured sources – mainly the community-reviewed winget repository, which points to installers from official publisher websites, and the Microsoft Store. As with any software, check the app ID and publisher before installing."
  - q: "Do I need to install winget?"
    a: "On Windows 11 and up-to-date Windows 10, winget is included as part of the App Installer from the Microsoft Store. Type winget --version in a terminal to check. If it's missing, update App Installer from the Microsoft Store."
  - q: "Can winget update apps I installed manually?"
    a: "Often, yes. winget recognises many programs installed outside winget and can upgrade them if it finds a matching package. Run winget upgrade to see which apps it can update."
references:
  - title: "Microsoft Learn – Use WinGet to install and manage applications"
    url: "https://learn.microsoft.com/en-us/windows/package-manager/winget/"
  - title: "Microsoft Learn – install command (winget)"
    url: "https://learn.microsoft.com/en-us/windows/package-manager/winget/install"
  - title: "Microsoft Learn – upgrade command (winget)"
    url: "https://learn.microsoft.com/en-us/windows/package-manager/winget/upgrade"
---

Setting up a new PC usually means visiting a dozen websites, downloading installers and clicking through setup screens. **winget** – the Windows Package Manager – lets you install, update and remove apps with short commands instead. It’s built into Windows 11, it’s free, and it’s useful even if you rarely use the command line.

## Check that winget is available

Right-click **Start**, choose **Terminal**, and type:

```
winget --version
```

If you see a version number, you’re ready. If Windows says the command isn’t recognised, open the **Microsoft Store**, search for **App Installer**, and update it.

The first time you use winget, it may ask you to accept the source agreements. Type `Y` and press <kbd>Enter</kbd>.

## Search for an app

```
winget search firefox
```

The results show each package’s **Name**, **Id**, **Version** and **Source**. The **Id** is the important part – it uniquely identifies the package, for example `Mozilla.Firefox`.

To see more details, including the publisher and download URL:

```
winget show --id Mozilla.Firefox
```

> Always check the **Id** and **publisher** before installing. Searching by a generic name can return several similar packages.

## Install an app

Use the exact ID for reliable results:

```
winget install --id Mozilla.Firefox --exact
```

winget downloads the installer from the publisher’s source and runs it. Some installers will show a User Account Control prompt asking for permission – check the publisher name before approving.

A few more examples (check IDs with `winget search` first):

```
winget install --id 7zip.7zip --exact
winget install --id VideoLAN.VLC --exact
winget install --id Microsoft.PowerToys --exact
```

## See what’s installed

```
winget list
```

This lists apps installed on your PC, including many that weren’t installed with winget. Add a name to filter, for example `winget list vlc`.

## Update apps

To see which apps have updates available:

```
winget upgrade
```

To update one app:

```
winget upgrade --id VideoLAN.VLC --exact
```

To update everything winget can:

```
winget upgrade --all
```

This is one of winget’s most useful features – a single command can bring most of your apps up to date. Some apps (especially those that update themselves or that winget can’t match exactly) may be listed as unknown or skipped; update those manually.

Close the apps you’re updating first, to avoid installer errors.

## Uninstall an app

```
winget uninstall --id VideoLAN.VLC --exact
```

winget runs the program’s own uninstaller. For apps that refuse to uninstall, see our guide to [removing stubborn programs](/articles/uninstall-stubborn-programs/).

## Move your apps to a new PC

winget can export a list of your apps to a file and reinstall them elsewhere:

```
winget export -o apps.json
```

Copy `apps.json` to the new PC (for example on a USB drive or via OneDrive), then run:

```
winget import -i apps.json
```

Apps that aren’t available in winget’s sources are skipped and reported. Your settings and files aren’t included – only the apps themselves.

## Useful options

| Option | What it does |
|---|---|
| `--exact` (`-e`) | Match the ID exactly, avoiding similar packages |
| `--silent` | Run the installer with no interface where supported |
| `--accept-package-agreements` | Accept licence agreements automatically (useful in scripts) |
| `--source winget` | Use only the community repository, not the Microsoft Store |
| `--scope user` | Install for the current user only, where supported |

## Troubleshooting common winget problems

**“winget is not recognized as an internal or external command”.** App Installer is missing or outdated. Update **App Installer** from the Microsoft Store, then close and reopen Terminal. On managed work devices, winget may be disabled by policy.

**“No package found matching input criteria”.** The name you typed doesn’t match a package. Run `winget search` with a shorter keyword, then install using the exact **Id** from the results.

**“Multiple packages found matching input criteria”.** Several packages share a similar name. Add `--id` and `--exact` with the precise Id, or add `--source winget` or `--source msstore` to choose where it comes from.

**An upgrade keeps reappearing in `winget upgrade`.** Some apps report their version differently from the package information, so winget thinks they are out of date. Check the version inside the app itself; if it’s current, you can ignore the entry or pin the package with `winget pin add --id Publisher.App` to stop winget offering upgrades for it.

**Installer fails with an error code.** Close the app you’re updating, make sure no other installation is running, and try again. If it still fails, download the installer from the publisher’s official website and run it manually – winget uses the same installer, so the publisher’s support pages will usually explain the error.

**Source errors or out-of-date results.** Run the following to refresh winget’s package lists:

```
winget source update
```

If problems persist, `winget source reset --force` (in an administrator terminal) restores the default sources.

## Tips and cautions

- **Work PCs:** your organisation may restrict winget or manage software centrally. Check with IT before using it on a managed device.
- **Licences still apply:** winget installs software but doesn’t change its licence terms; paid apps still need a licence.
- **Review before automating:** if you build a script of `winget install` commands, double-check each ID first.

## Conclusion

winget turns software installation and updates into a few predictable commands. Use `winget search` to find the correct ID, `winget install --id … --exact` to install, and `winget upgrade --all` regularly to keep your apps patched. It’s a simple way to make your PC both quicker to set up and more secure.
