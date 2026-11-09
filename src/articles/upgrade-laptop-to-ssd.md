---
title: "How to Upgrade Your Laptop to an SSD Without Losing Data"
description: "A practical guide to upgrading a laptop from a hard drive or small SSD: choosing the right drive (SATA vs NVMe, M.2 sizes), cloning or clean installing, and avoiding common mistakes."
date: 2026-11-07
category: hardware
keywords: [ssd upgrade, laptop, nvme, m.2, sata, clone, clonezilla, windows 11]
relatedSlugs: [ssd-vs-hdd, create-windows-11-installation-usb, 3-2-1-backup-rule]
faq:
  - q: "Will upgrading to an SSD make my old laptop faster?"
    a: "If it currently uses a mechanical hard drive, almost certainly – startup, app loading and file searches become dramatically quicker. It won't make the processor or graphics faster, but for everyday use storage is often the main bottleneck."
  - q: "Do I need to reinstall Windows after upgrading?"
    a: "No. You can clone your existing drive to the new SSD, which copies Windows, apps and files. A clean install is an alternative that gives a fresh start, but you'd need to reinstall apps and restore files from backup."
  - q: "Will my Windows licence still work on the new drive?"
    a: "For most laptops sold with Windows, the licence is tied to the hardware (a digital licence), so Windows activates automatically on the new drive after cloning or a clean install, as long as you install the same edition."
references:
  - title: "Microsoft Support – Reinstall Windows with the installation media"
    url: "https://support.microsoft.com/en-us/windows/reinstall-windows-d8369486-3e33-7d9c-dccc-859e2b022fc7"
  - title: "Clonezilla – official website"
    url: "https://clonezilla.org/"
  - title: "Microsoft Support – Activate Windows"
    url: "https://support.microsoft.com/en-us/windows/activate-windows-c39005d4-95ee-b91e-b399-2820fda32227"
---

Replacing a mechanical hard drive with a solid-state drive (SSD) is one of the most cost-effective upgrades for an older laptop. Even laptops that already have an SSD may benefit from a larger one. The job itself usually takes under an hour; the important part is buying the right drive and moving your data safely.

> Before you start: **back up your important files** to an external drive or cloud storage, following the [3-2-1 backup rule](/articles/3-2-1-backup-rule/). Cloning is reliable, but a backup protects you if anything goes wrong.

## Step 1: Check whether your laptop can be upgraded

Some modern ultra-thin laptops have storage soldered to the motherboard, which can’t be replaced. Others have a removable drive behind a bottom panel. To find out:

- search for your exact model number plus “service manual” or “maintenance manual” on the manufacturer’s website;
- check the specifications page, which lists storage type;
- check the warranty terms – opening the case may affect cover on some models.

## Step 2: Identify the right type of SSD

This is where most mistakes happen. Laptops use one of three common drive types:

| Type | What it looks like | Notes |
|---|---|---|
| **2.5-inch SATA** | A small rectangular box, about 7 mm thick | Used in older laptops that had hard drives. Replace with any 2.5-inch SATA SSD. |
| **M.2 SATA** | A thin stick-like card | Uses the SATA protocol; speeds similar to 2.5-inch SATA SSDs. |
| **M.2 NVMe (PCIe)** | A thin stick-like card | Much faster. Most laptops from roughly the last several years use these. |

M.2 SATA and M.2 NVMe drives look almost identical but are **not interchangeable** unless the slot supports both. Your service manual or specifications will say which your slot supports.

M.2 drives also come in different **lengths**, written as a four-digit number: **2280** (22 mm wide, 80 mm long) is the most common, but some laptops need **2230** or **2242**. Measure or check the manual.

Finally, check the **PCIe generation** (Gen 3, Gen 4, Gen 5). Newer drives work in older slots, but only at the slot’s maximum speed – so there’s no need to pay extra for a Gen 5 drive in a Gen 3 laptop.

## Step 3: Choose how to move your data

You have two options.

### Option A: Clone the existing drive

Cloning copies everything – Windows, apps, settings and files – so the laptop works exactly as before, just faster. You’ll need:

- the new SSD;
- a USB enclosure or adapter that matches the new drive (a 2.5-inch SATA-to-USB adapter, or an M.2 NVMe/SATA USB enclosure);
- cloning software. Several SSD manufacturers provide free migration tools for their own drives, and **Clonezilla** is a free, open-source option that works with any drive (it’s powerful but less beginner-friendly).

Cloning is easiest when the new drive is **the same size or larger** than the space used on the old one.

### Option B: Clean install

A clean install gives you a fresh copy of Windows without years of accumulated clutter. You’ll need a Windows installation USB (see our guide to [creating a Windows 11 installation USB](/articles/create-windows-11-installation-usb/)), then reinstall your apps and copy your files back from backup. This takes longer but is a good choice if the laptop has been slow or unstable.

## Step 4: Clone the drive (Option A)

1. Fit the new SSD into the USB enclosure and connect it to the laptop.
2. Run your cloning tool and select the **source** (current internal drive) and **destination** (new SSD). Double-check – the destination will be completely overwritten.
3. If the tool offers an option to resize partitions to fill the new drive, use it.
4. Start the clone and wait for it to finish without using the laptop.

If your current drive uses **BitLocker** encryption, make sure you have your recovery key (for personal Microsoft accounts, it’s typically saved in your account online). Some tools require BitLocker to be suspended before cloning.

## Step 5: Install the new drive

1. Shut the laptop down fully (not sleep), unplug the charger and remove any accessories.
2. Remove the bottom panel as shown in the service manual. Keep screws organised – they’re often different lengths.
3. **Disconnect the internal battery** if the manual says to – this prevents short circuits.
4. Remove the old drive. 2.5-inch drives often sit in a bracket; M.2 drives are held by a single small screw or latch.
5. Fit the new drive in exactly the same way, then reconnect the battery and replace the panel.

Touch a grounded metal object before handling components to discharge static.

## Step 6: Start up and check

Turn the laptop on. After cloning, Windows should start normally. Then:

- Open **Settings › System › Storage** and confirm the full capacity is available. If there’s unallocated space, use **Disk Management** to extend the Windows partition.
- Check Windows is activated in **Settings › System › Activation**.
- Install the SSD manufacturer’s utility if available, for firmware updates and health monitoring.

You don’t need to defragment an SSD – Windows automatically runs the appropriate optimisation (TRIM) for SSDs.

## What to do with the old drive

Keep it as an external backup drive using your USB enclosure, or wipe it securely before disposal. For a hard drive, a full format or a dedicated wiping tool is appropriate; for an SSD, use the manufacturer’s secure-erase feature.

## Conclusion

An SSD upgrade can make an old laptop feel new. Confirm your laptop’s drive type and size before buying, back up first, then either clone your existing drive or perform a clean install. Read our [SSD vs HDD comparison](/articles/ssd-vs-hdd/) if you’re still deciding what to buy.
