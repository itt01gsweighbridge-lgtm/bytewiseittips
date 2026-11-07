---
title: "Computer Won't Turn On? A Systematic Diagnosis Checklist"
description: "Work out why a laptop or desktop PC won't power on or won't boot, step by step – from power and display checks to beep codes, RAM and what to tell a repair technician."
date: 2026-10-14
category: hardware
keywords: [pc won't turn on, laptop won't start, no power, black screen, beep codes, power supply, ram]
relatedSlugs: [laptop-overheating-fixes, upgrade-laptop-to-ssd, 3-2-1-backup-rule]
faq:
  - q: "What's the difference between 'won't turn on' and 'won't boot'?"
    a: "A PC that won't turn on shows no signs of life – no lights, fans or sounds. A PC that won't boot powers on (fans spin, lights come on) but doesn't reach Windows, perhaps showing a black screen, an error message or a repair loop. The causes and fixes are different."
  - q: "What is a hard reset on a laptop?"
    a: "A hard or power reset drains residual electricity: unplug the charger, remove the battery if it's removable, hold the power button for 15–30 seconds, then reconnect and try again. Laptops with built-in batteries often have their own reset method described in the manual."
  - q: "Will I lose my files if my computer won't start?"
    a: "Usually not. Most start-up failures are caused by power, display or other components rather than the storage drive. Even if the PC itself is faulty, a technician can normally recover data from the drive – one more reason to keep regular backups."
references:
  - title: "Microsoft Support – Windows startup settings"
    url: "https://support.microsoft.com/en-us/windows/windows-startup-settings-1af6ec8c-4d4a-4b23-adb7-e76eef0b847f"
  - title: "Microsoft Support – Recovery options in Windows"
    url: "https://support.microsoft.com/en-us/windows/recovery-options-in-windows-31ce2444-7de3-818c-d626-e3b5a3024da5"
---

When a computer won’t start, it’s tempting to assume the worst. In reality, the cause is often simple – a loose cable, a flat battery or a monitor on the wrong input. The trick is to work methodically, ruling out the easy things first. Start by deciding which situation you’re in:

- **No signs of life:** no lights, no fan noise, nothing. → Start at Step 1.
- **Powers on but no picture:** lights and fans come on but the screen stays black. → Start at Step 4.
- **Starts but doesn’t reach Windows:** you see the manufacturer logo or an error, or it loops. → Start at Step 7.

> **Safety first:** never open a desktop power supply unit or a laptop battery. If you smell burning, see smoke or notice a swollen battery, unplug the device and stop.

## Step 1: Check the power source

- Plug something else (such as a lamp or phone charger) into the same socket to confirm it works.
- Bypass extension leads and surge protectors and plug directly into the wall.
- Check the power cable is firmly seated at **both ends**. On desktops, check the switch on the back of the power supply is set to on (often marked I/O).
- On laptops, look for a light on the charger or the laptop’s charging indicator. Try a different compatible charger if you have one.

## Step 2: Laptop battery and power reset

A completely flat battery can take several minutes on charge before a laptop will respond. Leave it plugged in for **at least 30 minutes**, then try again.

Then perform a **power reset**:

1. Unplug the charger and disconnect all accessories.
2. Remove the battery if it’s removable.
3. Hold the power button for 15–30 seconds.
4. Reconnect the charger (and battery) and press the power button.

Many laptops with built-in batteries have a pinhole reset button underneath or a specific key combination – check the manufacturer’s manual.

## Step 3: Desktop internal checks (if you’re comfortable)

If a desktop still shows no life, the power supply (PSU) or its connections are the likely culprit. With the PC **unplugged**:

- Open the side panel and check the large 24-pin connector on the motherboard and the 4/8-pin CPU power connector are fully seated.
- Check the front-panel power button cable is connected to the motherboard header.
- Look for an indicator light on the motherboard, which shows whether it’s receiving standby power.

If there is still nothing, the power supply may have failed. Testing or replacing a PSU is a straightforward job for a repair shop.

## Step 4: Powers on but no picture – check the display

- **Desktop:** make sure the monitor is on and set to the correct input (HDMI, DisplayPort and so on). If the PC has a separate graphics card, connect the monitor to the **graphics card’s** ports, not the motherboard’s.
- Try a different cable and, if possible, a different monitor or TV.
- **Laptop:** shine a torch at the screen at an angle – if you can faintly see an image, the backlight has failed. Connect an external monitor; if it shows a picture, the laptop’s screen or its cable is the problem.
- Try the Windows graphics reset shortcut: <kbd>Win</kbd>+<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>. This restarts the graphics driver if Windows is running but the display has frozen.

## Step 5: Listen for beeps and watch for lights

Many PCs signal hardware faults with patterns of beeps or flashing lights (for example on the power button, caps-lock key or motherboard). The pattern points to a specific component such as memory or graphics. Count the pattern and look it up in your PC or motherboard manufacturer’s support documentation – codes differ between manufacturers.

## Step 6: Strip it back to basics

Faulty peripherals can stop a PC from starting. Disconnect everything except power, keyboard and display – USB drives, printers, docks, external disks and memory cards – and try again.

For desktops, **memory (RAM)** is a common cause of no-picture faults. With the PC unplugged, remove and firmly reseat the RAM modules. If there are several, try starting with just one at a time.

## Step 7: Starts but won’t load Windows

If you see the manufacturer’s logo, an error message, or Windows keeps trying to repair itself:

1. Windows should enter the **Windows Recovery Environment** automatically after two or three failed starts. If it doesn’t, you can interrupt startup by powering off as the Windows logo appears, three times in a row.
2. In recovery, choose **Troubleshoot › Advanced options**. Useful options include:
   - **Startup Repair** – fixes common boot problems automatically.
   - **Uninstall Updates** – removes a recent update that may be causing trouble.
   - **System Restore** – returns system files to an earlier restore point without affecting personal files.
   - **Startup Settings › Safe Mode** – starts Windows with minimal drivers so you can remove a problem app or driver.
3. A message such as “No bootable device” suggests the PC can’t see its storage drive. Check the drive appears in the firmware (BIOS/UEFI) setup. If it doesn’t, the drive or its connection may have failed.

If your drive uses BitLocker encryption, recovery may ask for a **BitLocker recovery key**. For personal Microsoft accounts, it is usually stored in your Microsoft account online; for work devices, ask your IT department.

## What to tell a repair technician

If you need professional help, note down:

- exactly what happens when you press the power button (lights, fans, beeps, messages);
- what changed recently (updates, new hardware, a drop or spill);
- what you’ve already tried.

This saves diagnostic time and money.

## Conclusion

Most “dead” computers have a simple cause: power, display or a loose component. Work through the checklist in order, and use Windows’ built-in recovery tools when the PC powers on but won’t load. And whatever the outcome, this is a good moment to set up a proper [backup routine](/articles/3-2-1-backup-rule/) so a hardware failure never puts your files at risk.
