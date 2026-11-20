---
title: "How to Check Your PC Specs in Windows 11: CPU, RAM, GPU, Storage"
description: "Find your processor, RAM, graphics card, storage and Windows version in Windows 11 using Settings, Task Manager, System Information, DxDiag and systeminfo."
date: 2026-11-20
category: it-tutorials
keywords: [pc specs, windows 11, check ram, graphics card, processor, system information, msinfo32, systeminfo]
relatedSlugs: [how-much-ram-do-you-need, upgrade-laptop-to-ssd, ssd-vs-hdd]
faq:
  - q: "How do I check my PC specs without opening the case?"
    a: "Everything most people need is visible in Windows itself. Settings › System › About shows the processor, installed RAM and system type, Task Manager's Performance tab shows the graphics card and storage, and System Information (msinfo32) shows the motherboard model and BIOS version."
  - q: "Why does Windows show less usable RAM than is installed?"
    a: "Some memory is reserved for hardware, most often for integrated graphics that share system RAM. A difference of a few hundred megabytes up to a couple of gigabytes is normal on PCs with integrated graphics. A much larger gap can mean a memory module isn't seated or detected properly."
  - q: "Is it safe to share a System Information or DxDiag report with support?"
    a: "These reports describe your hardware, drivers and Windows configuration, and they can include your computer name and user name. Share them only with a support team or vendor you trust, and check the file before sending it if you're concerned."
references:
  - title: "Microsoft Support – Find information about your Windows device"
    url: "https://support.microsoft.com/en-us/windows/experience/find-information-about-your-windows-device"
  - title: "Microsoft Support – Which version of DirectX is on your PC?"
    url: "https://support.microsoft.com/help/4028644/windows-open-and-run-dxdiagexe"
  - title: "Microsoft Learn – msinfo32"
    url: "https://learn.microsoft.com/windows-server/administration/windows-commands/msinfo32"
  - title: "Microsoft Learn – systeminfo"
    url: "https://learn.microsoft.com/windows-server/administration/windows-commands/systeminfo"
---

Sooner or later you’ll need to know exactly what’s inside your computer. A game or app lists minimum requirements, an IT support team asks for your Windows version, or you’re wondering whether a memory or SSD upgrade is worth it. The good news is that Windows 11 shows all of this without any extra software and without opening the case.

This guide starts with the quickest method and works up to the more detailed tools that IT professionals use. None of the steps change anything on your PC – they only display information.

## What “specs” usually means

When people ask for your PC specifications, they normally want some or all of these:

- **Processor (CPU)** – the make and model, for example an Intel Core or AMD Ryzen chip.
- **Memory (RAM)** – how much is installed, and sometimes its speed and how many slots are used.
- **Graphics (GPU)** – integrated graphics built into the processor, a separate graphics card, or both.
- **Storage** – the size and type of drive (SSD or hard disk) and how much space is free.
- **Windows edition and version** – for example Windows 11 Home or Pro, plus the version number.
- **Device model** – useful when looking up drivers, parts or warranty details from the manufacturer.

## Method 1: Settings › System › About (quickest)

This is the place to start for most questions.

1. Right-click the **Start** button and select **Settings**.
2. Select **System**, then **About** (it’s near the bottom of the list).

Under **Device specifications** you’ll see the device name, the **processor**, the amount of **installed RAM** and the **system type** – whether you’re running a 64-bit or 32-bit version of Windows. Further down, **Windows specifications** shows the **edition** (Home, Pro and so on) and the **version** of Windows.

Each section has a **Copy** button, which is handy when you need to paste the details into an email or support ticket.

For storage, go to **Settings › System › Storage**. This shows how much space is used and free on each drive, and what kind of files are using it.

## Method 2: Task Manager’s Performance tab (CPU, RAM, GPU, disks)

Task Manager gives a clear, live view of the main components, including the graphics card, which the About page doesn’t show.

1. Press **Ctrl + Shift + Esc** to open Task Manager.
2. Select **Performance** in the left-hand menu (the icon looks like a small graph).
3. Select each item in turn:
   - **CPU** – the processor model, its base speed, and the number of cores and logical processors.
   - **Memory** – total RAM, its speed, and **Slots used** (for example “2 of 4”). This tells you whether there are free slots for an upgrade.
   - **Disk** – each drive with its model name and whether it is an SSD or HDD.
   - **GPU** – the graphics processor’s name and its dedicated and shared memory. PCs with both integrated and separate graphics show two GPU entries.

If you’re thinking of adding memory, our guide to [how much RAM you really need](/articles/how-much-ram-do-you-need/) explains what different amounts are good for, and [SSD vs HDD](/articles/ssd-vs-hdd/) explains why the drive type matters so much for speed.

## Method 3: System Information (msinfo32) for the full picture

System Information is Windows’ built-in inventory tool. Microsoft describes it as giving a comprehensive view of the hardware, system components and software environment on the computer.

1. Press **Windows key + R** to open the Run box.
2. Type the following and press **Enter**:

```
msinfo32
```

The **System Summary** page shows details the other tools don’t, including:

- **System Manufacturer** and **System Model** – the exact model to search for on the manufacturer’s support site;
- **BaseBoard Manufacturer** and **BaseBoard Product** – the motherboard;
- **BIOS Version/Date** and **BIOS Mode** (UEFI or Legacy);
- **Installed Physical Memory (RAM)** and **Total Physical Memory**.

Expand **Components** on the left for more detail about the display adapter, storage and network adapters.

To save a copy for a support team, choose **File › Export** to create a text file, or **File › Save** for an .nfo file that opens in System Information on another PC. You can also create a text report from Command Prompt (search for **cmd** in the Start menu) – change the path to suit you:

```
msinfo32 /report "%USERPROFILE%\Desktop\pc-specs.txt"
```

The report can take a minute or two to generate on some PCs, so be patient.

## Method 4: DxDiag for graphics and display details

The DirectX Diagnostic Tool is what game publishers and graphics card makers often ask for when you need help.

1. Select the search box on the taskbar, type **dxdiag** and select it from the results.
2. If it asks whether to check that your drivers are digitally signed, Microsoft recommends choosing **Yes**.
3. The **System** tab shows the processor, memory, Windows edition and DirectX version.
4. The **Display** tab (there may be more than one) shows the graphics device name, its memory and the driver version and date.

To share the results, select **Save All Information…** and save the text file somewhere easy to find, such as your desktop.

## Method 5: The systeminfo command

If you prefer the command line, or you’re checking a PC remotely for someone, `systeminfo` prints a detailed summary in one go: operating system name and version, system manufacturer and model, processor, BIOS version, total and available memory, installed updates and network cards.

1. Select **Start**, type **cmd** and open **Command Prompt**.
2. Run:

```
systeminfo
```

Microsoft documents a `/fo` option for choosing the output format – TABLE, LIST or CSV. A CSV file opens neatly in Excel, which is useful if you’re recording the specs of several office PCs:

```
systeminfo /fo csv > "%USERPROFILE%\Desktop\pc-specs.csv"
```

The plain `systeminfo` command also works in PowerShell and Windows Terminal, but the `%USERPROFILE%` shortcut in the example above is Command Prompt syntax. For other everyday commands, see our list of [network troubleshooting commands](/articles/network-troubleshooting-commands/).

## Check the RAM type and free slots before upgrading

Task Manager already shows the memory speed and slots used. If you need more detail – such as each module’s size, speed and manufacturer – run this in PowerShell (search for **PowerShell** in the Start menu):

```
Get-CimInstance Win32_PhysicalMemory | Format-Table BankLabel, Capacity, Speed, Manufacturer, PartNumber
```

Capacity is shown in bytes, so 8589934592 means 8 GB. Before buying memory or a drive, always confirm compatibility with your PC or motherboard manufacturer using the model shown in System Information. Many thin laptops have memory soldered to the motherboard, so it can’t be upgraded at all, even if Windows shows a spare “slot”. If storage is your bottleneck, our step-by-step guide to [upgrading a laptop to an SSD](/articles/upgrade-laptop-to-ssd/) covers moving to a faster drive without losing data.

## Which method should you use?

| You need… | Quickest place to look |
|---|---|
| Processor, RAM, Windows edition | Settings › System › About |
| Graphics card | Task Manager › Performance › GPU, or DxDiag |
| Free memory slots and speed | Task Manager › Performance › Memory |
| Drive type and free space | Task Manager › Performance › Disk, or Settings › System › Storage |
| Exact model, motherboard, BIOS | System Information (msinfo32) |
| A report to send to support | msinfo32 export, DxDiag “Save All Information…”, or systeminfo |

## Conclusion

For most questions, **Settings › System › About** answers everything in a few seconds, and Task Manager’s **Performance** tab fills in the graphics card, memory slots and drive type. When you need the full picture – the exact model, motherboard or BIOS version – open **System Information** with `msinfo32`, and use **DxDiag** or **systeminfo** when a support team wants a report. All of these tools are built into Windows 11 and only read information, so they’re safe to explore.
