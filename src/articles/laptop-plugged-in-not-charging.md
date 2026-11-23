---
title: "Laptop Plugged In but Not Charging? How to Fix It in Windows"
description: "Laptop says 'plugged in, not charging'? Check charge limits, the charger and cable, battery drivers, power settings and battery health with these safe steps."
date: 2026-11-23
category: hardware
keywords: [laptop not charging, plugged in not charging, laptop battery, charger, battery report, smart charging, windows 11]
relatedSlugs: [laptop-overheating-fixes, computer-wont-turn-on, check-pc-specs-windows-11]
faq:
  - q: "Why does my laptop stop charging at 80%?"
    a: "This is usually deliberate. Many laptops have a battery-protection feature, such as Smart charging on Surface devices or Primarily AC Use mode on Dell laptops, that holds the charge below 100% to reduce battery wear. Turn the feature off in the manufacturer's app or BIOS if you need a full charge, for example before travelling."
  - q: "Is it safe to keep my laptop plugged in all the time?"
    a: "Modern laptops manage charging themselves, so it is generally fine, but Microsoft notes that keeping a battery at 100% and exposing it to heat speeds up wear. If your laptop offers a charge limit or smart charging setting, turning it on is a good idea when the laptop is mostly used on mains power."
  - q: "Can I use a phone charger to charge a USB-C laptop?"
    a: "It may charge very slowly, only when the laptop is switched off, or not at all, because a phone charger usually supplies far less power than the laptop needs. Use the charger supplied with the laptop or one that meets the wattage the manufacturer specifies."
  - q: "How do I know if my laptop battery needs replacing?"
    a: "Run a battery report with powercfg /batteryreport and compare Full Charge Capacity with Design Capacity. Dell suggests considering a replacement when capacity falls below about half of the original, and any physical swelling means the battery must be replaced by a professional."
references:
  - title: "Microsoft Support – Caring for your battery in Windows"
    url: "https://support.microsoft.com/en-us/windows/experience/power-battery/caring-for-your-battery-in-windows"
  - title: "Microsoft Support – Surface battery won't charge or Surface won't run on battery"
    url: "https://support.microsoft.com/en-us/surface/battery/surface-battery-won-t-charge-or-surface-won-t-run-on-battery"
  - title: "Dell Support – How to Troubleshoot Dell Laptop Battery Issues"
    url: "https://www.dell.com/support/kbdoc/en-us/000123069/how-to-troubleshoot-dell-laptop-battery-issues"
  - title: "Microsoft Learn – Powercfg command-line options"
    url: "https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/powercfg-command-line-options"
---

You plug in your laptop, the battery icon shows a plug, but the percentage refuses to climb – or Windows says **“Plugged in, not charging”**. It looks alarming, but the cause is often harmless: a battery-protection setting, a charger that isn’t powerful enough or a confused battery driver. A worn-out battery or a faulty charging port is less common, and you can rule those in or out with free tools built into Windows.

Work through the steps below in order. They start with the safest, quickest checks and only move on to settings and drivers once the basics are covered.

> **Safety first:** if the battery is swollen (the case is bulging, the touchpad is lifting or the keyboard is pushed up), or you notice a burning smell, unplug the laptop and stop using it. Microsoft advises that you should not puncture or press on a swollen battery. It needs professional replacement.

## Step 1: Check whether a charge limit is switched on

Before assuming something is broken, look at **where** the charging stops. If the battery always stops at a round number such as 80%, 60% or 50%, a battery-protection feature is probably doing its job.

Lithium-ion batteries wear faster when they sit at 100% for long periods, so manufacturers include settings that deliberately hold the charge lower:

- **Microsoft Surface:** Microsoft’s troubleshooting guide explains that a heart symbol on the battery icon and charging that stops at 80% means **Smart charging** may be on, while charging that stops at 50% points to the **Battery Limit** setting.
- **Dell:** the BIOS and Dell’s software offer charge modes. **Primarily AC Use** limits the charge to between 50% and 80%, and **Custom** lets you set your own thresholds. Dell recommends switching to **Standard** if charging stops early.
- **Other brands:** many manufacturers offer similar battery-care settings in their pre-installed control app or the BIOS. Check your model’s manual or support page.

If a limit is on and you are happy with it, there is nothing to fix. Microsoft’s own battery-care guidance actually recommends smart charging for devices that are usually plugged in. Turn it off temporarily when you need a full charge.

## Step 2: Check the charger, cable and socket

Most charging faults come down to the power supply rather than the laptop. Go through these checks:

1. **Try a different wall socket**, plugged in directly rather than through an extension lead.
2. **Inspect the charger and cable** for frayed sections, kinks, bent pins or scorch marks. Replace a damaged charger rather than taping it up.
3. **Check every connection.** Many chargers have two parts – the cable from the wall and the cable from the power brick to the laptop. Make sure both are pushed fully home.
4. **Look at the charging port** with a torch for fluff or debris. Microsoft’s Surface guide suggests gently cleaning connector pins with a pencil eraser and a little rubbing alcohol. Shut the laptop down and unplug it first.
5. **Disconnect power-hungry accessories** such as external drives or docks, which Microsoft lists as a possible cause on Surface devices.

### Is your charger powerful enough?

This matters most with USB-C laptops. A phone charger or a low-wattage USB-C adapter may plug in perfectly but supply too little power to charge the battery while the laptop is running. Dell notes that if the BIOS shows the adapter as **Unknown** or with the wrong wattage, you should try a manufacturer-approved charger that meets the laptop’s wattage requirement. The wattage is printed on the original charger and listed in your laptop’s specifications.

If you are unsure of your exact model, our guide to [checking your PC specs in Windows 11](/articles/check-pc-specs-windows-11/) shows where to find it.

## Step 3: Shut down fully and restart

A full shutdown clears temporary glitches in the charging controller that a normal restart can miss.

1. Select **Start › Power › Shut down**.
2. Unplug the charger and wait about a minute.
3. For Surface devices, Microsoft recommends pressing and holding the power button for **20 seconds** to force a full restart. Other laptops may have their own reset method, described in the manual.
4. Plug the charger back in, wait a few minutes, then switch on.

If the laptop won’t power on at all, even when connected to the mains, follow our [checklist for a computer that won’t turn on](/articles/computer-wont-turn-on/) instead.

## Step 4: Reinstall the battery driver

Windows talks to the battery through a driver listed in Device Manager. If that driver gets confused, Windows may report “Plugged in, not charging” even when the hardware is fine. Reinstalling it is safe because Windows sets it up again automatically.

1. Keep the laptop **plugged in**.
2. Right-click **Start** and select **Device Manager**.
3. Expand **Batteries**.
4. Right-click the battery entry – usually **Microsoft ACPI-Compliant Control Method Battery** (on Surface devices, **Microsoft Surface ACPI-Compliant Control Method Battery** or **Surface Battery**) – and select **Uninstall device**, then **OK**. Leave **Microsoft AC Adapter** alone.
5. Select your computer’s name at the top of the list, then choose **Action › Scan for hardware changes**.
6. Restart the laptop.

> Microsoft warns not to use these driver steps on a **Surface Pro X**. If you own one, follow Microsoft’s Surface-specific guidance instead.

## Step 5: Install BIOS, driver and Windows updates

Laptop makers release firmware and driver updates that fix charging and power-management bugs. Check for updates in **Settings › Windows Update**, then use your manufacturer’s update app or support website (search for your exact model) for BIOS and chipset updates. Dell’s guidance lists an up-to-date BIOS and drivers among the first things to check, and on Dell laptops it also suggests updating the **Intel Management Engine Interface** driver.

> **Before a BIOS update:** keep the laptop plugged in, close your other apps and don’t switch off during the update. An interrupted firmware update can stop a laptop from starting.

## Step 6: Reset Windows power settings

If you have changed power plans or used tuning tools, restoring the defaults can help. Dell suggests the following in **Command Prompt** run as administrator (search for *cmd*, right-click it and choose **Run as administrator**):

```
powercfg -restoredefaultschemes
powercfg -h off
powercfg -h on
```

The first command resets all power plans to their defaults, so you will lose any custom plans you created. The other two turn hibernation off and back on. Restart afterwards.

## Step 7: Check battery health with a battery report

If the laptop charges but drains quickly, or never reaches a sensible percentage, the battery itself may be worn. Windows can produce a detailed report. Open Command Prompt as administrator and run:

```
powercfg /batteryreport
```

The command saves an HTML file and shows you where it is. Open it in your browser. Under **Installed batteries**, compare **Design Capacity** (what the battery held when new) with **Full Charge Capacity** (what it holds now). Dell suggests considering a replacement once capacity drops below about 50% of the original. The **Recent usage** section also shows when the laptop was on AC power or battery, which can confirm whether charging actually happened.

Microsoft advises against charging or using a laptop at high temperatures because heat wears lithium-ion batteries faster, so if the laptop runs hot, see our guide to [fixing an overheating laptop](/articles/laptop-overheating-fixes/).

## When to get it repaired

Contact the manufacturer or a reputable repair shop if:

- a different, compatible charger doesn’t help;
- Windows shows the battery as not detected (Surface uses a red X on the battery icon);
- the charging port is loose or the plug only works at a certain angle;
- the battery report shows heavily reduced capacity;
- you see any sign of swelling.

Check your warranty first – battery and charging faults are often covered.

## Conclusion

“Plugged in, not charging” is frequently a feature rather than a fault: a charge limit protecting the battery. If it isn’t, check the charger and socket, do a full shutdown, reinstall the battery driver and update your BIOS. A battery report then tells you whether the battery has simply reached the end of its life. With those checks done, you will know whether you need a new charger, a new battery or a professional repair.
