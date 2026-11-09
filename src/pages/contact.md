---
title: Contact ByteWise IT Tips
navTitle: Contact Us
description: Contact the ByteWise IT Tips editorial team by email or contact form with corrections, feedback, article suggestions or business enquiries.
intro: We read every message. Email us directly or use the form below for corrections, feedback, guide suggestions or business enquiries.
pageScript: contact.js
date: 2026-11-07
lastUpdated: 2026-11-09
---

<div class="contact-card">
  <div>
    <p class="contact-label">Email</p>
    <p class="contact-value"><a href="mailto:{{ site.owner.contactEmail }}">{{ site.owner.contactEmail }}</a></p>
  </div>
  <div>
    <p class="contact-label">Response time</p>
    <p class="contact-value">Usually within a few working days</p>
  </div>
  <div>
    <p class="contact-label">Website operator</p>
    <p class="contact-value">{{ site.owner.name }}, {{ site.owner.country }}</p>
  </div>
</div>

## Before you write

- **Found an error in a guide?** Please include the page address and what you believe is wrong. Corrections are handled under our [corrections policy](/corrections-policy/).
- **Need help with your own device?** We are unable to provide individual technical support or remote assistance, and we will **never** ask for your passwords, payment details or remote access to your computer. If anyone claiming to be from ByteWise IT Tips asks for these, it is a scam – see [how to recognise phishing](/articles/recognise-phishing-emails/).
- **Advertising and partnerships:** we do not sell sponsored articles or paid rankings.

{% if site.contact.web3formsAccessKey %}
## Send us a message

<form id="contact-form" class="form" action="https://api.web3forms.com/submit" method="POST" novalidate>
  <input type="hidden" name="access_key" value="{{ site.contact.web3formsAccessKey }}">
  <input type="hidden" name="subject" value="New message from {{ site.name }} contact form">
  <input type="hidden" name="from_name" value="{{ site.name }} website">
  <input type="checkbox" name="botcheck" class="hp" tabindex="-1" aria-hidden="true">
  <div><label for="cf-name">Your name <span aria-hidden="true">*</span></label><input id="cf-name" name="name" type="text" required minlength="2" maxlength="80" autocomplete="name"></div>
  <div><label for="cf-email">Email address <span aria-hidden="true">*</span></label><input id="cf-email" name="email" type="email" required maxlength="120" autocomplete="email" aria-describedby="cf-email-hint"><p class="hint" id="cf-email-hint">Used only to reply to you.</p></div>
  <div><label for="cf-topic">Topic</label>
    <select id="cf-topic" name="topic"><option>Correction</option><option>Feedback</option><option>Article suggestion</option><option>Business enquiry</option><option>Other</option></select></div>
  <div><label for="cf-message">Message <span aria-hidden="true">*</span></label><textarea id="cf-message" name="message" required minlength="20" maxlength="4000" aria-describedby="cf-message-hint"></textarea><p class="hint" id="cf-message-hint">20–4,000 characters. Please don’t include passwords or other sensitive information.</p></div>
  <div><label class="consent-check"><input type="checkbox" name="consent" required> I have read the <a href="/privacy-policy/">privacy policy</a> and agree that my name, email address and message will be processed to answer my enquiry.</label></div>
  <p id="form-status" class="form-status" role="status" tabindex="-1" hidden></p>
  <div><button class="btn btn-primary" type="submit">Send message</button></div>
</form>

**Privacy notice:** form messages are delivered to our inbox by the form service Web3Forms and are used only to reply to you. We keep them no longer than necessary and normally delete them within 24 months. Full details are in our [privacy policy](/privacy-policy/).
{% else %}
{% setupRequired "Contact form: paste the Web3Forms access key for this email address into Admin › Settings › Contact form. Until then visitors can use the email address above." %}
{% endif %}
