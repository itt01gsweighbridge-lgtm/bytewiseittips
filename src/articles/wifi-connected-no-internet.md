---
title: "Wi-Fi Connected but No Internet? How to Find and Fix the Problem"
description: "Your device says it's connected to Wi-Fi but nothing loads. Learn how to work out whether the fault is your device, your router or your provider – and fix it step by step."
date: 2026-11-06
category: networking
videos: ["n8vj8AdTlJs"]
keywords: [wifi, no internet, router, dns, ipconfig, network reset, windows 11]
relatedSlugs: [network-troubleshooting-commands, improve-home-wifi-speed, find-ip-and-mac-address]
faq:
  - q: "Why does my phone have internet on Wi-Fi but my laptop doesn't?"
    a: "If another device works on the same Wi-Fi, the router and internet connection are fine and the problem is on the laptop. Start with forgetting and rejoining the network, then the IP release/renew and DNS flush commands, and finally a network reset."
  - q: "Is it safe to reset my router to factory settings?"
    a: "It is safe for the hardware, but it erases your Wi-Fi name, password and any custom settings, and some broadband connections need login details from your provider to reconnect. Restarting (power-cycling) the router is not the same thing and should always be tried first."
  - q: "What does 'No internet, secured' mean in Windows?"
    a: "It means Windows joined the Wi-Fi network successfully, but its connectivity test could not reach the internet. The link to the router works; the problem is further along – an IP address, DNS, the router's connection to your provider, or an outage."
references:
  - title: "Microsoft Support – Fix Wi-Fi connection issues in Windows"
    url: "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-in-windows-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c"
  - title: "Microsoft Learn – ipconfig command reference"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig"
  - title: "Microsoft Learn – ping command reference"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ping"
---

Few things are more frustrating than a Wi-Fi icon that looks perfectly healthy while every web page refuses to load. The good news is that “connected but no internet” almost always comes down to one of a handful of causes, and you can narrow it down in a few minutes with a logical approach.

The key idea is that your connection is a **chain**: your device talks to your router over Wi-Fi, the router talks to your internet service provider (ISP), and the ISP connects you to the wider internet. “Connected” only proves the first link works. Our job is to find which link further along is broken.

## Step 1: Check whether other devices are affected

Before changing any settings, pick up another device – a phone, tablet or second computer – and connect it to the **same Wi-Fi network**.

- **Nothing works on any device:** the problem is the router, the line or your provider. Skip to [Step 2](#step-2-restart-your-router-and-modem-properly).
- **Other devices work fine:** the problem is your device. Skip to [Step 4](#step-4-fix-the-problem-on-a-single-windows-pc).

This one test saves a lot of wasted effort, because it tells you which half of the chain to investigate.

## Step 2: Restart your router and modem properly

A restart clears temporary faults in the router’s memory and forces it to re-establish its connection with your ISP. Do it properly:

1. Switch off the router (and the separate modem or fibre box, if you have one) at the wall or unplug the power cable.
2. Wait **at least 30 seconds**.
3. Power on the modem/fibre box first, wait until its lights are stable, then power on the router.
4. Give everything two to three minutes to fully start before testing.

Look at the router’s status lights. Most routers have an “internet”, “broadband” or globe light; red, orange or flashing patterns usually mean the router cannot reach your provider. Check your router’s manual or the label on the device for what each light means.

> **Restart is not reset.** Many routers have a small recessed *reset* button. Pressing and holding it erases all settings and returns the router to factory defaults. Don’t use it unless you have your provider’s setup details to hand.

## Step 3: Rule out a provider outage

If the router’s internet light still shows a problem after a restart, the fault may not be in your home at all.

- Check your ISP’s service status page or app using mobile data.
- Look for messages from your provider by SMS or email about maintenance.
- Make sure all cables are firmly seated – especially the cable from the wall socket or fibre box to the router.

If there is an outage, there is nothing to fix on your side; wait for the provider to restore service. If there is no reported outage and the router still can’t connect, contact your provider’s support line – they can test your line remotely.

## Step 4: Fix the problem on a single Windows PC

When other devices work, focus on the affected computer. Work through these steps in order, testing after each one.

### Forget and rejoin the network

This clears a stored network profile that may have become corrupted.

1. Open **Settings › Network & internet › Wi-Fi**.
2. Select **Manage known networks**.
3. Choose your network and select **Forget**.
4. Reconnect from the Wi-Fi icon on the taskbar and re-enter the password.

### Check that you received a valid IP address

Open **Command Prompt** (search for “cmd” in the Start menu) and run:

```
ipconfig
```

Look at the section for your Wi-Fi adapter:

- An **IPv4 address** that starts with **169.254** means your computer did not get an address from the router (this is a self-assigned “APIPA” address). The router’s DHCP service didn’t respond or the connection is unstable.
- A normal-looking address, such as 192.168.x.x or 10.x.x.x, plus a **Default Gateway** entry, means the local connection is healthy and the problem is more likely DNS or something beyond the router.

### Renew your IP address and flush DNS

These commands ask the router for a fresh address and clear stored DNS lookups that may be stale:

```
ipconfig /release
ipconfig /renew
ipconfig /flushdns
```

You will briefly lose your connection when you release the address – that’s expected.

### Test where the connection stops

Use `ping` to test each link in the chain. First, ping your router (replace the address with the Default Gateway shown by `ipconfig`):

```
ping 192.168.1.1
```

Then ping a public IP address and then a website name:

```
ping 8.8.8.8
ping www.microsoft.com
```

Interpreting the results:

| Result | What it suggests |
|---|---|
| Router ping fails | Wi-Fi link or adapter problem on this PC |
| Router OK, public IP fails | Router or provider connection problem |
| Public IP OK, website name fails | **DNS problem** – names aren’t being translated into addresses |
| Everything succeeds but browser fails | Browser, proxy, VPN or security software problem |

Some networks block ping replies, so a failed ping is a clue rather than proof. For a deeper explanation, see our guide to [network troubleshooting commands](/articles/network-troubleshooting-commands/).

### Fix DNS problems

If pinging an IP address works but names don’t, try a different DNS server. In **Settings › Network & internet › Wi-Fi › Hardware properties** (or your network’s properties page), select **Edit** next to *DNS server assignment*, choose **Manual**, turn on **IPv4** and enter a public DNS service – for example Cloudflare (1.1.1.1) or Google Public DNS (8.8.8.8). If this fixes the issue, your provider’s DNS servers may be having trouble. You can switch back to **Automatic (DHCP)** later.

### Disable VPNs, proxies and check security software

A VPN that failed to connect, or a leftover proxy setting, can block all browsing. Disconnect any VPN, then check **Settings › Network & internet › Proxy** and make sure no manual proxy is set unless your organisation requires one. Temporarily disabling third-party firewall software can also confirm whether it is the cause – re-enable it straight afterwards.

### Update or reinstall the Wi-Fi driver

Open **Device Manager**, expand **Network adapters**, right-click your wireless adapter and choose **Update driver**. Your laptop manufacturer’s support website often has a newer driver than Windows Update. If updating doesn’t help, choose **Uninstall device**, then restart – Windows will reinstall the driver automatically.

### Use Network reset as a last resort

Windows includes a reset that removes and reinstalls all network adapters and returns networking components to their defaults:

1. Go to **Settings › Network & internet › Advanced network settings**.
2. Select **Network reset**, then **Reset now**.
3. The PC restarts automatically.

You will need to re-enter Wi-Fi passwords afterwards and reinstall or reconfigure VPN clients and virtual network adapters, so save this step until the simpler fixes have failed.

## Step 5: If only phones or tablets are affected

On Android or iPhone, the same logic applies. Turn Wi-Fi off and on, forget the network and rejoin it, and restart the device. Check that **Private DNS** (Android) or a configured VPN profile isn’t blocking traffic. If the device shows a sign-in page prompt, you may be on a network with a captive portal – such as hotel or café Wi-Fi – and need to accept its terms in the browser first.

## When to call your provider or a technician

Contact your ISP if the router’s internet light stays red after a restart, if every device fails, or if the problem keeps returning at certain times of day. Ask whether they can see line faults, and note any error messages from the router’s admin page. If only one computer fails even after a network reset and driver reinstall, the Wi-Fi adapter itself may be faulty – a USB Wi-Fi adapter is an inexpensive way to confirm this.

## Conclusion

“Connected but no internet” is a symptom, not a single fault. Test another device first to locate the problem, restart networking equipment properly, then use `ipconfig` and `ping` to see exactly where the connection stops. Most cases are solved by a router restart, an IP renew, or a DNS change – and when they aren’t, you’ll have the evidence your provider’s support team needs to help you quickly.
