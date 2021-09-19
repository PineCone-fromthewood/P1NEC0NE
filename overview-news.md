---
layout: overview
lastmod: '2021-09-12T14:27:49.365Z'
title: News
---
{% if site.theme_config.show_projects == true %}
  <!-- <h2>{{ site.theme_config.topic.title_projects }}</h2> -->
  {% include card_list.html collection=site.data.topic.news_entries %}
{% endif %}
