---
title: "Google Home device_tracker and alarm sensor no longer works"
created: 2019-08-18 18:11:03
updated: 2019-08-19 18:56:00
integrations:
  - googlehome
github_issue: https://github.com/home-assistant/home-assistant/issues/24815
homeassistant: <0.98
---

For a couple of weeks/months this integration was broken when Google changed the port they serve this information on, and to require a token header in the request.

# Deprecation

The `googlehome` integration are now deprecated, and a [PR has been created](https://github.com/home-assistant/home-assistant/pull/26035) to remove it from Home Assistant.
