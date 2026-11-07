---
title: "Outlook Not Receiving or Syncing Email? Fixes for Windows"
description: "Troubleshoot Outlook when new emails stop arriving or folders won't sync: check connection status, offline mode, mailbox storage, rules, junk filters and cached mode in classic and new Outlook."
date: 2026-10-24
category: microsoft-365
videos: ["2v4z4Ia-QZs"]
keywords: [outlook, not receiving email, sync, microsoft 365, offline, mailbox full, new outlook]
relatedSlugs: [outlook-safe-mode-new-profile, onedrive-not-syncing, recognise-phishing-emails]
faq:
  - q: "Why do emails appear on my phone but not in Outlook on my PC?"
    a: "That means the emails are reaching your mailbox and the problem is with Outlook on the PC – usually offline mode, a sync problem, an add-in or a corrupted profile or cache. Work through the steps in this guide starting with connection status."
  - q: "What's the difference between classic Outlook and new Outlook?"
    a: "Classic Outlook is the traditional desktop app included with Microsoft 365 and Office. New Outlook for Windows is a newer app built on the same technology as Outlook on the web. Some settings, such as profiles and Work Offline, exist only in classic Outlook."
  - q: "How do I check if Microsoft 365 is having an outage?"
    a: "Personal account users can check Microsoft's service status page. In organisations, Microsoft 365 administrators can view the Service health page in the admin centre, and your IT team may post updates."
references:
  - title: "Microsoft Support – Can't send or receive email in Outlook.com"
    url: "https://support.microsoft.com/en-us/office/fix-outlook-com-email-sync-issues-d39e3341-8d79-4bf1-b3c7-ded602233642"
  - title: "Microsoft Support – Getting started with the new Outlook for Windows"
    url: "https://support.microsoft.com/en-us/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627"
---

When Outlook stops showing new emails, the first question is whether the messages are reaching your mailbox at all. Open **Outlook on the web** (outlook.office.com for work accounts or outlook.live.com for personal accounts) or the Outlook app on your phone.

- **Emails are there online:** the mailbox is fine; the problem is Outlook on your PC. Start at Step 1.
- **Emails are missing online too:** the problem is with the mailbox or the sender. Start at Step 6.

## Step 1: Check connection status and Work Offline (classic Outlook)

Look at the **status bar** at the bottom of the Outlook window. Messages such as *Working Offline*, *Disconnected* or *Trying to connect* explain everything.

- On the **Send / Receive** tab, check whether **Work Offline** is highlighted. If it is, click it to go back online.
- Click **Send/Receive All Folders** (or press <kbd>F9</kbd>) to force a sync.

New Outlook doesn’t have a Work Offline button – if it can’t connect, check your internet connection and try signing out and back in from **Settings › Accounts**.

## Step 2: Restart Outlook and your PC

Fully close Outlook – check the system tray and Task Manager for a lingering *OUTLOOK.EXE* process – then open it again. If that doesn’t work, restart the PC. It sounds simple, but it resolves many temporary sync and authentication glitches.

## Step 3: Update Office

In classic Outlook, go to **File › Office Account › Update Options › Update Now**. New Outlook updates automatically through the Microsoft Store and Windows. Many sync bugs are fixed by updates.

## Step 4: Check for sign-in prompts

If your password changed or your organisation requires you to sign in again, Outlook may be waiting quietly for credentials. Look for a sign-in window hidden behind other windows, or a yellow *Need password* message in the status bar. Sign in and allow Outlook a few minutes to catch up.

## Step 5: Rule out add-ins and the profile

Faulty add-ins and corrupted profiles cause many classic-Outlook sync problems. Start Outlook in **Safe Mode**, which disables add-ins, by following our guide to [Outlook Safe Mode and creating a new profile](/articles/outlook-safe-mode-new-profile/). If email syncs correctly in Safe Mode, an add-in is responsible. If not, creating a new profile often fixes it.

## Step 6: Check whether your mailbox is full

A full mailbox can stop new messages arriving, and senders may receive a bounce message.

- **Outlook on the web:** open **Settings** and look for the storage section to see how much space is used.
- **Classic Outlook:** **File › Info › Mailbox Settings** shows mailbox size and options to clean up.

Empty **Deleted Items** and **Junk Email**, and delete or archive large messages. Sorting by size helps find the biggest culprits.

## Step 7: Check Junk, Focused Inbox and rules

Messages may be arriving and simply being filed somewhere unexpected.

- Look in **Junk Email** and, if Focused Inbox is on, the **Other** tab.
- Use search for the sender’s address across **All folders**.
- Review **rules** (classic Outlook: **File › Manage Rules & Alerts**; Outlook on the web and new Outlook: **Settings › Mail › Rules**). A rule moving or deleting messages is a common cause after reorganising folders.
- Check **blocked senders** in your junk email settings.

> Unexpected rules that forward or delete mail can be a sign that someone else has accessed your account. If you find a rule you didn’t create, change your password, turn on [two-factor authentication](/articles/two-factor-authentication-guide/) and, for work accounts, tell your IT team.

## Step 8: Shared mailboxes and large folders (classic Outlook)

In **Cached Exchange Mode**, classic Outlook keeps a local copy of your mailbox. If one folder won’t update, right-click it, choose **Properties › Clear Offline Items**, then click **Send/Receive** to download it again. This only clears the local copy, not messages on the server.

You can also check **File › Account Settings › Account Settings**, double-click your account and review the *Download email for the past* slider – older messages beyond that period are only available online.

## Step 9: Check for a service outage

If nothing works and colleagues have the same problem, the issue may be on Microsoft’s side. Personal users can check Microsoft’s service status page; business users should contact their IT team or Microsoft 365 administrator, who can check **Service health** in the admin centre.

## Step 10: Repair Office

Classic Outlook can be repaired from **Settings › Apps › Installed apps**: find your Microsoft 365 or Office entry, choose **Modify**, and select **Quick Repair**. If that doesn’t help, try **Online Repair**, which reinstalls Office and takes longer.

## Conclusion

Start by checking Outlook on the web: if email is arriving there, the problem is local and is usually fixed by going back online, restarting, updating, or a new profile. If it isn’t arriving, look at mailbox storage, rules, junk filters and service status. Working in this order gets most people back to a working inbox quickly.
