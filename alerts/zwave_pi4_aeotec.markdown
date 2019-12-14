---
title: "Aeotec Z-Wave stick incompatible with the Raspberry Pi 4"
created: 2019-08-29 18:20:03
integrations:
  - zwave
github_issue: https://github.com/home-assistant/home-assistant/issues/26270
homeassistant: ">0.0"
---

There's a [known incompatibility](https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=245031#p1502030) between the Aeotec
Z-Wave stick and the Raspberry Pi4 that causes the stick not to be detected.

# Fix

This can be worked around by connecting a USB 2.0 hub into the Pi, and the stick into the hub.

Alternatively migrate to using another brand of Z-Wave stick. That would require removing all the devices from the current stick,
and then including them with the new stick.
