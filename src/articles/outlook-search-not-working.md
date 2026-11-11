---
title: "Outlook Search Not Working? How to Fix Missing Results"
description: "Fix Outlook search when it finds nothing or misses emails: check the scope, indexing status, the Windows Search service and cached mode, then rebuild the index."
date: 2026-11-11
category: microsoft-365
keywords: [outlook search not working, outlook search no results, rebuild outlook search index, indexing options, classic outlook, new outlook]
relatedSlugs: [outlook-not-receiving-emails, outlook-safe-mode-new-profile, repair-windows-sfc-dism]
faq:
  - q: "Why does Outlook search only find recent emails?"
    a: "In classic Outlook with Cached Exchange Mode, only email within the 'Download email for the past' period is stored on your PC. Older messages stay on the server. Move the slider in Account Settings further to the right, or to All, and restart Outlook."
  - q: "How long does rebuilding the Outlook search index take?"
    a: "Microsoft doesn't give a fixed time and warns that it might take a long time. It depends on how much email and how many other files are being indexed. Leave the PC switched on and check Indexing Status in Outlook until it reports that indexing is complete."
  - q: "Does rebuilding the index delete any emails?"
    a: "No. Rebuilding the index only recreates the search catalogue that Windows uses to find items quickly. Your messages, folders and data files are not changed."
  - q: "Can I search all my accounts at once in new Outlook?"
    a: "According to Microsoft, new Outlook doesn't support searching several accounts at once. Select each account in turn and search in All Folders."
references:
  - title: "Microsoft Support – Troubleshooting Outlook search issues"
    url: "https://support.microsoft.com/en-us/office/troubleshooting-outlook-search-issues-2556b11f-f4d8-46be-b0a7-de33a3f4f066"
  - title: "Microsoft Support – Fix search issues by rebuilding your Instant Search catalog"
    url: "https://support.microsoft.com/en-gb/office/fix-search-issues-by-rebuilding-your-instant-search-catalog-213a2728-0ef4-427a-9bb2-aed329a59b17"
  - title: "Microsoft Support – How to search in Outlook"
    url: "https://support.microsoft.com/en-gb/office/how-to-search-in-outlook-d824d1e9-a255-4c8a-8553-276fb895a8da"
---

You know the email is there – you can see it in Outlook on the web or on your phone – but searching in Outlook on your PC returns nothing, or only shows a handful of recent messages. This is one of the most common Outlook complaints, and it is usually caused by the search scope, an unfinished search index or offline settings rather than missing mail.

First, work out which Outlook you are using, because the fixes differ. If there is a **File** tab at the top left of the ribbon, you have **classic Outlook**. If there isn't, you have **new Outlook for Windows**. Most of the steps below apply to classic Outlook, which relies on Windows indexing to search your mailbox; new Outlook steps are clearly labelled.

If emails are missing entirely – not just from search results – see our guide to [Outlook not receiving or syncing email](/articles/outlook-not-receiving-emails/) instead.

## Step 1: Check your search scope

The simplest cause is that Outlook is only searching one folder or one mailbox.

**Classic Outlook:** click in the Search box at the top of the window. The **Search** tab appears in the ribbon. Next to the box there is a scope list showing, for example, *Current Mailbox*. Open it and choose a wider scope:

- **Current Folder** – only the folder you are looking at
- **All Subfolders** – the current folder and those inside it
- **Current Mailbox** – everything in the selected mailbox
- **All Mailboxes** – every mailbox in your profile
- **All Outlook Items** – mail, calendar, contacts and tasks

**New Outlook:** go to **Settings › General › Search** and change the **Search scope**. To include deleted messages, tick **Include deleted items** under *Search results* on the same page. Microsoft notes that new Outlook can't search several accounts at once, so select each account in turn and search in **All Folders**.

## Step 2: Check your search terms

Search is more literal than many people expect. A few points from Microsoft's search guidance:

- Use the **filter button** on the right of the Search box (or the **Refine** group on the Search tab) to search by sender, subject, attachments or date without typing special syntax.
- If you do type syntax, use forms such as these (quotation marks keep names together):

```text
from:"jane smith"
subject:"invoice 2026"
hasattachment:yes
received:"this week"
```

- **AND**, **OR** and **NOT** must be typed in capitals to work as operators.
- Punctuation is ignored, and only the first 1,000 results are returned, so narrow broad searches with a filter.

If a simple search for the sender's name finds the email in Outlook on the web but not on your PC, the problem is the local index – carry on with the steps below.

## Step 3: Check indexing status (classic Outlook)

Classic Outlook can't find items that Windows hasn't indexed yet. After setting up a new PC, a new profile or a large mailbox, indexing can take hours.

1. Click in the Search box.
2. On the **Search** tab, select **Search Tools › Indexing Status**.
3. If it shows items remaining, note the number, wait about five minutes and check again.

If the number is going down, indexing is working – leave Outlook open and give it time. If it stays the same for a long time, continue with the next steps.

While you're in **Search Tools**, also open **Locations to Search** and make sure every mailbox and data file you want to search is ticked.

## Step 4: Download all your email (classic Outlook, cached mode)

With Cached Exchange Mode turned on (the default for Microsoft 365 accounts), classic Outlook only keeps a set period of email on your PC. Older messages stay on the server, so a local search may not show them.

1. Go to **File › Account Settings › Account Settings**.
2. On the **Email** tab, select your account and click **Change**.
3. Drag the **Download email for the past** slider to the right, or all the way to **All**.
4. Click **Next**, then **Done**, and restart Outlook.

Downloading more email uses more disk space and takes a while on a large mailbox, so do this on a reliable connection.

Two related settings live in **File › Options › Search**:

- Clearing **Improve search speed by limiting the number of results shown** removes the default limit of 250 results.
- Ticking **Include messages from the Deleted Items folder in each data file when searching in All Items** brings deleted mail into results.

Restart Outlook after changing either option.

## Step 5: Make sure the Windows Search service is running

Classic Outlook uses the Windows Search service. If it has stopped, search breaks.

1. Press **Start**, type the following and press **Enter**:

```text
services.msc
```

2. Double-click **Windows Search**.
3. Set **Startup type** to **Automatic (Delayed Start)**.
4. If **Service status** isn't *Running*, click **Start**, then **OK**.

If your PC is managed by an organisation and you can't change services, ask your IT team.

## Step 6: Check that Outlook is included in Indexing Options

1. Close Outlook.
2. Open **Control Panel** and select **Indexing Options** (or type *Indexing Options* into the Start menu search).
3. Check that **Microsoft Outlook** appears in the **Included Locations** column.
4. If it doesn't, click **Modify**, tick **Microsoft Outlook**, click **OK** and then **Close**.

You can also reach this dialog from Outlook through **File › Options › Search › Indexing Options**.

## Step 7: Rebuild the search index (classic Outlook)

If indexing is stuck or results are still incomplete, rebuilding the index usually fixes it. This doesn't delete any email – it only recreates the search catalogue – but Microsoft warns that it might take a long time, and Windows search results for your other files may be incomplete until it finishes. Start it when you can leave the PC switched on, such as at the end of the day.

1. Close Outlook.
2. Open **Control Panel › Indexing Options**.
3. Click **Advanced**.
4. On the **Index Settings** tab, under **Troubleshooting**, click **Rebuild**.
5. Confirm with **OK**, then click **Close**.

When the rebuild has had time to run, open Outlook and check **Search Tools › Indexing Status** again until it reports that indexing is complete.

## Step 8: Special cases – shared mailboxes and archives

- **Shared mailboxes:** Microsoft describes limited searching of shared mailboxes as a design limitation. Open the shared mailbox folder and set the scope to **Current Folder**.
- **Online Archive:** when searching *All Mailboxes* or *All Outlook Items*, the archive may return few or no results. Select the archive folder itself and use **Current Folder**. New Outlook searches Online Archives automatically.

## Step 9: Rule out add-ins, the profile and Office itself

If none of the above helps, the problem may be a faulty add-in or a damaged Outlook profile. Our guide to [Outlook Safe Mode and creating a new profile](/articles/outlook-safe-mode-new-profile/) explains how to test both safely. A new profile also triggers a fresh download and index of your mailbox, so allow time for Step 3 afterwards.

Finally, you can repair Office from **Settings › Apps › Installed apps**: select your Microsoft 365 or Office entry, choose **Modify**, then **Quick Repair** (or **Online Repair** if that doesn't work). If other parts of Windows are also misbehaving, our guide to [repairing Windows with SFC and DISM](/articles/repair-windows-sfc-dism/) may help.

## Conclusion

Most Outlook search problems come down to three things: a narrow search scope, an index that hasn't finished, or email that was never downloaded to the PC. Check the scope and your search terms first, then indexing status and the cached-mode slider, and only rebuild the index if indexing is stuck. In new Outlook, the scope settings in **Settings › General › Search** solve most issues. If a search works in Outlook on the web but not on your PC, you can be confident the email is safe – it's just a matter of getting the local search working again.
