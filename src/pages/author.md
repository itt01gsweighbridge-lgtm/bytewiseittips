---
title: Author Profile
description: Meet Sador, founder and editor of ByteWise IT Tips – his IT experience, areas of expertise, editorial responsibilities and how every guide is verified.
intro: Who writes, checks and is responsible for the guides published on ByteWise IT Tips.
slug: author
date: 2026-11-07
lastUpdated: 2026-11-09
showUpdated: true
---

## {{ author.personName }} – {{ author.personRole }}

**{{ author.personJobTitle }}**

{{ author.personBio }}

### Relevant experience

{% for e in author.experience -%}
- {{ e }}
{% endfor %}

### Qualifications

{% if author.qualifications.length -%}
{% for q in author.qualifications -%}
- {{ q }}
{% endfor %}
{%- else -%}
{% setupRequired "Add any certifications you actually hold (e.g. Microsoft, CompTIA, Cisco) in Admin › Settings › Author profile › Qualifications. Leave empty if none – never list qualifications you don't have." %}
{%- endif %}

### Areas of expertise covered on this site

{{ author.expertise | join(", ") }}.

## Editorial responsibilities

As editor, {{ author.personName }} is responsible for:

- choosing topics based on real problems readers and IT users face;
- making sure each guide follows our [editorial policy](/editorial-policy/), starting with the safest steps;
- approving every article before it is published and keeping guides up to date;
- handling corrections under our [corrections policy](/corrections-policy/);
- making sure advertising never influences what we write.

## How every guide is verified

1. **Primary sources first.** Steps are checked against official documentation – Microsoft Learn and Microsoft Support, Google’s Android help, hardware manufacturers, and national cyber security agencies such as the UK NCSC and US CISA. The sources are listed at the end of each guide.
2. **Safety review.** Any step that can cause data loss, affect a warranty or needs administrator rights is flagged in the text.
3. **Honest about AI assistance.** Some drafts are prepared with AI writing tools. Every draft is fact-checked against the listed sources and edited before publication, and the editor – not the tool – is accountable for the result.
4. **No invented experience.** We don’t publish fabricated tests, benchmarks, reviews or anecdotes.
5. **Regular review.** Each guide shows when it was published and last updated.

## The editorial team

{{ author.bio }}

## Contact the editor

Questions, corrections or suggestions: [{{ site.owner.contactEmail }}](mailto:{{ site.owner.contactEmail }}) or our [contact page](/contact/).

Video walkthroughs of many topics are published on the [ByteWise IT YouTube channel]({{ site.social.youtube }}).

## Latest guides

{{ collections.articles.length }} guides published so far. The most recent:

{% for post in collections.articles | limit(10) -%}
- [{{ post.data.title }}]({{ post.url }}) – {{ post.date | readableDate }}
{% endfor %}

[See all articles →](/articles/)
