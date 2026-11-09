---
title: "OneDrive Not Syncing? How to Diagnose and Fix Sync Problems"
description: "Fix OneDrive sync problems in Windows: understand the status icons, resolve paused or stuck syncs, file name and storage issues, and safely reset the OneDrive app."
date: 2026-11-07
category: microsoft-365
keywords: [onedrive, sync, microsoft 365, cloud storage, reset onedrive, files on-demand]
relatedSlugs: [outlook-not-receiving-emails, 3-2-1-backup-rule, outlook-safe-mode-new-profile]
faq:
  - q: "Does resetting OneDrive delete my files?"
    a: "No. A reset disconnects and re-syncs your existing sync connections. Files stored in OneDrive remain in the cloud and in your local OneDrive folder; OneDrive re-checks them, which can take some time for large libraries."
  - q: "Is OneDrive a backup?"
    a: "Not on its own. OneDrive syncs changes – including deletions and ransomware damage – across devices. It does have a recycle bin, version history and, for Microsoft 365 subscribers, a Restore feature, but a separate backup copy is still recommended."
  - q: "What do the OneDrive cloud and tick icons mean?"
    a: "A cloud outline means the file is available online only and downloads when you open it. A green tick in a white circle means it's available locally. A solid green circle with a white tick means it's set to 'Always keep on this device'."
references:
  - title: "Microsoft Support – Fix OneDrive sync problems"
    url: "https://support.microsoft.com/en-us/office/fix-onedrive-sync-problems-0899b115-05f7-45ec-95b2-e4cc8c4670b2"
  - title: "Microsoft Support – Reset OneDrive"
    url: "https://support.microsoft.com/en-us/office/reset-onedrive-34701e00-bf7b-42db-b960-84905399050c"
  - title: "Microsoft Support – Restrictions and limitations in OneDrive and SharePoint"
    url: "https://support.microsoft.com/en-us/office/restrictions-and-limitations-in-onedrive-and-sharepoint-64883a5d-228e-48f5-b3d2-eb39e07630fa"
---

OneDrive keeps files in sync between your PC, the cloud and your other devices. When it stops, you may see files that won’t upload, changes that don’t appear elsewhere, or a red error icon in the taskbar. Most problems have a straightforward cause that OneDrive will tell you about – if you know where to look.

## Step 1: Check the OneDrive icon and messages

Find the OneDrive cloud icon in the notification area of the taskbar (you may need to click the **^** arrow to see it). Its appearance tells you a lot:

| Icon | Meaning |
|---|---|
| White or blue cloud | Signed in and up to date (white = personal, blue = work or school) |
| Circular arrows | Syncing in progress |
| Cloud with a pause symbol | Sync is paused |
| Red circle with a white cross | A file or folder can’t sync |
| Yellow warning triangle | Account needs attention, such as storage full or sign-in required |
| Greyed-out cloud | Not signed in, or OneDrive isn’t running |

Click the icon to open the activity panel, which lists errors and often offers a fix button.

## Step 2: Make sure OneDrive is running and signed in

If you can’t see the icon at all, search for **OneDrive** in the Start menu and open it. If prompted, sign in with your Microsoft account or work/school account. Grey icons usually mean you need to sign in again, for example after a password change.

## Step 3: Resume a paused sync

OneDrive may pause automatically in **battery saver** mode or on a **metered connection**, or you may have paused it manually. Click the OneDrive icon, select the **gear (Settings)** icon and choose **Resume syncing**. In OneDrive settings you can also choose whether sync continues on metered networks and battery saver.

## Step 4: Check storage space

Two kinds of storage matter:

- **OneDrive cloud storage:** if your account is full, new files won’t upload. Check usage in OneDrive settings or at onedrive.live.com (personal) and empty the OneDrive recycle bin if needed.
- **Local disk space:** OneDrive needs space on your PC. **Files On-Demand** helps by keeping files online-only until you open them. Right-click files or folders you rarely use in File Explorer and choose **Free up space**.

## Step 5: Fix problem file names and paths

Some files can’t sync because of their name or location. Common issues:

- Characters that aren’t allowed, such as `" * : < > ? / \ |` (some are permitted on personal accounts but not elsewhere).
- Names beginning or ending with a space, or reserved names such as `CON`, `PRN` or `AUX`.
- Very long file paths – the full path, including folders, has a length limit.
- Open files: a file that’s open in an app may not sync until you close it.

The activity panel shows which files are affected. Rename them or move them to a shorter path, and they should sync.

## Step 6: Resolve conflicts

If the same file was edited on two devices, OneDrive may keep both versions, adding your PC’s name to one file name. Open both, keep the correct one and delete the other. For Office files, co-authoring and AutoSave in Microsoft 365 apps reduce conflicts significantly.

## Step 7: Restart OneDrive and the PC

Click the OneDrive icon, open **Settings (gear) › Pause syncing › Quit OneDrive**, then start OneDrive again from the Start menu. If problems remain, restart Windows and install any pending Windows and Office updates.

## Step 8: Reset OneDrive

A reset disconnects all sync connections and re-syncs them, which fixes many stubborn problems. It doesn’t delete your files.

1. Press <kbd>Win</kbd>+<kbd>R</kbd>.
2. Paste the following and press <kbd>Enter</kbd>:

```
%localappdata%\Microsoft\OneDrive\onedrive.exe /reset
```

3. If you see a *“Windows cannot find…”* message, try one of these instead:

```
C:\Program Files\Microsoft OneDrive\onedrive.exe /reset
C:\Program Files (x86)\Microsoft OneDrive\onedrive.exe /reset
```

4. Wait a minute or two. If OneDrive doesn’t restart by itself, open it from the Start menu.

After a reset, OneDrive re-checks all your files, which can take time for large libraries. Any SharePoint libraries you synced may need to be re-added.

## Step 9: Unlink and relink (if reset doesn’t help)

In OneDrive settings, go to **Account › Unlink this PC**, then sign in again and choose your OneDrive folder location. Use the same location so existing files are matched rather than downloaded again.

## Work and school accounts

If OneDrive is managed by your organisation, some settings may be locked, and sync problems may relate to policies or SharePoint permissions. Contact your IT department if the steps above don’t solve the issue.

## Conclusion

The OneDrive icon and activity panel usually tell you exactly what’s wrong – paused sync, a full account, a problem file name or a sign-in issue. Fix those first, then restart or reset OneDrive. And remember that sync isn’t the same as backup: keep a separate copy of irreplaceable files using the [3-2-1 backup rule](/articles/3-2-1-backup-rule/).
