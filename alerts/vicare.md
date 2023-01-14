---
title: "Viessmann API change. Changing hvac modes on E3 devices not working"
created: 2022-01-14 16:38:00
integrations:
  - vicare
homeassistant: ">0.30"
---

## Summary

Setting hvac modes or using the `set_vicare_mode` is broken due to a [Viessmann API change](https://documentation.viessmann.com/static/changelog). For more information see the [HA Core Github issue](https://github.com/home-assistant/core/issues/85786)
