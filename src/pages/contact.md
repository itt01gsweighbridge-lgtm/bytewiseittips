---
title: Contact Us
description: Contact the ByteWise IT Tips editorial team with corrections, feedback, article suggestions or business enquiries.
intro: We read every message. Use the form below for corrections, feedback, guide suggestions or business enquiries.
pageScript: contact.js
date: 2026-11-07
---

## Before you write

- **Found an error in a guide?** Please include the page address and what you believe is wrong. Corrections are handled under our [corrections policy](/corrections-policy/).
- **Need help with your own device?** We are unable to provide individual technical support or remote assistance, and we will **never** ask for your passwords, payment details or remote access to your computer. If anyone claiming to be from ByteWise IT Tips asks for these, it is a scam.
- **Advertising and partnerships:** we do not sell sponsored articles or paid rankings.

## Send us a message

{% if site.contact.web3formsAccessKey %}
<form id="contact-form" class="form" action="https://api.web3forms.com/submit" method="POST" novalidate>
  <input type="hidden" name="access_key" value="{{ site.contact.web3formsAccessKey }}">
  <input type="hidden" name="subject" value="New message from {{ site.name }}">
  <input type="hidden" name="from_name" value="{{ site.name }} contact form">
  <input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
  <div><label for="cf-name">Your name</label><input id="cf-name" name="name" type="text" required minlength="2" maxlength="80" autocomplete="name"></div>
  <div><label for="cf-email">Email address</label><input id="cf-email" name="email" type="email" required maxlength="120" autocomplete="email"><p class="hint">Used only to reply to you.</p></div>
  <div><label for="cf-topic">Topic</label>
    <select id="cf-topic" name="topic"><option>Correction</option><option>Feedback</option><option>Article suggestion</option><option>Business enquiry</option><option>Other</option></select></div>
  <div><label for="cf-message">Message</label><textarea id="cf-message" name="message" required minlength="20" maxlength="4000"></textarea></div>
  <div><label style="font-weight:400"><input type="checkbox" name="consent" required style="width:auto"> I have read the <a href="/privacy-policy/">privacy policy</a> and agree that my message will be processed to answer my enquiry.</label></div>
  <p id="form-status" class="form-status" role="status" tabindex="-1" hidden></p>
  <div><button class="btn btn-primary" type="submit">Send message</button></div>
</form>
{% else %}
{% setupRequired "Create a free Web3Forms access key (web3forms.com) for your email address and paste it into Admin › Settings › Contact form. The form appears here automatically." %}
{% endif %}

{% if site.owner.contactEmail %}
You can also email us directly at <a href="mailto:{{ site.owner.contactEmail }}">{{ site.owner.contactEmail }}</a>.
{% else %}
{% setupRequired "Optional: add a public contact email address in Admin › Settings › Owner." %}
{% endif %}

We aim to reply within a few working days. Messages are handled in line with our [privacy policy](/privacy-policy/).
