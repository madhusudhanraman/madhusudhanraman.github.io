---
title: "Books"
layout: single
permalink: /books/
author_profile: true
--------------------

<div class="book-grid">

{% assign book_posts = site.posts
| where_exp: "post", "post.categories contains 'Books'"
| sort: "date"
| reverse
%}

{% for post in book_posts %} <a class="book-card" href="{{ post.url | relative_url }}"> <img
   src="{{ post.cover }}"
   alt="{{ post.title }}"
   loading="lazy"
 >

```
<div class="book-title">{{ post.title }}</div>

{% if post.author %}
  <div class="book-author">{{ post.author }}</div>
{% endif %}

{% if post.year %}
  <div class="book-year">{{ post.year }}</div>
{% endif %}
```

  </a>
{% endfor %}

</div>
