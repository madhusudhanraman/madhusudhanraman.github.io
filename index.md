---
layout: single
author_profile: true
title: "Home"
---

I am a theoretical physicist with a broad set of interests in quantum
field theory. 

## Recent Notes

{% for post in site.posts limit:10 %}
- {{ post.date | date: "%m/%d" }} - [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}

To view older notes, click [here]({{ "/notes/" | relative_url }}).