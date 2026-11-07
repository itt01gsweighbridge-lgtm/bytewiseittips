---
title: Author Profile
description: Meet the ByteWise IT Tips editorial team – who writes and reviews our technology guides, our areas of focus and how we work.
intro: The people responsible for the guides published on ByteWise IT Tips.
slug: author
date: 2026-11-07
---

## {{ author.name }}

**Role:** {{ author.role }}

{{ author.bio }}

**Areas of focus:** {{ author.expertise | join(", ") }}.

{% if author.personName %}
### About the editor: {{ author.personName }}

{{ author.personBio }}
{% else %}
{% setupRequired "Add the editor's real name and a short, truthful biography in Admin › Settings › Author (only qualifications and experience you actually have). Showing a real person behind the site helps readers trust it." %}
{% endif %}

## How we work

Every article on this site is researched against official documentation, reviewed and edited before publication, and updated when products change. Our full standards, including how we use AI writing tools, are set out in our [editorial policy](/editorial-policy/).

We do not claim hands-on testing we have not done, and we do not publish paid reviews. When you spot something that is wrong or out of date, please [let us know](/contact/) – corrections are handled under our [corrections policy](/corrections-policy/).

## Articles by {{ author.name }}

{{ collections.articles.length }} guides published so far. The latest:

{% for post in collections.articles | limit(10) -%}
- [{{ post.data.title }}]({{ post.url }}) – {{ post.date | readableDate }}
{% endfor %}

[See all articles →](/articles/)
