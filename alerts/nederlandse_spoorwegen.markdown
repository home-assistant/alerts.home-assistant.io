---
title: "Nederlandse Spoorwegen integration no longer works"
created: 2019-10-01 12:00:10
integrations:
  - nederlandse_spoorwegen
github_issue: https://github.com/home-assistant/home-assistant/issues/26622
homeassistant: ">0.57"
---

The NS announced, at the beginning of this year, that they would adjust the API. The NS integration currently only works with the old API, which is no longer available.

The previously used API has been fully decommissioned since October 1, so it no longer works with Home Assistant until the Python library that powers the integration has been updated to work with the new NS API.

A solution [is being worked on](https://github.com/aquatix/ns-api/pull/17), but it's not yet finished.
