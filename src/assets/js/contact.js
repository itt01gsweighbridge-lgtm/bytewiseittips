/* Contact form: client-side validation + submission to Web3Forms (free form-to-email service).
   The access key is public by design (it only allows sending to the owner's verified address). */
(function () {
  "use strict";
  var form = document.getElementById("contact-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  function show(msg, ok) {
    status.hidden = false;
    status.className = "form-status " + (ok ? "ok" : "err");
    status.textContent = msg;
    status.focus();
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.botcheck && form.botcheck.checked) return; // honeypot
    var name = form.name.value.trim(), email = form.email.value.trim(), msg = form.message.value.trim();
    if (name.length < 2 || name.length > 80) return show("Please enter your name (2–80 characters).", false);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 120) return show("Please enter a valid email address.", false);
    if (msg.length < 20 || msg.length > 4000) return show("Please write a message between 20 and 4,000 characters.", false);
    if (!form.consent.checked) return show("Please confirm you have read the privacy policy.", false);
    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true; btn.textContent = "Sending…";
    fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok && j.success, j: j }; }); })
      .then(function (res) {
        if (res.ok) { form.reset(); show("Thank you – your message has been sent. We aim to reply within a few working days.", true); }
        else show("Sorry, your message could not be sent. Please try again later.", false);
      })
      .catch(function () { show("Network error – please check your connection and try again.", false); })
      .finally(function () { btn.disabled = false; btn.textContent = "Send message"; });
  });
})();
