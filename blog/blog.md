---
layout: default
title: blog
permalink: /blog/
---


  <ul class="posts">
    {% for post in site.categories.blog %}
      <li>
        <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>