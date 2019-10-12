---
title: "Nederlandse Spoorwegen integration no longer works duo NS API"
created: 2019-10-01 12:00:10
integrations:
  - nederlandse_spoorwegen
github_issue: https://github.com/home-assistant/home-assistant/issues/26622
homeassistant: ">0.57"
---

NS announced at the beginning of this year that they would adjust the available API. The current integration only worked with the old API.

The API has been fully deprecated since October 1, so it no longer works in Home Assistant until the python lib has been updated to work with the new NS API. [Work is being done](https://github.com/aquatix/ns-api/pull/17) on a solution, but it's not yet finished and merged.
