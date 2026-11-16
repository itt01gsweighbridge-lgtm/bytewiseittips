---
title: "No Sound in Windows 11? How to Fix Audio Problems Step by Step"
description: "Fix no sound in Windows 11: check the output device and volume mixer, turn off audio enhancements, restart audio services and update or roll back the driver."
date: 2026-11-16
category: windows
keywords: [no sound windows 11, windows 11 audio not working, no audio output device is installed, audio enhancements, windows audio service, roll back audio driver, volume mixer]
relatedSlugs: [repair-windows-sfc-dism, windows-update-stuck-fix, windows-11-slow-startup-fixes]
faq:
  - q: "Why does Windows 11 say 'No audio output device is installed'?"
    a: "Windows can't see a working playback device. The device may be disabled or hidden in Device Manager, or its driver may be missing or damaged. Open Device Manager, expand Sound, video and game controllers, enable the device if that option is offered, use View › Show hidden devices and Action › Scan for hardware changes, then install the latest driver from your PC or sound card manufacturer."
  - q: "Why do system sounds work but one app has no sound?"
    a: "The app is probably muted or sending audio to a different device. Go to Settings › System › Sound › Volume mixer, and under Apps check that the app isn't muted, its slider is up and the correct output device is selected for it."
  - q: "Sound stopped working after a Windows update. What should I do?"
    a: "Install any further updates first, as a later update or driver may fix it. If that doesn't help, update the audio driver in Device Manager, or use Roll Back Driver on the Driver tab to return to the previous version. Roll Back Driver is only available if an earlier driver is stored on the PC."
  - q: "Will uninstalling the audio driver leave me with no sound permanently?"
    a: "No. After you uninstall the device in Device Manager and restart, Windows reinstalls a driver automatically. If the generic driver it installs works but lacks features, you can install the manufacturer's driver afterwards."
references:
  - title: "Microsoft Support – Fix sound or audio problems in Windows"
    url: "https://support.microsoft.com/en-us/windows/hardware/audio/fix-sound-or-audio-problems-in-windows"
  - title: "Microsoft Support – Fix missing or undetected audio output device in Windows"
    url: "https://support.microsoft.com/en-us/windows/hardware/audio/fix-missing-or-undetected-audio-output-device-in-windows"
  - title: "Microsoft Support – Fix audio stops working after a Windows update in Windows"
    url: "https://support.microsoft.com/en-us/windows/hardware/audio/fix-audio-stops-working-after-a-windows-update-in-windows"
  - title: "Microsoft Support – Fix app audio not working while system sounds work in Windows"
    url: "https://support.microsoft.com/en-us/windows/hardware/audio/fix-app-audio-not-working-while-system-sounds-work-in-windows"
---

Your speakers or headphones were working yesterday, and now Windows 11 plays nothing at all. Perhaps the volume icon looks normal, perhaps it shows a red cross, or perhaps you see the message *No audio output device is installed*. Sound problems are frustrating, but they are rarely a sign of broken hardware. Most of the time Windows is simply sending audio to the wrong device, something is muted, or the audio driver needs attention.

The steps below are based on Microsoft's own audio troubleshooting guidance and are ordered from the quickest and safest checks to the more involved fixes. Test your sound after each step – there's no need to carry on once it's working.

## Step 1: Check the cables, power and mute buttons

Start with the physical basics, because they catch more people out than any setting:

- Make sure speakers are switched on and plugged in, and that cables are pushed fully into the right sockets. On many desktop PCs the **green** socket is audio output and the **pink** one is for a microphone.
- Check any volume knob or mute button on the speakers, headset or keyboard.
- For USB headsets or speakers, try a different USB port.
- Unplug your headphones. With headphones connected, some PCs send no sound to the speakers.

## Step 2: Choose the right output device

Windows 11 can play sound through speakers, headphones, a Bluetooth device or even a monitor connected over HDMI. If it has picked the wrong one, you'll hear nothing.

1. Select the **speaker icon** on the taskbar.
2. Click the arrow next to the volume slider (its tooltip is *Select a sound output*).
3. Choose the device you want to use and check that the volume slider is up.

You can also do this in **Start › Settings › System › Sound**. Under **Output**, select your device; selecting it here makes it the default. Microsoft specifically warns against choosing an external monitor without built-in speakers as your output device – that is a very common reason for silence after connecting a new screen.

## Step 3: Check the volume mixer and app settings

If system sounds play but a particular app, such as a browser or video-calling app, is silent, the problem is usually app-specific.

1. Go to **Start › Settings › System › Sound** and select **Volume mixer**.
2. Under **Apps**, make sure the app isn't muted and its slider is turned up.
3. Check that the correct **Output device** is selected for that app.

Also look at the app's own settings: browsers, media players and meeting apps often have a separate speaker or volume setting of their own.

## Step 4: Run the audio troubleshooter

Windows 11 includes an automated audio troubleshooter in the **Get Help** app. Microsoft provides a direct link to it at *aka.ms/GetHelp-AudioTroubleshooter*. You can also reach the troubleshooter through **Start › Settings › System › Troubleshoot › Other troubleshooters** and select **Run** next to **Audio**.

The troubleshooter checks common problems, such as stopped services or a muted device, and offers to fix them. It's quick and safe, so it's worth trying before you change anything manually.

## Step 5: Make sure the device is enabled

A playback device can be disabled without you realising.

1. Go to **Start › Settings › System › Sound**.
2. Under **Advanced**, select **More sound settings**.
3. On the **Playback** tab, select your device and click **Properties**.
4. Under **Device usage**, make sure **Use this device (enable)** is selected, then click **OK**.

While you're on the **Playback** tab, you can also right-click your speakers or headphones and choose **Set as default device**.

## Step 6: Turn off audio enhancements

Audio enhancements are extra processing effects supplied by Windows or your sound hardware maker. Microsoft lists turning them off as a fix for missing or broken sound.

1. Go to **Start › Settings › System › Sound**.
2. Under **Output**, select your device.
3. Scroll to **Advanced settings** and set **Audio enhancements** to **Off**.

If this fixes the problem, you can leave enhancements off – you lose very little for everyday listening.

## Step 7: Try a different audio format

Occasionally, sound fails because the device doesn't like the sample rate Windows is using.

1. Open **Control Panel › Hardware and Sound › Sound**.
2. On the **Playback** tab, right-click your default device and select **Properties**.
3. On the **Advanced** tab, change the **Default Format** to a different option, click **OK** and test. Try a couple of formats if the first doesn't help.

## Step 8: Restart the Windows Audio services

If the audio services have stopped or hung, Windows can't play anything – sometimes the volume icon shows an error.

1. Press **Start**, type the following and press **Enter**:

```text
services.msc
```

2. Right-click **Windows Audio** and select **Restart**.
3. Right-click **Windows Audio Endpoint Builder** and select **Restart**.

Test the sound. If you can't change services on a work PC, ask your IT team. A full restart of the PC (**Start › Power › Restart**) also restarts these services and clears many temporary glitches.

## Step 9: Install Windows updates

Microsoft recommends installing all available updates, as they can include audio driver fixes.

1. Go to **Start › Settings › Windows Update**.
2. Select **Check for updates** and install everything offered.
3. Restart the PC.

If updates won't install, see our guide to [fixing Windows Update when it's stuck or failing](/articles/windows-update-stuck-fix/).

## Step 10: Update, roll back or reinstall the audio driver

The driver is the software that lets Windows talk to your sound hardware. All of these options are in Device Manager.

1. Right-click **Start** and select **Device Manager** (or search for it).
2. Expand **Sound, video and game controllers**.

If your audio device isn't listed at all, select **View › Show hidden devices**, then **Action › Scan for hardware changes**. If the device appears with an **Enable device** option when you right-click it, select that.

Then try these in order:

- **Update:** right-click the audio device, select **Update driver › Search automatically for drivers**. If Windows finds nothing, download the latest driver from your PC or sound card manufacturer's support website.
- **Roll back** (useful if sound stopped after an update): right-click the device, select **Properties**, open the **Driver** tab and click **Roll Back Driver**. This button only works if an older driver is stored on the PC.
- **Reinstall:** right-click the device and select **Uninstall device**, tick **Attempt to remove the driver for this device**, click **Uninstall** and restart. Windows reinstalls a driver when it starts up.
- **Generic driver:** right-click the device, select **Update driver › Browse my computer for drivers › Let me pick from a list of available drivers on my computer**, choose **High Definition Audio Device** and click **Next**.

**Warning:** don't download "driver updater" tools from advertisements. Only use drivers from Windows Update or your hardware manufacturer.

## Step 11: If nothing works

If none of the steps above has helped, a damaged Windows component may be involved, especially if other features are misbehaving too. Our guide to [repairing Windows system files with SFC and DISM](/articles/repair-windows-sfc-dism/) explains how to check and repair them safely. Microsoft also suggests restoring the PC to an earlier restore point when sound broke after a change and rolling back the driver isn't possible.

Finally, test with a different pair of headphones or speakers. If they work, the original device or its cable is faulty. If no device works through any socket, even after a driver reinstall, the sound hardware itself may need repair.

## Conclusion

When Windows 11 goes silent, work from the outside in: check cables and mute buttons, make sure the right output device is selected, look at the volume mixer, then run the audio troubleshooter. If that doesn't do it, enable the device, turn off audio enhancements and restart the audio services. Driver changes come last – update first, roll back if the problem began after an update, and reinstall if all else fails. In most cases, you'll have your sound back well before you reach the final step.
