---
title: "MyQ integration is failing to autheticate."
created: 2019-10-20 09:00:00
updated: 2019-10-20 09:00:00
integrations:
  - MyQ garage cover
github_issue: https://github.com/home-assistant/home-assistant/issues/27762
homeassistant: ">0.100.3 <0.102"
---

MyQ is forcing all integration to use version 5 of the REST API, causing the integration not to work as expected.

# Workaround

Not known

# Fix

Update pymyq

This issue has been opened: 
https://github.com/home-assistant/home-assistant/issues/27762
https://github.com/arraylabs/pymyq/issues/22
