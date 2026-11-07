---
title: "How to Create a Windows 11 Installation USB Drive"
description: "Create a bootable Windows 11 installation USB with Microsoft's Media Creation Tool, then boot from it to reinstall or repair Windows – with requirements, BIOS tips and troubleshooting."
date: 2026-10-02
category: it-tutorials
keywords: [windows 11, bootable usb, media creation tool, reinstall windows, installation media, uefi, boot menu]
relatedSlugs: [repair-windows-sfc-dism, upgrade-laptop-to-ssd, computer-wont-turn-on]
faq:
  - q: "How big does the USB drive need to be?"
    a: "Microsoft recommends a blank USB flash drive with at least 8 GB of space. Everything on the drive is erased during creation, so copy off any files first."
  - q: "Do I need a product key to install Windows 11?"
    a: "If the PC previously had an activated Windows 10 or Windows 11 installation of the same edition, it normally has a digital licence and activates automatically after installation. You can choose 'I don't have a product key' during setup."
  - q: "Can I make a Windows 11 USB on a Mac?"
    a: "Microsoft's Media Creation Tool runs on Windows only. On a Mac, the simplest option is to use another Windows PC, or download the Windows 11 ISO and use a third-party tool – which is more complex and not covered by Microsoft's instructions."
references:
  - title: "Microsoft – Download Windows 11"
    url: "https://www.microsoft.com/software-download/windows11"
  - title: "Microsoft Support – Create installation media for Windows"
    url: "https://support.microsoft.com/en-us/windows/create-installation-media-for-windows-99a58364-8c02-206f-aa6f-40c3b507420d"
  - title: "Microsoft Support – Windows 11 system requirements"
    url: "https://support.microsoft.com/en-us/windows/windows-11-system-requirements-86c11283-ea52-4782-9efd-7674389a7ba3"
---

A Windows 11 installation USB is one of the most useful tools you can own. It lets you reinstall Windows on a new SSD, repair a PC that won’t start, or perform a clean installation to get rid of years of clutter. Creating one takes about 30–60 minutes, mostly waiting for the download.

## What you need

- A working Windows PC with an internet connection (it doesn’t have to be the PC you’ll install on).
- A **USB flash drive of at least 8 GB**. Everything on it will be erased.
- A PC that meets the [Windows 11 system requirements](https://support.microsoft.com/en-us/windows/windows-11-system-requirements-86c11283-ea52-4782-9efd-7674389a7ba3) if you intend to install Windows 11 – including a compatible 64-bit processor, 4 GB RAM, 64 GB storage, UEFI with Secure Boot capability and TPM 2.0.

## Step 1: Download the Media Creation Tool

1. Go to Microsoft’s official **Download Windows 11** page: microsoft.com/software-download/windows11.
2. Under **Create Windows 11 Installation Media**, select **Download Now**.
3. Run the downloaded file (named something like *MediaCreationToolW11.exe*) and approve the User Account Control prompt.

> Only download Windows from Microsoft’s own website. Unofficial “pre-activated” or modified Windows images can contain malware.

## Step 2: Create the USB drive

1. Accept the licence terms.
2. Choose the **language and edition**. By default, the tool uses the recommended options for the PC you’re running it on. Untick *Use the recommended options for this PC* to choose a different language.
3. Select **USB flash drive** and click **Next**.
4. Choose your USB drive from the list. Double-check it’s the right one if several drives are connected.
5. The tool downloads Windows 11 and writes it to the USB drive. This can take a while depending on your connection.
6. When you see *Your USB flash drive is ready*, click **Finish**.

If you choose **ISO file** instead, you get a disk image you can use for virtual machines or keep as a backup.

## Step 3: Back up before you install

If you’re reinstalling on an existing PC, a clean installation deletes everything on the drive you install to. Back up your files first – see our [3-2-1 backup guide](/articles/3-2-1-backup-rule/). If the drive uses **BitLocker**, make sure you have the recovery key.

## Step 4: Boot from the USB drive

1. Insert the USB drive into the PC you want to install on.
2. Turn the PC on and immediately press the **boot menu key** repeatedly. Common keys include <kbd>F12</kbd>, <kbd>F11</kbd>, <kbd>F9</kbd>, <kbd>F8</kbd> or <kbd>Esc</kbd> – the key varies by manufacturer and is usually shown briefly on the startup screen or in the PC’s manual.
3. Select the USB drive (often shown with its brand name or as *UEFI: USB…*).

If Windows is currently running, you can also go to **Settings › System › Recovery › Advanced startup › Restart now**, then choose **Use a device** and select the USB drive.

If the PC doesn’t see the USB drive, enter the firmware setup (BIOS/UEFI) and check that USB booting is enabled. Leave **Secure Boot** on – Windows 11 installation media supports it.

## Step 5: Install or repair Windows

When Windows Setup starts:

- **To install:** choose your language and keyboard, select **Install Windows 11**, and follow the prompts. When asked for a product key, choose **I don’t have a product key** if the PC was previously activated; it will usually activate automatically once online.
- **To repair a PC that won’t start:** choose **Repair my PC** on the first screen to reach the recovery tools, including Startup Repair, System Restore and the Command Prompt.

On the disk selection screen, take care to choose the correct drive. For a clean install on a single-drive PC, you can delete the existing partitions on that drive and install to the unallocated space – Setup creates the required partitions automatically. **Deleting partitions permanently erases their data.**

## Step 6: After installation

- Connect to the internet and run **Windows Update** several times until no more updates appear.
- Install drivers from your PC manufacturer’s support site if any devices aren’t working (Windows Update handles most).
- Check activation under **Settings › System › Activation**.
- Reinstall your apps – [winget](/articles/winget-package-manager-guide/) can speed this up – and restore your files.

## Troubleshooting

- **The tool fails with an error code:** restart the PC, try a different USB port or drive, temporarily disable third-party antivirus, and make sure you have enough free disk space on the PC running the tool.
- **The PC won’t boot from USB:** try another USB port (preferably directly on the PC, not a hub), check the boot menu key, and confirm USB boot is enabled in the firmware.
- **“This PC doesn’t currently meet Windows 11 system requirements”:** check TPM and Secure Boot are enabled in the firmware. Some older PCs simply aren’t supported.

## Conclusion

With an 8 GB USB drive and Microsoft’s free Media Creation Tool, you can create installation media that repairs or reinstalls Windows 11 whenever you need it. Keep it somewhere safe and update it occasionally, so you start from a recent version of Windows.
