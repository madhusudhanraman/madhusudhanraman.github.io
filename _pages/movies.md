---
title: "Movies"
layout: single
permalink: /movies/
---

<div class="movie-grid">

{% assign movie_posts = site.categories.movies | sort: "date" | reverse %}

{% for post in movie_posts %}
  <a class="movie-card" href="{{ post.url | relative_url }}">
    <img
      src="{{ post.poster }}"
      alt="{{ post.title }}"
      loading="lazy"
    >
    <div class="movie-title">{{ post.title }}</div>
    {% if post.movie_year %}
      <div class="movie-year">{{ post.movie_year }}</div>
    {% endif %}
  </a>
{% endfor %}

</div>
