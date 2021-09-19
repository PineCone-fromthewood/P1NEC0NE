---
layout: overview
lastmod: '2021-09-13T18:53:03.964Z'
title: Misc.
---



{% if site.theme_config.show_projects == true %}
  <!-- <h2>{{ site.theme_config.topic.title_projects }}</h2> -->
  {% include card_list.html collection=site.data.topic.miscellaneous_entries %}
{% endif %}
