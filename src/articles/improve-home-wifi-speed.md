---
title: "Slow Home Wi-Fi? 10 Practical Ways to Improve Speed and Coverage"
description: "Improve slow or patchy home Wi-Fi with practical fixes: router placement, choosing the right band and channel, firmware updates, mesh systems and when to use Ethernet."
date: 2026-11-07
category: networking
videos: ["T7zEcPgP944"]
keywords: [wifi, slow internet, router, mesh, 5 GHz, channel, speed test, coverage]
relatedSlugs: [choose-wifi-router, wifi-connected-no-internet, network-troubleshooting-commands]
faq:
  - q: "Is 2.4 GHz or 5 GHz better?"
    a: "5 GHz is usually faster and less congested, but its signal doesn't travel as far or pass through walls as well. 2.4 GHz reaches further but is slower and more crowded. Most modern routers broadcast both and steer devices automatically."
  - q: "Do Wi-Fi extenders work?"
    a: "Basic repeaters can extend coverage, but because they relay over the same wireless link they often reduce speed. Mesh systems or access points connected back to the router by cable usually perform much better."
  - q: "How do I know if the problem is Wi-Fi or my broadband?"
    a: "Run a speed test on a computer connected to the router with an Ethernet cable. If that is also slow, the issue is your broadband line or plan. If the wired result is fast but Wi-Fi is slow, the problem is wireless."
references:
  - title: "Microsoft Support – Fix Wi-Fi connection issues in Windows"
    url: "https://support.microsoft.com/en-us/windows/fix-wi-fi-connection-issues-in-windows-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c"
  - title: "Wi-Fi Alliance – Discover Wi-Fi"
    url: "https://www.wi-fi.org/discover-wi-fi"
---

Slow Wi-Fi is often blamed on the internet provider, but the real bottleneck is frequently inside the home: a router hidden in a cupboard, crowded radio channels or old devices. These ten steps start with free fixes and finish with upgrades worth considering.

## 1. Find out where the slowness is

Before changing anything, measure. Run a speed test (your provider may offer one, or use any reputable speed test site) in three places:

1. On a computer **connected by Ethernet** to the router.
2. On Wi-Fi **next to the router**.
3. On Wi-Fi **where it’s slow**.

If the wired result is slow, your broadband line or plan is the limit – contact your provider. If wired is fast but Wi-Fi near the router is slow, look at the router and devices. If Wi-Fi is only slow far away, it’s a coverage problem.

## 2. Move the router

Wi-Fi signals weaken with distance and with every wall, floor, mirror and appliance in the way. For the best coverage:

- place the router **centrally**, rather than at one end of the home;
- keep it **raised** – on a shelf, not the floor;
- keep it **in the open**, not inside a cabinet or behind a TV;
- keep it away from **metal objects, fish tanks, microwave ovens and cordless phone bases**.

Even a move of a couple of metres can make a noticeable difference.

## 3. Restart the router

Routers are small computers and benefit from an occasional restart. Power it off for 30 seconds and back on. If you need to do this often, check for a firmware update (step 4) – frequent restarts are a sign of a software problem or failing hardware.

## 4. Update the router’s firmware

Firmware updates fix bugs, improve performance and close security holes. Most modern routers update automatically or through a mobile app; older ones have an update option in the web admin page (often reached at an address such as 192.168.1.1 – check the label on the router). If your router no longer receives updates at all, it’s time to consider replacing it for security reasons.

## 5. Use the right frequency band

Most routers broadcast on **2.4 GHz** and **5 GHz**, and newer Wi-Fi 6E and Wi-Fi 7 models add **6 GHz**:

| Band | Range | Speed | Congestion |
|---|---|---|---|
| 2.4 GHz | Longest | Lowest | Often crowded |
| 5 GHz | Medium | High | Moderate |
| 6 GHz | Shortest | Highest | Low (newer devices only) |

Use the faster bands for devices close to the router, such as laptops and TVs, and leave 2.4 GHz for distant or low-bandwidth devices like smart plugs. If your router combines bands under one network name (“band steering”), it chooses for you; if a device keeps clinging to 2.4 GHz, some routers let you create a separate 5 GHz network name.

## 6. Reduce channel interference

In apartments and terraced houses, dozens of neighbouring networks may share the same channels. Many routers choose channels automatically; if yours lets you, try setting **2.4 GHz to channel 1, 6 or 11** (the three that don’t overlap) and let 5 GHz pick automatically. A Wi-Fi analyser app on a laptop or Android phone can show which channels are busiest.

## 7. Check what’s using your bandwidth

Large downloads, cloud backups, game updates and 4K streaming on one device slow everything else. Your router’s app or admin page usually lists connected devices and sometimes how much data each is using. Schedule big backups or updates for overnight, and remove devices you don’t recognise – then change your Wi-Fi password.

## 8. Secure your network

Use **WPA3** (or **WPA2-AES** if older devices need it) with a strong password. An open or weakly protected network can be used by neighbours, slowing your connection and creating security risks. Also change the router’s *admin* password from the default.

## 9. Use Ethernet where it matters

Wired connections are faster, more stable and don’t compete for airtime. Desktop PCs, games consoles, smart TVs and home office setups near the router benefit most. Where running cables is impractical, **powerline adapters** (which carry network signals over electrical wiring) are an option, although their performance depends heavily on your wiring.

## 10. Upgrade: mesh Wi-Fi or a newer router

If coverage is the problem in a larger or multi-storey home, a **mesh system** – several units working together as one network – is usually the best solution. Mesh units connected to each other by Ethernet (“wired backhaul”) perform best of all.

If your router is several years old, a newer model supporting **Wi-Fi 6** or later improves performance with many connected devices, provided your devices support it too. Our guide to [choosing a Wi-Fi router](/articles/choose-wifi-router/) explains the standards.

## Check your devices too

An old laptop with a Wi-Fi 4 (802.11n) adapter won’t get modern speeds from any router. On Windows, `netsh wlan show interfaces` in Command Prompt shows the radio type and connection speed – see our [network commands guide](/articles/network-troubleshooting-commands/). Keep Wi-Fi drivers updated, and consider an inexpensive USB Wi-Fi adapter for older PCs.

## Conclusion

Start by measuring so you know whether the problem is the line, the router or coverage. Router placement, firmware updates and using the right band fix many problems for free. For large homes, mesh Wi-Fi or a wired connection is the reliable long-term answer.
