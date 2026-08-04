---
layout: home
author_profile: true
title: "Home"
---

I am a theoretical physicist with a broad set of interests in quantum
field theory. 

## Recent Notes

<ul>
{% for post in site.posts limit:10 %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>({{ post.date | date: "%Y-%m-%d" }})</small>
  </li>
{% endfor %}
</ul>

[View all notes →]({{ "/notes/" | relative_url }})
