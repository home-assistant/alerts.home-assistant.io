---
title: iCloud causes Apple ID sign-in notifications every 30 min
created: 2020-09-10 12:00:00
integrations:
  - icloud
packages:
  - pyicloud
github_issue: https://github.com/home-assistant/core/issues/41315
homeassistant: ">0.10"
---

Since Oct 9, 2020 the iCloud integration prompts a sign-in notification every 30 min. It is not compulsory to respond to the notification, the integration is still working during this time.

A fix will be proposed to avoid this issue but we don't know when yet.
