---
title: "TP-Link Remove Local API"
created: 2020-11-18 09:08:00
integrations:
  - tplink
homeassistant: ">0.89"
---

## Summary

TP-Link recently removed the need for certain Kasa Smart Home devices (e.g. HS100, HS110) to be connected to their cloud and allows them to be only local controlled.

Previously this warning advised not to "purchase these plugs, [...] [and] look at better and local alternatives" because they removed the local control feature with a firmware update - this is no longer the case, as the local control is now available again.

Detailed steps how to set them up for local-only control is available [here](https://www.tp-link.com/us/support/faq/2707/).

## Update 2020-11-23

TP-Link is offering Home Assistant users a custom version of the latest firmware that will allow the local API to continue to work. You will need to raise a support ticket with TP-Link and provide the MAC address of your switch(es). Please see [our blog post](https://www.home-assistant.io/blog/2020/11/23/tplink-local-access/) for more details.

We encourage all affected users to raise a ticket with TP-Link to help them understand the size of their user base using Home Assistant.

## Update 2021-07-01

It has come to our attention that since February 2021 TP-Link has stopped offering users the custom firmware version allowing the local API to continue working. They have confirmed via email to users who tried that they won't be helping any longer. You can read their message on their community forum [here](https://community.tp-link.com/en/smart-home/forum/topic/239364) for the exact information.

If you are considering purchasing these plugs, we would advise you to look at better and local alternatives.

## Update 2022-04-25

TP-Link stepped up and made a lot of their devices able to be controlled locally again. They also no longer require to have any cloud setup or connection to be functional.

They started to offer an [FAQ](https://www.tp-link.com/us/support/faq/2707/) how to set them up for local-only control on their website.
