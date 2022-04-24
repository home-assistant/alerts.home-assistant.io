---
title: "Upgrade 700 Series Z-Wave Controllers to fw >=7.17.2"
created: 2022-01-17 12:00:00
updated: 2022-03-24 12:00:00
integrations:
  - zwave_js
github_issue: https://github.com/zwave-js/node-zwave-js/issues/3906
homeassistant: ">2021.2"
---

Until recently, 700 series Z-Wave Controllers had a bug that could cause the mesh to be flooded on some networks and the controller to become unresponsive. At present, all 700 series controllers share the same firmware and are subject to this bug. It appears that this bug is largely, if not completely, resolved as of firmware version 7.17.2.

## Fix Available
Users should upgrade the firmware on all 700 series controllers to version 7.17.2 or greater. Firmware can be upgraded using the below directions:

Via Linux: https://github.com/kpine/zwave-js-server-docker/wiki/700-series-Controller-Firmware-Updates-(Linux)

Via Windows:
- Aeotec - https://help.aeotec.com/support/solutions/articles/6000252296-update-z-stick-7-with-windows
- Zooz - https://www.support.getzooz.com/kb/article/931-how-to-perform-an-ota-firmware-update-on-your-zst10-700-z-wave-stick/
