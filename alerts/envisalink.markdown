---
title: "Envisalink integration makes DSC physical keypad unavailable"
created: 2022-02-05 06:00:00
integrations:
  - envisalink
homeassistant: "2022.2.0"
---

## Summary

A change in Envisalink's underlying component pyenvisalink ([Cinntax/pyenvisalink#21](https://github.com/Cinntax/pyenvisalink/pull/21)) makes DSC physical keypad unavailable. Do not upgrade, if you already upgraded, downgrade or disable Envisalink integration.

Related bug report:
https://github.com/home-assistant/core/issues/65762
