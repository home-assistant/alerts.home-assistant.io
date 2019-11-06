---
title: "Xiaomi BLE Temperature and Humidity sensor bluetooth issue"
created: 2019-11-06 12:00:00
updated: 2019-11-06 12:00:00
integrations:
  - mitemp_bt
github_issue: https://github.com/home-assistant/home-assistant/issues/24313
homeassistant: ">0.94"
---

Since Home-assistant 0.94 the Xiaomi BLE sensor works for some time and stops with the following error :
`[homeassistant.components.mitemp_bt.sensor] Polling error [Errno 32] Broken pipe` 

The sensor works again after a restart of Home Assistant. The working time of the sensor is not constitent.

# Workaround

Using [esphome](https://esphome.io/components/sensor/xiaomi_lywsdcgq.html) is a workaround to move the bluetooth communication to an ESP device.
