/* Client-side search over /search-index.json (generated at build time). No third-party service. */
(function () {
  "use strict";
  var form = document.getElementById("search-form");
  var input = document.getElementById("search-q");
  var out = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  if (!form || !input || !out) return;

  var index = null;
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function highlight(text, terms) {
    var safe = esc(text);
    terms.forEach(function (t) {
      if (t.length < 2) return;
      var re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      safe = safe.replace(re, "<mark>$1</mark>");
    });
    return safe;
  }
  function score(doc, terms) {
    var s = 0;
    var title = doc.title.toLowerCase(), desc = doc.description.toLowerCase(),
        kw = (doc.keywords || "").toLowerCase(), body = doc.text.toLowerCase(), cat = doc.category.toLowerCase();
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i], hit = false;
      if (title.indexOf(t) > -1) { s += 10; hit = true; }
      if (kw.indexOf(t) > -1) { s += 6; hit = true; }
      if (desc.indexOf(t) > -1) { s += 4; hit = true; }
      if (cat.indexOf(t) > -1) { s += 3; hit = true; }
      if (body.indexOf(t) > -1) { s += 1; hit = true; }
      if (!hit) return 0; // every term must match somewhere
    }
    return s;
  }
  function run(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(function (t) { return t.length > 0; }).slice(0, 8);
    if (!terms.length) { out.innerHTML = ""; status.textContent = "Type a word or phrase to search all guides."; return; }
    var results = index.map(function (d) { return { d: d, s: score(d, terms) }; })
      .filter(function (r) { return r.s > 0; })
      .sort(function (a, b) { return b.s - a.s; });
    status.textContent = results.length
      ? results.length + " result" + (results.length === 1 ? "" : "s") + " for “" + q + "”"
      : "No results for “" + q + "”. Try a shorter or different term, or browse the categories below.";
    out.innerHTML = results.map(function (r) {
      return '<li><small>' + esc(r.d.category) + '</small><h2><a href="' + esc(r.d.url) + '">' +
        highlight(r.d.title, terms) + '</a></h2><p>' + highlight(r.d.description, terms) + "</p></li>";
    }).join("");
  }
  function load(cb) {
    if (index) return cb();
    status.textContent = "Loading search index…";
    fetch(INDEX_URL).then(function (r) { return r.json(); })
      .then(function (data) { index = data; cb(); })
      .catch(function () { status.textContent = "Search is temporarily unavailable. Please browse the categories instead."; });
  }
  var params = new URLSearchParams(window.location.search);
  var INDEX_URL = (document.getElementById("search-form").getAttribute("data-index")) || "/search-index.json";
  var initial = (params.get("q") || "").slice(0, 100);
  if (initial) { input.value = initial; load(function () { run(initial); }); }
  else status.textContent = "Type a word or phrase to search all guides.";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var q = input.value.trim().slice(0, 100);
    try { history.replaceState(null, "", q ? "?q=" + encodeURIComponent(q) : location.pathname); } catch (x) {}
    load(function () { run(q); });
  });
})();
