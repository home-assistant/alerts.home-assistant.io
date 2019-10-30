---
title: "MyQ Covers Broken in 0.100.3"
created: 2019-10-29 15:52:00
updated: 2019-10-30 08:32:00
integrations:
  - myq
github_issue: https://github.com/home-assistant/home-assistant/issues/28337
homeassistant: "<=0.100.3"
---

MyQ has changed something in their private API, which has broken the integration.

# Workaround

The current workaround is to edit the copy of pymyq being used by Home Assistant and remove the `User Agent` header from all API calls. Commentary on how to do this for various architectures can be found here: https://github.com/arraylabs/pymyq/issues/27

# Fix

A PR that fixes the issue has been submitted for 0.101.0.
