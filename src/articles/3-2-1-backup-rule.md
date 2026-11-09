---
title: "The 3-2-1 Backup Rule: A Simple Backup Plan for Home and Small Office"
description: "Protect your files from hardware failure, theft and ransomware with the 3-2-1 backup rule. Learn what to back up, how to use Windows tools, cloud storage and external drives, and how to test restores."
date: 2026-11-07
category: it-tutorials
videos: ["WwyhijjLvbs", "EfPcYDHEy1Y"]
keywords: [backup, 3-2-1 rule, ransomware, external drive, cloud backup, file history, onedrive]
relatedSlugs: [onedrive-not-syncing, upgrade-laptop-to-ssd, recognise-phishing-emails]
faq:
  - q: "Is cloud sync the same as a backup?"
    a: "Not exactly. Sync services mirror changes – including accidental deletions or ransomware encryption – across devices. Many offer version history and a recycle bin that can help, but a true backup keeps independent, point-in-time copies you can restore from."
  - q: "How often should I back up?"
    a: "Back up as often as you'd be upset to lose the work. For most people, continuous or daily automatic backups for documents and photos, plus a weekly or monthly offline copy, strike a good balance."
  - q: "How long do external hard drives last?"
    a: "There's no fixed lifespan – drives can fail at any time, and many last several years. That's why the 3-2-1 rule relies on multiple copies rather than trusting any single device. Replace drives that report errors or make unusual noises."
references:
  - title: "NCSC – Backing up your data"
    url: "https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/always-back-up-your-most-important-data"
  - title: "Microsoft Support – Back up and restore with Windows Backup"
    url: "https://support.microsoft.com/en-us/windows/back-up-your-windows-pc-87a81f8a-78fa-456e-b521-ac0560e32338"
---

Hard drives fail, laptops get stolen, phones get dropped in water and ransomware encrypts files. When that happens, the only thing that matters is whether you have a good backup. The **3-2-1 rule** is a simple, widely used way to make sure you do.

## What is the 3-2-1 rule?

Keep:

- **3 copies** of your important data – the original plus two backups;
- on **2 different types of storage** – for example your computer’s internal drive and an external drive, or an external drive and cloud storage;
- with **1 copy off-site** – somewhere physically separate, such as cloud storage or a drive kept at another location.

The idea is that no single event – a failed drive, a burglary, a fire or a ransomware attack – can destroy every copy at once.

Many professionals extend this to **3-2-1-1-0**: one copy kept **offline or immutable** (so ransomware can’t reach it) and **zero errors** after testing restores. For home users, the key addition is keeping one copy disconnected.

## Step 1: Decide what to back up

Focus on what you can’t replace:

- documents, spreadsheets and projects;
- photos and videos;
- email (if stored locally, such as POP accounts in Outlook);
- browser bookmarks and passwords (your password manager may already sync these);
- business records, invoices and accounts;
- licence keys and important settings.

Apps and Windows itself can be reinstalled, so they matter less – although a full system image can speed up recovery.

## Step 2: Copy one – cloud backup or sync

Cloud storage gives you the off-site copy automatically.

- **OneDrive** (included with Windows and Microsoft 365) can back up your Desktop, Documents and Pictures folders. In Windows 11, look for **Settings › Accounts › Windows backup**, or open OneDrive settings and choose **Sync and back up › Manage back up**.
- **Google Photos**, **iCloud** or your phone maker’s cloud can back up phone photos.
- Dedicated cloud backup services keep versioned backups of your whole computer.

Check that **version history** and the **recycle bin** are available – they let you recover files that were deleted or damaged. Remember that sync alone mirrors mistakes, so don’t rely on it as your only backup. See [OneDrive sync troubleshooting](/articles/onedrive-not-syncing/) if backups stop.

## Step 3: Copy two – external drive

An external drive gives you a fast, local copy that doesn’t depend on your internet connection.

**Using File History in Windows:**

1. Connect an external drive.
2. Open **Control Panel › System and Security › File History**.
3. Select the drive and click **Turn on**.

File History regularly saves copies of files in your libraries, Desktop and other folders, and keeps previous versions you can restore.

Some people prefer copying folders manually or using the drive manufacturer’s backup software. Whatever you use, make it **regular** and preferably **automatic**.

> **Disconnect the drive when it isn’t backing up.** Ransomware can encrypt any drive that is connected, including backup drives. Plugging it in weekly, letting the backup run, then unplugging it gives you an offline copy.

## Step 4: Protect the off-site copy

If your cloud provider is your off-site copy, protect the account with a strong unique password and [two-factor authentication](/articles/two-factor-authentication-guide/). If you use a second external drive instead, keep it somewhere else – at work, with a family member, or in a fire-resistant safe – and swap it periodically.

## Step 5: Test your backups

A backup you’ve never restored is a hope, not a plan. Every few months:

1. Pick a few files from each backup – a document, a photo, a spreadsheet.
2. Restore them to a different folder.
3. Open them to confirm they work.

Also check that backups are still running – look at the date of the latest backup in OneDrive, File History or your backup software.

## A simple plan for most people

| Copy | Where | How often |
|---|---|---|
| Original | Your PC or laptop | – |
| Backup 1 | OneDrive or another cloud service (off-site) | Continuous/automatic |
| Backup 2 | External drive with File History, disconnected afterwards | Weekly |
| Phone photos | Google Photos, iCloud or similar | Automatic |

## For small offices

The same principles apply, with a few extras:

- back up shared drives and business systems, not just individual PCs;
- choose services with version history and admin controls;
- keep at least one copy that can’t be altered or deleted from the office network;
- document how to restore, and make sure more than one person knows;
- check whether cloud services like Microsoft 365 need a separate backup for your retention needs.

## Conclusion

The 3-2-1 rule is simple: three copies, two types of storage, one off-site – ideally with one copy offline. Combine automatic cloud backup with a regularly connected external drive, protect your accounts, and test your restores. If a drive fails or ransomware strikes, you’ll lose an afternoon instead of years of files.
