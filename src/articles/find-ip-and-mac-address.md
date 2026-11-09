---
title: "How to Find Your IP Address and MAC Address on Any Device"
description: "Find your private and public IP address and your device's MAC address on Windows, macOS, Android and iPhone, and understand the difference – including private (random) Wi-Fi addresses."
date: 2026-11-07
category: it-tutorials
keywords: [ip address, mac address, public ip, private ip, ipconfig, windows, android, iphone]
relatedSlugs: [network-troubleshooting-commands, wifi-connected-no-internet, improve-home-wifi-speed]
faq:
  - q: "Is it dangerous to share my IP address?"
    a: "Your public IP address is visible to every website you visit, so it isn't secret. It can reveal your approximate location (often just the city or region) and your internet provider. Avoid posting it publicly, but you don't need to panic if someone sees it."
  - q: "Why does my IP address keep changing?"
    a: "Home routers usually give devices addresses automatically (DHCP), which can change when a lease expires or the device reconnects. Many internet providers also change your public IP address periodically. Router settings can give a device a fixed (reserved) address if needed."
  - q: "Why is my phone's MAC address different on each Wi-Fi network?"
    a: "Modern Android, iOS and Windows devices use a private or randomised MAC address per network to make it harder to track you across Wi-Fi networks. You can turn this off for a specific network if, for example, your router filters devices by MAC address."
references:
  - title: "Microsoft Support – Essential network settings and tasks in Windows"
    url: "https://support.microsoft.com/en-us/windows/find-your-ip-address-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9"
  - title: "Apple Support – Use private Wi-Fi addresses on Apple devices"
    url: "https://support.apple.com/en-us/102509"
  - title: "Microsoft Learn – ipconfig"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig"
---

Whether you’re setting up a printer, configuring your router, or giving information to an IT support team, sooner or later you’ll need your **IP address** or **MAC address**. Here’s what they are and how to find them on every common device.

## IP address vs MAC address

- An **IP address** is a network address used to route traffic, a bit like a postal address. It can change depending on which network you join.
- A **MAC address** (media access control address) is a hardware identifier for a network adapter, written as six pairs of characters such as `3C-52-82-1A-7F-09`. It’s used on your local network only.

There are also two kinds of IP address:

| Type | Example | Who sees it |
|---|---|---|
| **Private (local) IP** | 192.168.1.23, 10.0.0.5, 172.16.0.8 | Only devices on your home or office network |
| **Public IP** | Assigned by your internet provider | Websites and services on the internet |

Your router has a public IP address on the internet and shares it among all the devices in your home, each of which has its own private IP.

## Find your public IP address

The simplest way is to search for **“what is my IP”** in a search engine, or visit a reputable IP lookup site. Your router’s admin page or app usually shows it too (often labelled *WAN IP* or *Internet IP*).

If you’re using a VPN, you’ll see the VPN server’s address rather than your own.

## Windows 11

**Using Settings:**

1. Open **Settings › Network & internet**.
2. Select **Wi-Fi** (or **Ethernet**), then your connected network’s properties (or **Hardware properties**).
3. Scroll down to see **IPv4 address** and **Physical address (MAC)**.

**Using Command Prompt:**

```
ipconfig /all
```

Look under your active adapter for **IPv4 Address** and **Physical Address**. Our guide to [network troubleshooting commands](/articles/network-troubleshooting-commands/) explains the other fields. `getmac /v` lists MAC addresses for all adapters.

## macOS

1. Open **System Settings › Network**.
2. Select **Wi-Fi** or **Ethernet**, then click **Details** next to the connected network.
3. The **TCP/IP** tab shows the IP address; the **Hardware** tab shows the MAC address.

## Android

Menu names vary by manufacturer:

1. Open **Settings › Network & internet › Internet** (or **Connections › Wi-Fi** on Samsung).
2. Tap the gear icon next to the connected network.
3. Look for **IP address** (you may need to expand *Advanced* or *View more*).
4. The MAC address used for that network is shown on the same screen. The device’s hardware MAC address is under **Settings › About phone** (sometimes in *Status* or *Status information*).

## iPhone and iPad

1. Open **Settings › Wi-Fi**.
2. Tap the **ⓘ** next to the connected network.
3. You’ll see the **IP Address** and the **Wi-Fi Address** (the MAC address used on that network).

## Private, random MAC addresses

To protect your privacy, modern devices often use a different, randomly generated MAC address for each Wi-Fi network:

- **iPhone and iPad:** *Private Wi-Fi Address* in each network’s settings.
- **Android:** *Privacy › Use randomised MAC* (wording varies) in each network’s settings.
- **Windows 11:** *Random hardware addresses* in **Settings › Network & internet › Wi-Fi**.

This is good for privacy, but it can confuse routers that use MAC filtering or parental controls tied to devices. If needed, turn off the private address **for your own home network only**.

## What about IPv6 addresses?

Alongside the familiar IPv4 addresses (four numbers separated by dots), most networks now also use **IPv6**, which looks like `2a00:23c5:1234:5600::1a2b` – longer groups of hexadecimal characters separated by colons. Windows shows these in `ipconfig` as *IPv6 Address*, *Temporary IPv6 Address* and *Link-local IPv6 Address*.

- **Temporary IPv6 addresses** change regularly for privacy, so don’t use them in configuration.
- **Link-local addresses** begin with `fe80::` and only work on the local network segment.
- If you’re asked for “your IP address” for something like printer or router setup, the **IPv4 address** is almost always what’s needed.

## Give a device a fixed IP address (DHCP reservation)

Printers, network storage and home servers are easier to manage when their IP address never changes. The cleanest way to do this is a **DHCP reservation** on your router, rather than typing a static address into the device itself:

1. Find the device’s **MAC address** using the steps above. For phones and laptops, make sure you use the address shown for *your* Wi-Fi network if private addresses are turned on.
2. Sign in to your router’s app or admin page (the address is often printed on a label on the router).
3. Look for a section called **DHCP**, **LAN**, **Address reservation** or **Static leases**.
4. Add a reservation linking the MAC address to the IP address you want – usually something within your router’s address range, such as 192.168.1.50.
5. Restart the device or reconnect it so it picks up the reserved address.

Reservations keep all address management in one place and avoid conflicts where two devices end up with the same address – a common cause of intermittent connection problems.

## IP address conflicts

If Windows warns that *another device on the network is using your PC’s IP address*, two devices have the same address – usually because one was given a static address inside the router’s automatic range. Set the device back to obtain an address automatically, or use a reservation as described above, then run `ipconfig /release` and `ipconfig /renew`.

## Find devices on your network

Your router’s admin page or app usually lists all connected devices with their names, IP addresses and MAC addresses. This is helpful for spotting unknown devices – if you find one you don’t recognise, change your Wi-Fi password.

## Conclusion

Your private IP address and MAC address are in your device’s network settings, and `ipconfig /all` shows both on Windows. Your public IP is shown by your router or a quick “what is my IP” search. Remember that phones and computers may use private, random MAC addresses on each Wi-Fi network – that’s a privacy feature, not a fault.
