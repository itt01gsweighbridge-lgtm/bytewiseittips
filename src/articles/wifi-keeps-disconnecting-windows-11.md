---
title: "Wi-Fi Keeps Disconnecting in Windows 11? How to Stop Drop-Outs"
description: "Windows 11 Wi-Fi dropping every few minutes? Find the cause with the built-in wireless report, then fix power settings, drivers and router issues step by step."
date: 2026-11-25
category: networking
keywords: [wifi keeps disconnecting, windows 11, wifi dropping, wireless network report, wifi adapter power management, netsh wlan, wifi driver]
relatedSlugs: [wifi-connected-no-internet, improve-home-wifi-speed, network-troubleshooting-commands]
faq:
  - q: "Why does my laptop's Wi-Fi drop but my phone stays connected?"
    a: "If other devices on the same network stay connected, the router is probably fine and the cause is on the laptop – most often the Wi-Fi adapter's power-saving settings, an outdated or faulty driver, or a weak signal at the laptop's location. Work through the power management and driver steps in this guide."
  - q: "Does Wi-Fi disconnect when my laptop goes to sleep?"
    a: "Yes, that is normal. When the PC sleeps the Wi-Fi adapter is powered down and reconnects when you wake it. The problem this guide covers is a connection that drops while you are actively using the computer."
  - q: "Will a network reset delete my files?"
    a: "No. A network reset removes and reinstalls network adapters and returns networking settings to their defaults. Your files are not affected, but you will need to re-enter Wi-Fi passwords and may need to reinstall VPN software."
references:
  - title: "Microsoft Support – Fix Wi-Fi connection issues in Windows"
    url: "https://support.microsoft.com/en-us/help/10741"
  - title: "Microsoft Support – Analyze the wireless network report"
    url: "https://support.microsoft.com/windows/analyzing-the-wireless-network-report-76da0daa-1db2-6049-d154-7bb679eb03ed"
  - title: "Microsoft Learn – netsh wlan command reference"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netsh-wlan"
  - title: "Microsoft Support – Connect to a Wi-Fi network in Windows"
    url: "https://support.microsoft.com/windows/060ad2e9-526e-4f1c-9f3d-fe6a842640ed"
---

A Wi-Fi connection that keeps dropping is in some ways worse than one that doesn't work at all. Video calls freeze, downloads fail halfway through and web pages stall – then everything comes back a minute later as if nothing happened. Because the fault comes and goes, it can be hard to pin down.

This guide works through the problem in a logical order, starting with checks that change nothing and finishing with the more disruptive fixes. If your PC connects to Wi-Fi but never gets internet access, see our separate guide on [Wi-Fi connected but no internet](/articles/wifi-connected-no-internet/) instead.

## Step 1: Work out whether it's the PC or the network

Start by noticing *what* drops. When the connection fails, check another device on the same Wi-Fi – a phone or tablet is fine.

- **Every device loses connection at the same time:** the router, broadband line or provider is the likely cause. Restart the router (Step 2) and, if drops continue, contact your provider.
- **Only this PC drops:** the problem is almost certainly on the computer – power settings, drivers or signal at that spot. Continue through the steps below.

Also note whether the drops happen in a particular room or at a particular time. A connection that only fails at the far end of the house points to weak signal rather than a Windows fault – our guide to [improving home Wi-Fi speed and coverage](/articles/improve-home-wifi-speed/) covers router placement, mesh systems and extenders.

## Step 2: Restart the router and the PC properly

It sounds obvious, but a proper restart clears many intermittent faults. Microsoft recommends unplugging both the modem and the router, waiting **at least 30 seconds**, then plugging the modem back in first and the router after it. Give everything a couple of minutes to start, then restart the PC too.

> **Restart, don't reset.** The small recessed reset button on most routers erases all settings, including your Wi-Fi name and password. Only a power cycle is needed here.

## Step 3: Generate the wireless network report

Windows can produce a detailed report of recent Wi-Fi activity that shows exactly when and why your connection dropped. It doesn't change any settings, so it's a safe and useful step before you start fixing things.

1. Search for **cmd** in the Start menu, right-click **Command Prompt** and choose **Run as administrator**, then select **Yes**.
2. Run this command:

```
netsh wlan show wlanreport
```

The command creates an HTML report and shows where it saved the file; open that file in your web browser. According to Microsoft, the report covers **the last three days** of Wi-Fi events, grouped into connection sessions.

What to look for:

- **The summary chart at the top.** Red circles mark errors, so a cluster of them at certain times confirms the pattern of drops.
- **Disconnect Reasons and Session Durations.** These show how long each connection lasted and why it ended – for example, whether the disconnection was triggered by the user, by the network or by the driver.
- **Network adapters.** This section lists your Wi-Fi adapter with its **driver version and driver date**. A driver that is several years old is a strong candidate for an update.

You can also check your current signal and connection details at any time with:

```
netsh wlan show interfaces
```

Run it a few times as you move around; the signal percentage helps you tell whether drops coincide with weak reception.

## Step 4: Forget the network and reconnect

A corrupted saved network profile can cause repeated drops. Removing it and connecting again is quick and safe – just make sure you know the Wi-Fi password first.

1. Open **Settings › Network & internet › Wi-Fi**.
2. Select **Manage known networks**.
3. Choose your network and select **Forget**.
4. Reconnect from the network icon on the taskbar and enter the password.

If your router broadcasts both a **2.4 GHz** and a **5 GHz** network with different names, Microsoft suggests trying the other band. 5 GHz is usually faster but has a shorter range, so a laptop at the edge of coverage may hold a 2.4 GHz connection more reliably.

## Step 5: Stop Windows turning off the Wi-Fi adapter to save power

Power saving is one of the most common reasons a laptop drops its Wi-Fi connection while the router is fine. Windows can switch the adapter off to save battery and doesn't always bring it back cleanly.

1. Right-click the **Start** button and choose **Device Manager**.
2. Expand **Network adapters**.
3. Right-click your Wi-Fi adapter (its name usually contains “Wireless”, “Wi-Fi” or “802.11”) and choose **Properties**.
4. Open the **Power Management** tab and **clear** the box **Allow the computer to turn off this device to save power**.
5. Select **OK**.

Microsoft's guidance also suggests checking the adapter's power plan setting: open **Control Panel › Hardware and Sound › Power Options**, select **Change plan settings** next to your active plan, then **Change advanced power settings**. Expand **Wireless Adapter Settings › Power Saving Mode** and set it to **Maximum Performance**. On some newer PCs this option isn't shown; if so, skip it.

These changes may slightly reduce battery life on a laptop, which is usually a worthwhile trade for a stable connection.

## Step 6: Update Windows and the Wi-Fi driver

Driver bugs are a frequent cause of drops, especially after a major Windows update.

1. Go to **Settings › Windows Update** and select **Check for updates**. Install everything offered, including any optional driver updates, then restart.
2. Visit your laptop or motherboard manufacturer's support website, enter your model, and download the latest wireless (WLAN) driver. Manufacturer drivers are often newer than those offered through Windows Update.

If the drops started straight after a driver update, the new driver may be at fault. In Device Manager, open the adapter's **Properties**, go to the **Driver** tab and use **Roll Back Driver** if the option is available.

## Step 7: Reinstall the Wi-Fi adapter

If updating doesn't help, a clean reinstall of the driver can clear a corrupted installation.

> **Before you start:** download the correct driver from your manufacturer's website first and save it to the PC or a USB stick, so you can install it even if Windows doesn't reconnect automatically.

1. In **Device Manager**, expand **Network adapters**, right-click your Wi-Fi adapter and choose **Uninstall device**.
2. Tick **Attempt to remove the driver for this device**, then select **Uninstall**.
3. Restart the PC. Windows will normally detect the adapter and reinstall a driver automatically; if not, install the one you downloaded.

## Step 8: Reset the network stack

These commands reset Windows networking components and request a fresh IP address. Open **Command Prompt as administrator** and run them one at a time:

```
netsh winsock reset
netsh int ip reset
ipconfig /release
ipconfig /renew
ipconfig /flushdns
```

Restart the PC afterwards. You'll lose the connection briefly during `ipconfig /release` – that's expected. Our guide to [network troubleshooting commands](/articles/network-troubleshooting-commands/) explains what each of these does.

## Step 9: Use Network reset as a last resort

Windows 11's built-in reset removes and reinstalls all network adapters and returns networking settings to their defaults.

> **Warning:** you'll need to re-enter every saved Wi-Fi password. Microsoft notes that you may also need to reinstall or reconfigure other networking software, such as VPN clients or Hyper-V virtual switches, and that known networks may be set to the public network profile.

1. Go to **Settings › Network & internet › Advanced network settings**.
2. Select **Network reset**, then **Reset now**, and confirm with **Yes**.
3. The PC restarts automatically.

## When to suspect hardware

If drops continue after all of the above, and other devices on the same network are stable, the Wi-Fi adapter or its internal antenna connections may be faulty. A low-cost USB Wi-Fi adapter is an easy way to test this: if the drops stop when you use it, the internal adapter is the problem. On a work computer, contact your IT department before changing drivers or settings, as they may manage these centrally.

## Conclusion

Intermittent Wi-Fi drops feel random, but they usually have a clear cause. Check whether other devices are affected, run the wireless network report to see when and why the connection fails, then work through power management, drivers and the network stack in that order. Most PCs are fixed by turning off adapter power saving or installing a current driver – and if not, the report gives you useful evidence for your provider or a repair technician.
