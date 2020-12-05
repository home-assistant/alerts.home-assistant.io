---
title: Tasmota devices stop responding after 25 days uptime
created: 2020-12-05 12:00:00
integrations:
  - tasmota
packages:
  - hatasmota
github_issue: https://github.com/arendst/Tasmota/pull/9995
homeassistant: ">0.118"
---

There is a known issue where Tasmota devices need to be rebooted after 25 days.

This is fixed by https://github.com/arendst/Tasmota/pull/9995, which will be included in upcoming Tasmota version 9.2.
