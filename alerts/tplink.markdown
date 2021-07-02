---
title: "TP-Link Remove Local API"
created: 2020-11-18 09:08:00
integrations:
  - tplink
homeassistant: ">0.89"
---

## Summary

TP-Link's latest firmware for Kasa Smart Home devices closes the port (9999) previously used for local control, rendering Home Assistant unable to communicate with these devices. Please see [this tweet](https://twitter.com/TPLINKUK/status/1328687659133399043) for details from TP-Link, release notes for firmware are not readily published by TP-Link. Please see [this discussion on our community forums](https://community.home-assistant.io/t/tp-link-hs110-smart-plug-disappears-after-latest-firmware-update/244229) for more details.

## Update 2020/11/23

TP-Link is offering Home Assistant users a custom version of the latest firmware that will allow the local API to continue to work. You will need to raise a support ticket with TP-Link and provide the MAC address of your switch(es). Please see [our blog post](https://www.home-assistant.io/blog/2020/11/23/tplink-local-access/) for more details.

We encourage all affected users to raise a ticket with TP-Link to help them understand the size of their user base using Home Assistant.

## Update 2021/07/01

It has come to our attention that since February 2021 TP-Link has stopped offering users the custom firmware version allowing the local API to continue working. They have confirmed via email to users who tried that they won't be helping any longer. You can read their message on their community forum [here](https://community.tp-link.com/en/smart-home/forum/topic/239364) for the exact information.

If you are considering purchasing these plugs, we would advice you to look at better alternatives.
