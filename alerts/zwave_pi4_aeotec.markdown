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

## Workaround

Connect a USB 2.0 hub to the Pi, and the stick into the hub.

Alternatively migrate to using another brand of Z-Wave stick. That would require removing all the devices from the current stick,
and then including them with the new stick.

## Update

Aeotec has released a New version of the ZStick Gen 5 that does work directly connected to the Raspberry Pi 4 USB2/3 ports.
Details can be found here: https://community.home-assistant.io/t/new-aeotec-z-stick-now-available-fixes-rpi-4-direct-usb-connect-issues/214186
which includes a link to purchase the New stick directly. It will take some time for the old sticks to be depleted from retailers.
Also, Aeotecs backup tool can be used to backup and flash the new stick for easy replacement.
