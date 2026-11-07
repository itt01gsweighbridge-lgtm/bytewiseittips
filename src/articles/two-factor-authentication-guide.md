---
title: "Two-Factor Authentication Explained: What It Is and How to Turn It On"
description: "Understand two-factor authentication (2FA), compare SMS codes, authenticator apps, security keys and passkeys, and learn how to enable it and avoid getting locked out."
date: 2026-10-06
category: cybersecurity
keywords: [two-factor authentication, 2fa, mfa, authenticator app, passkeys, security key, account security]
relatedSlugs: [strong-passwords-password-manager, recognise-phishing-emails]
faq:
  - q: "Is SMS two-factor authentication still worth using?"
    a: "Yes – it's much better than having no second factor. SMS can be intercepted through SIM-swap fraud, so where available, an authenticator app, passkey or security key is stronger. But SMS 2FA still blocks most automated attacks."
  - q: "What happens if I lose my phone?"
    a: "This is why backup methods matter. Use the recovery codes you saved during setup, a second registered device or security key, or your account provider's recovery process. Many authenticator apps also offer encrypted cloud backup."
  - q: "What is the difference between 2FA and MFA?"
    a: "Two-factor authentication uses exactly two factors; multi-factor authentication (MFA) means two or more. In everyday use, the terms are used interchangeably, along with 'two-step verification'."
references:
  - title: "NCSC – Turn on 2-step verification"
    url: "https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/activate-2-step-verification-on-your-email"
  - title: "CISA – Turn on multifactor authentication"
    url: "https://www.cisa.gov/secure-our-world/turn-mfa"
  - title: "Microsoft Support – How to use two-step verification with your Microsoft account"
    url: "https://support.microsoft.com/en-us/account-billing/how-to-use-two-step-verification-with-your-microsoft-account-c7910146-672f-01e9-50a0-93b4585e7eb4"
  - title: "Google Account Help – Turn on 2-Step Verification"
    url: "https://support.google.com/accounts/answer/185839"
---

A password on its own is a single lock. If someone steals or guesses it, they’re in. **Two-factor authentication (2FA)** – also called two-step verification or multi-factor authentication (MFA) – adds a second check, so a stolen password alone isn’t enough. It is one of the most effective security steps you can take, and it takes about five minutes per account.

## How 2FA works

Authentication factors fall into three groups:

- **Something you know** – a password or PIN.
- **Something you have** – your phone, a security key or a code generator.
- **Something you are** – a fingerprint or face scan.

2FA combines two different groups. When you sign in on a new device, you enter your password *and* confirm with something you have, such as a code from your phone.

## Types of second factor, from good to best

| Method | How it works | Strengths | Weaknesses |
|---|---|---|---|
| **SMS or voice codes** | A code is texted or read to you | Easy, works on any phone | Vulnerable to SIM-swap fraud and phishing |
| **Email codes** | A code is sent to your email | Simple | Only as secure as your email account |
| **Authenticator apps** | An app generates a new 6-digit code every 30 seconds | Works offline, not tied to your phone number | Codes can still be phished by fake sites |
| **Push notifications** | Tap “Approve” on your phone | Very convenient | Risk of approving prompts you didn’t start (“MFA fatigue”) |
| **Security keys and passkeys** | A physical key or cryptographic key on your device | Highly resistant to phishing | Need a compatible device; must plan backups |

Any second factor is far better than none. If you’re choosing, prefer an **authenticator app** over SMS, and **passkeys or security keys** where supported.

> **Never approve a sign-in prompt you didn’t start**, and never read a code to anyone who calls or messages you. Legitimate support staff will not ask for your 2FA code.

## Which accounts to protect first

1. **Email** – the account used to reset all your other passwords.
2. **Password manager** – see our [password manager guide](/articles/strong-passwords-password-manager/).
3. **Microsoft, Google and Apple accounts** – often linked to email, files, photos and device backups.
4. **Banking and payment apps** – many already require it.
5. **Social media and messaging** – frequently targeted for scams.
6. **Shopping sites with saved cards** and work accounts.

## How to turn on 2FA (general steps)

Most services follow the same pattern:

1. Sign in and open **Security** or **Account settings**.
2. Find **Two-step verification**, **Two-factor authentication** or **Multi-factor authentication**.
3. Choose a method. For an authenticator app, the site displays a **QR code**; scan it with the app, then enter the code the app shows to confirm.
4. **Save your backup or recovery codes** when offered – print them or store them in your password manager.
5. Add a **second method** if possible, such as a backup phone number or a second security key.

For your Microsoft account, go to account.microsoft.com, choose **Security**, then **Manage how I sign in**. For Google, go to myaccount.google.com, select **Security**, then **2-Step Verification**. Menu names change occasionally – the official help pages linked below have current instructions.

## Choosing an authenticator app

Well-known options include Microsoft Authenticator, Google Authenticator and the authenticators built into many password managers. Look for:

- **Encrypted backup or sync**, so you don’t lose your codes if you lose your phone;
- an app lock (PIN or biometrics);
- download from the official app store only.

## Passkeys: the next step

Passkeys replace passwords with a key stored on your device or password manager, unlocked by your fingerprint, face or PIN. Because the passkey only works on the genuine website, fake login pages can’t capture it. Major services including Microsoft, Google and Apple support passkeys. When a service offers them, setting one up gives you strong protection with less effort.

## Avoid getting locked out

- Store **recovery codes** somewhere safe and separate from your phone.
- Register **more than one** method or device.
- Before changing phones, **transfer your authenticator** accounts or check that cloud backup is on.
- Keep your **recovery email and phone number** up to date.

## Conclusion

Two-factor authentication stops the vast majority of account takeovers that rely on stolen passwords. Start with your email and password manager today, prefer an authenticator app, passkey or security key over SMS where you can, and save your recovery codes. Combined with being able to [recognise phishing](/articles/recognise-phishing-emails/), it makes your accounts far harder to compromise.
