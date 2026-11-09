---
title: "8 Network Troubleshooting Commands Every Windows User Should Know"
description: "Learn how to use ipconfig, ping, tracert, nslookup, pathping, netstat, getmac and netsh to diagnose Wi-Fi and internet problems in Windows, with examples of what the results mean."
date: 2026-11-07
category: networking
videos: ["n8vj8AdTlJs"]
keywords: [ipconfig, ping, tracert, nslookup, netsh, command prompt, network troubleshooting, dns]
relatedSlugs: [wifi-connected-no-internet, find-ip-and-mac-address, improve-home-wifi-speed]
faq:
  - q: "Do I need administrator rights to run these commands?"
    a: "Most diagnostic commands – ipconfig, ping, tracert, nslookup, pathping and getmac – work in a normal Command Prompt. Commands that change settings, such as netsh winsock reset, need an elevated (administrator) prompt."
  - q: "Why does ping say 'Request timed out' when websites still work?"
    a: "Many servers and firewalls are configured not to reply to ping requests for security reasons. A timeout only tells you that no reply arrived – not necessarily that the device is down. Compare results with other tests before drawing conclusions."
  - q: "Do these commands work on macOS or Linux?"
    a: "Similar tools exist with slightly different names: ifconfig or ip instead of ipconfig, traceroute instead of tracert, and ping and nslookup with mostly similar syntax."
references:
  - title: "Microsoft Learn – Windows commands reference"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands"
  - title: "Microsoft Learn – tracert"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert"
  - title: "Microsoft Learn – nslookup"
    url: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup"
---

Graphical settings tell you whether you’re connected; command-line tools tell you **where** a connection is failing. IT professionals reach for the same handful of commands every day, and they are all built into Windows. To open a prompt, press <kbd>Win</kbd>+<kbd>R</kbd>, type `cmd` and press <kbd>Enter</kbd>.

## 1. ipconfig – see your network configuration

```
ipconfig
ipconfig /all
```

`ipconfig` shows each network adapter’s IPv4 and IPv6 address, subnet mask and default gateway (your router). `ipconfig /all` adds the adapter’s physical (MAC) address, DHCP server, DNS servers and lease times.

What to look for:

- An address beginning **169.254.** means the PC didn’t receive an address from the router.
- No **Default Gateway** means the PC doesn’t know how to reach anything outside your local network.
- The **DNS Servers** line shows who is translating website names into addresses.

Useful variations:

```
ipconfig /release
ipconfig /renew
ipconfig /flushdns
```

These drop and request a new IP address, and clear the local DNS cache. They are standard first steps for [“connected but no internet” problems](/articles/wifi-connected-no-internet/).

## 2. ping – test whether a device responds

```
ping 192.168.1.1
ping 1.1.1.1
ping www.example.com
```

`ping` sends small test packets and reports whether replies come back and how long they take (in milliseconds). Testing in this order – router, public IP address, website name – shows which link fails. Add `-t` to ping continuously (stop with <kbd>Ctrl</kbd>+<kbd>C</kbd>), which is handy for spotting intermittent drop-outs on Wi-Fi.

High or wildly varying times to your *router* point to a weak or congested Wi-Fi signal; high times only to distant servers point further upstream.

## 3. tracert – trace the route to a destination

```
tracert www.example.com
```

`tracert` lists each router (“hop”) between you and the destination, with response times. If results stop at hop 1 or 2, the problem is local; if they stop much later, it’s with your provider or beyond. Rows of asterisks (`* * *`) in the middle of an otherwise successful trace are common – some routers simply don’t answer trace requests.

## 4. pathping – combine ping and tracert

```
pathping www.example.com
```

`pathping` traces the route and then spends a few minutes measuring packet loss at each hop. It’s slower but excellent for finding *where* packets are being dropped – useful evidence when you contact your internet provider.

## 5. nslookup – test DNS

```
nslookup www.example.com
nslookup www.example.com 1.1.1.1
```

`nslookup` asks a DNS server to translate a name into an IP address. The first command uses your default DNS server; the second asks a specific public server. If the second works but the first fails, your configured DNS server is the problem – switching DNS servers is likely to help.

## 6. netstat – see active connections

```
netstat -an
netstat -ano
```

`netstat` lists active network connections and listening ports. Adding `-o` shows the process ID (PID) responsible, which you can match against the **Details** tab in Task Manager. It’s mostly useful for advanced troubleshooting – for example, checking whether an app is actually listening on the port it should be.

## 7. getmac – find physical addresses

```
getmac /v
```

`getmac` lists the MAC address of each adapter with readable names. You may need it when setting up router access controls or DHCP reservations. Note that Windows can use *random hardware addresses* for Wi-Fi networks, so the address the router sees may differ from the adapter’s built-in one. More in our guide to [finding IP and MAC addresses](/articles/find-ip-and-mac-address/).

## 8. netsh – reset networking components

These commands repair damaged network settings. Run them in an **administrator** prompt, then restart:

```
netsh winsock reset
netsh int ip reset
```

`netsh winsock reset` restores the Winsock catalogue (which some VPN and security tools modify); `netsh int ip reset` resets TCP/IP settings. They overlap with the **Network reset** option in Settings and are best saved for after the simpler steps have failed. You may need to reconfigure VPN software afterwards.

`netsh` can also show stored Wi-Fi profiles:

```
netsh wlan show profiles
netsh wlan show interfaces
```

The second command shows the current signal strength, radio type (for example 802.11ax) and connection speed – a quick way to check Wi-Fi quality.

## A simple diagnostic sequence

When something isn’t working, run these in order and note where things first go wrong:

1. `ipconfig` – do I have a valid address and gateway?
2. `ping <gateway>` – can I reach my router?
3. `ping 1.1.1.1` – can I reach the internet by IP address?
4. `nslookup www.example.com` – is DNS working?
5. `tracert www.example.com` – where does the path stop?

## Conclusion

You don’t need to be a network engineer to use these tools. `ipconfig`, `ping` and `nslookup` alone will pinpoint most home and office connection problems, and `tracert` and `pathping` give your internet provider clear evidence when the fault is theirs.
