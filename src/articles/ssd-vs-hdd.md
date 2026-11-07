---
title: "SSD vs HDD: Which Storage Should You Choose?"
description: "A plain-English comparison of solid-state drives and hard disk drives – speed, capacity, cost, reliability and noise – plus SATA vs NVMe explained and which to choose for laptops, desktops and backups."
date: 2026-10-04
category: buying-guides
keywords: [ssd, hdd, nvme, sata, storage, buying guide, hard drive, solid state drive]
relatedSlugs: [upgrade-laptop-to-ssd, how-much-ram-do-you-need, 3-2-1-backup-rule]
faq:
  - q: "Do SSDs wear out?"
    a: "SSDs have a limited number of write cycles, which manufacturers express as a TBW (terabytes written) rating. For typical home and office use, modern SSDs are rated to last for many years. Hard drives wear out too, through mechanical parts. Whatever you use, keep backups."
  - q: "Should I defragment my SSD?"
    a: "No. Windows recognises SSDs and runs the appropriate optimisation (TRIM) automatically through the Optimise Drives tool. Traditional defragmentation is only useful for hard drives."
  - q: "Is NVMe worth it over SATA?"
    a: "For booting, opening apps and everyday work, the difference between a SATA SSD and an NVMe SSD is noticeable but smaller than the jump from a hard drive to any SSD. NVMe makes a bigger difference for moving large files, video editing and some games. If your PC supports NVMe, it's usually the better choice at similar prices."
references:
  - title: "Microsoft Support – Defragment / optimize your data drives in Windows"
    url: "https://support.microsoft.com/en-us/windows/ways-to-improve-your-computer-s-performance-c6018c78-0edd-a71a-7040-02267d68ea90"
  - title: "NVM Express – About NVMe"
    url: "https://nvmexpress.org/"
---

Storage has a bigger effect on how fast a computer *feels* than almost any other component. Choosing between a solid-state drive (SSD) and a hard disk drive (HDD) is mostly a trade-off between speed and cost per gigabyte. This comparison is based on how the technologies work and on published specifications – not on lab benchmarks of individual products.

## How they work

- An **HDD** stores data on spinning magnetic platters, read by a moving arm. Because parts physically move, accessing scattered data takes time.
- An **SSD** stores data in flash memory chips with no moving parts. It can access any location almost instantly.

That fundamental difference explains nearly every pro and con below.

## Side-by-side comparison

| Factor | SSD | HDD |
|---|---|---|
| **Speed** | Much faster, especially for starting Windows, opening apps and searching files | Slower, particularly with many small files |
| **Cost per gigabyte** | Higher | Lower – best for very large capacities |
| **Capacity for the money** | Good up to a few terabytes | Excellent for multi-terabyte storage |
| **Durability** | No moving parts; more tolerant of knocks and drops | Sensitive to shocks, especially while running |
| **Noise** | Silent | Audible spinning and clicking |
| **Power use** | Generally lower – helps laptop battery life | Higher |
| **Size** | Very small (M.2 sticks) or 2.5-inch | 2.5-inch (laptops) or 3.5-inch (desktops) |
| **Data recovery after failure** | Can be more difficult | Professional recovery sometimes possible |

## SSD types: SATA vs NVMe

Not all SSDs are equal. The interface makes a large difference to maximum speed.

- **SATA SSDs** use the same connection as hard drives, which limits them to roughly 550–600 MB/s for sequential transfers. They come as 2.5-inch drives or M.2 cards. Still dramatically faster than an HDD in everyday use.
- **NVMe SSDs** connect directly over PCI Express (PCIe) and are usually M.2 cards. Depending on the PCIe generation (Gen 3, Gen 4, Gen 5) and the drive, they can be many times faster than SATA for large transfers.

Your computer must support the type you buy. Check your motherboard or laptop specifications – M.2 slots may support NVMe, SATA or both. Our [laptop SSD upgrade guide](/articles/upgrade-laptop-to-ssd/) explains how to check.

## Other SSD specifications worth knowing

- **Capacity:** for a Windows system drive, 500 GB is a sensible minimum today; 1 TB is comfortable for most people.
- **Endurance (TBW):** how many terabytes can be written over the warranty period. Higher is better for heavy workloads.
- **DRAM cache and flash type:** drives with a DRAM cache and TLC flash generally sustain performance better than budget drives with QLC flash and no DRAM, especially when the drive is nearly full or copying large files. For basic use, budget drives are usually fine.
- **Warranty:** often three to five years for reputable brands.

## Which should you choose?

### For your main drive (Windows and apps): SSD

Every modern computer should boot from an SSD. If you’re buying a new laptop or desktop, insist on one. If your current PC still boots from a hard drive, upgrading is the most effective improvement you can make – see the [SSD upgrade guide](/articles/upgrade-laptop-to-ssd/) and our guide to [slow Windows startup](/articles/windows-11-slow-startup-fixes/).

### For gaming: NVMe SSD

Modern games load significantly faster from SSDs, and some recent titles list an SSD as a requirement. An NVMe drive is the best choice where supported.

### For large media libraries: HDD (or both)

If you store terabytes of video, photos or archives that don’t need instant access, hard drives remain the cheapest option per terabyte. A common desktop setup is a fast SSD for Windows and apps plus a large HDD for bulk storage.

### For backups: either – but have more than one

External hard drives offer large capacity at low cost, which suits backups. Portable SSDs are faster, smaller and more robust for carrying around. Whichever you choose, follow the [3-2-1 backup rule](/articles/3-2-1-backup-rule/), because any single drive can fail.

### For a NAS (network storage)

Network-attached storage boxes typically use hard drives designed for continuous operation (often labelled as NAS drives), because they offer high capacity at reasonable cost.

## Looking after your drives

- Keep some free space – SSDs and HDDs both work better when not completely full.
- Don’t defragment SSDs; Windows handles optimisation automatically.
- Check drive health occasionally using your manufacturer’s utility.
- Replace any drive that reports errors, and keep backups regardless.

## Conclusion

For the drive that runs Windows and your apps, choose an SSD – preferably NVMe if your computer supports it. Hard drives still make sense for cheap bulk storage and backups. Many people get the best of both: an SSD for speed and an HDD for capacity, with backups on separate drives.
