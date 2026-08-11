---
title: "Movies"
layout: single
permalink: /movies/
author_profile: true
---

<div class="movie-grid">

{% assign movie_posts = site.posts
  | where_exp: "post", "post.categories contains 'Movies'"
  | sort: "date"
  | reverse
%}

{% for post in movie_posts %}
  <a class="movie-card" href="{{ post.url | relative_url }}">
    <img
      src="{{ post.poster }}"
      alt="{{ post.title }}"
      loading="lazy"
    >
    <div class="movie-title">{{ post.title }}</div>

    {% if post.director %}
      <div class="movie-director">{{ post.director }}</div>
    {% endif %}
  </a>
{% endfor %}

</div>
