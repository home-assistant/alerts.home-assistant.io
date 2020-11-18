---
title: "TP-Link Remove Local API"
created: 2020-11-18 09:08:00
integrations:
  - tplink
homeassistant: ">0.89"
---

TP-Link's latest firmware for Kasa Smart Home devices closes the port (9999) previously used for local control, rendering Home Assistant unable to communicate with these devices. Please see [this tweet](https://twitter.com/TPLINKUK/status/1328687659133399043) for details from TP-Link, release notes for firmware are not readily published by TP-Link. Please see [this discussion on our community forums](https://community.home-assistant.io/t/tp-link-hs110-smart-plug-disappears-after-latest-firmware-update/244229) for more details.
