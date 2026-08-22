---
layout: single
author_profile: true
title: "Home"
---

I have a broad set of interests. 

## Recent Notes

<ul> {% for post in site.posts limit:7 %} <li> <a href="{{ post.url | relative_url }}">{{ post.title }}</a> </li> {% endfor %} </ul>

To view older notes, click [here]({{ "/notes/" | relative_url }}).
