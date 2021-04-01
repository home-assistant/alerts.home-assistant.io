---
title: "Yeelight-manufactured Xiaomi-branded devices removed Local Control"
created: 2021-03-29 06:00:00
integrations:
  - yeelight
homeassistant: ">0.89"
---

## Summary

Yeelight's latest firmware disables local control of any Yeelight-manufactured, Xiaomi-branded devices at the request of Xiaomi as it's a "risk", rendering Home Assistant unable to communicate with these devices. Please see [this summary of the issue](https://github.com/home-assistant/core/issues/46997#issuecomment-809927764) for more information. Please see [this discussion on our community forums](https://community.home-assistant.io/t/hacking-yeelight-fw-enabling-lan-control/284406) for a possible alternative solution of installing ESPHome onto your device to allow local control permanently.
