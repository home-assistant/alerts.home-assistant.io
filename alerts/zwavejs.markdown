---
title: "Avoid 700 Series Z-Wave Controllers"
created: 2022-01-17 12:00:00
updated: 2022-01-17 12:00:00
integrations:
  - zwave_js
github_issue: https://github.com/zwave-js/node-zwave-js/issues/3906
homeassistant: ">0.59"
---

While 700 series Z-Wave Controllers are supported by Z-Wave JS, the firmware for those devices presently has a bug that can cause the mesh to be flooded on some networks and the controller to become unresponsive. At present, all 700 series controllers share the same firmware and are subject to this bug. Z-Wave JS and several manufacturers have notified Silicon Laboratories and are awaiting resolution.

## Workaround

Users should avoid upgrading to 700 series controllers at this time, if possible. Users that have already upgraded and are experiencing the effects of this bug should consider downgrading to a 500 series controller. This can be done for many controllers by backing up the 700 series controller and restoring the resulting backup to the prior controller, using Zwavejs2mqtt. The 500 series controller must be on Z-Wave SDK 6.61 or higher, so a firmware upgrade maybe required. Zwavejs2mqtt >6.3.0 is also required.

Users who do not have a second, 500 series controller should configure their Z-Wave devices to avoid frequent messages, such as energy monitors that update their values every few seconds. While this does not resolve the issue for all users, many with frequently quiet meshes have been able to avoid the effects of this bug.
