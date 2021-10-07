---
title: "Ecovacs integration dependency no longer maintained 2020.3.4-12"
created: 2021-10-07 14:00:00
updated: 2021-10-07 14:00:00
integrations:
  - ecovacs
github_issue: https://github.com/home-assistant/core/issues/57282
homeassistant: ">0.77"
---

The Ecovacs integration relies on a dependency (sucks: https://github.com/wpietri/sucks) that is no longer supported by the code maintainer.

## Workaround

There is a custom integration that can be uinstalled as a drop-in replacement. The configuration parameters remain the same, but the dependencies are supported under a new project.

See custom integration here: https://github.com/Ligio/hacc-ozmo