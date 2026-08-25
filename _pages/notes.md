---
title: Notes
layout: single
permalink: /notes/
author_profile: true
---

## Collections

* * *

#### [Physics](/physics/)

On various aspects of theoretical and mathematical physics.

#### [Philosophy](/philosophy/)

Mostly on the philosophy of science.

#### [Books](/books/)

Some books I've read recently.

#### [Movies](/movies/)

Some films I've watched recently.

## All Notes

* * *

{% assign notes_by_month = site.posts | group_by_exp: "post", "post.date | date: '%Y-%m'" %}

<div class="notes-month-tabs" role="tablist" aria-label="Notes by month">

  {% for month in notes_by_month %}
    {% assign month_label = month.name | append: "-01" | date: "%B %Y" %}

    <button
      class="notes-month-tab"
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="notes-month-{{ month.name }}"
      id="notes-tab-{{ month.name }}"
      data-month="{{ month.name }}">
      {{ month_label }}
      <span class="notes-month-count">{{ month.items.size }}</span>
    </button>
  {% endfor %}

</div>

<div class="notes-month-panels">

  {% for month in notes_by_month %}

    <section
      class="notes-month-panel"
      id="notes-month-{{ month.name }}"
      role="tabpanel"
      aria-labelledby="notes-tab-{{ month.name }}"
      data-month="{{ month.name }}"
      hidden>

      <div class="notes-grid">

        {% for post in month.items %}

          <article class="notes-card">

            <h3 class="notes-card__title">
              <a href="{{ post.url | relative_url }}">
                {{ post.title }}
              </a>
            </h3>

            {% if post.excerpt %}
              <div class="notes-card__excerpt">
                {{ post.excerpt }}
              </div>
            {% endif %}

          </article>

        {% endfor %}

      </div>

    </section>

  {% endfor %}

</div>
