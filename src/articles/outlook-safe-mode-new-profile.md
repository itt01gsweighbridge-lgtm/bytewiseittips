---
title: "How to Start Outlook in Safe Mode and Create a New Profile"
description: "Fix crashing, freezing or syncing problems in classic Outlook for Windows by starting it in Safe Mode, disabling faulty add-ins and creating a fresh Outlook profile."
date: 2026-11-07
category: microsoft-365
videos: ["2v4z4Ia-QZs"]
keywords: [outlook, safe mode, add-ins, profile, crashing, classic outlook, microsoft 365]
relatedSlugs: [outlook-not-receiving-emails, onedrive-not-syncing]
faq:
  - q: "Will creating a new Outlook profile delete my emails?"
    a: "For Microsoft 365, Exchange and Outlook.com accounts, no – your email is stored on the server and downloads again into the new profile. For POP accounts, messages are stored in a local .pst file, so make sure you know where that file is and reconnect it to the new profile."
  - q: "Does new Outlook for Windows have Safe Mode?"
    a: "No. Safe Mode and Outlook profiles are features of classic Outlook. New Outlook is closer to Outlook on the web; if it misbehaves, try signing out and back in, resetting the app from Windows Settings, or using Outlook on the web."
  - q: "How do I know which Outlook I have?"
    a: "Classic Outlook has a File menu at the top left that opens a 'backstage' view. New Outlook has a toggle labelled 'New Outlook' at the top of the window and settings in a gear icon, similar to Outlook on the web."
references:
  - title: "Microsoft Support – Open Outlook in safe mode"
    url: "https://support.microsoft.com/en-us/office/open-outlook-in-safe-mode-f394c2ee-b2af-e97a-64ee-35cd24414811"
  - title: "Microsoft Support – Create a profile in classic Outlook for Windows"
    url: "https://support.microsoft.com/en-us/office/create-an-outlook-profile-f544c1ba-3352-4b3b-be0b-8d42a540459d"
---

If classic Outlook crashes when it opens, freezes, runs very slowly or refuses to sync, two tools solve a large share of problems: **Safe Mode**, which starts Outlook without add-ins, and a **new profile**, which rebuilds Outlook’s account configuration from scratch. This guide applies to classic Outlook for Windows (included with Microsoft 365 and Office).

If your main symptom is that new email simply isn't arriving, start with our broader guide to [Outlook not receiving or syncing email](/articles/outlook-not-receiving-emails/) – Safe Mode and a new profile are two of the steps in that process.

## Part 1: Start Outlook in Safe Mode

Safe Mode starts Outlook with all add-ins disabled and without some customisations. If Outlook works normally in Safe Mode, you know an add-in is the cause.

### Method 1: Hold Ctrl

1. Close Outlook completely.
2. Hold down <kbd>Ctrl</kbd> and click the Outlook icon.
3. When asked *“Do you want to start Outlook in safe mode?”*, select **Yes**.

### Method 2: Use the Run box

1. Press <kbd>Win</kbd>+<kbd>R</kbd>.
2. Type the following and press <kbd>Enter</kbd>:

```
outlook.exe /safe
```

3. If asked to choose a profile, select your usual profile and click **OK**.

The title bar shows *(Safe Mode)* while it’s active.

## Part 2: Find and disable the faulty add-in

If Outlook behaves normally in Safe Mode:

1. Close Outlook and open it normally (if it crashes immediately, stay in Safe Mode for this step).
2. Go to **File › Options › Add-ins**.
3. At the bottom, next to *Manage*, choose **COM Add-ins** and click **Go**.
4. Untick **all** add-ins, click **OK** and restart Outlook normally.
5. If Outlook now works, re-enable add-ins **one at a time**, restarting Outlook each time, until the problem returns. The last add-in you enabled is the culprit.

Then update, reconfigure or remove the problem add-in. Common culprits include old PDF tools, CRM connectors and meeting plug-ins. In organisations, some add-ins are deployed centrally – speak to IT before removing them.

## Part 3: Create a new Outlook profile

If Safe Mode doesn’t help, the Outlook profile may be damaged. A profile stores your account settings and links to local data files. Creating a new one is safe and often fixes sync failures, repeated password prompts and startup errors.

> **POP accounts:** if your email uses POP rather than Microsoft 365, Exchange, Outlook.com or IMAP, your messages may only exist in a local `.pst` file. Find its location first (in classic Outlook: **File › Account Settings › Account Settings › Data Files**) and keep a copy.

### Step 1: Open Mail settings

1. Close Outlook.
2. Open **Control Panel** (search for it in the Start menu).
3. Set *View by* to **Large icons** and select **Mail (Microsoft Outlook)**. (On some systems it’s labelled *Mail (Microsoft Outlook 2016)* or similar.)
4. Click **Show Profiles**.

You can also open Outlook, go to **File › Account Settings › Manage Profiles**.

### Step 2: Add a new profile

1. Click **Add**, enter a name such as *Outlook-New*, and click **OK**.
2. Enter your email address. For Microsoft 365 and Outlook.com accounts, Outlook usually configures everything automatically after you sign in.
3. Complete the setup and click **Finish**.

### Step 3: Make it the default and test

1. Back in the Mail window, select **Always use this profile** and choose the new profile from the list.
2. Click **OK** and open Outlook.

Outlook will download your mailbox, which can take a while for large mailboxes – leave it open and connected. If everything works, you can return to **Show Profiles** later and remove the old profile.

If you rely on any custom items stored only on the old profile, such as a POP `.pst` file or archive files, reconnect them via **File › Open & Export › Open Outlook Data File**.

## What about new Outlook?

New Outlook for Windows doesn’t use COM add-ins or profiles in the same way. If it misbehaves:

- sign out of the account in **Settings › Accounts** and sign back in;
- go to **Windows Settings › Apps › Installed apps**, find Outlook (new), select **Advanced options** if available, and choose **Repair** or **Reset**;
- check whether the problem also happens in Outlook on the web – if it does, the issue is with the account or service, not the app.

## Conclusion

Safe Mode tells you quickly whether an add-in is breaking Outlook; disabling add-ins one by one identifies the culprit. When the problem lies deeper, a fresh profile rebuilds Outlook’s configuration without touching server-based email. Together they fix most classic-Outlook crashes and sync issues without reinstalling Office.
