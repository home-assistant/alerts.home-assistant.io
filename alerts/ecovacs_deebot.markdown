---
title: "Ecovacs Deebot ping/control issues and abandonware api"
created: 2020-10-22 13:00:00
integrations:
  - ecovacs
github_issue: https://github.com/home-assistant/core/issues/38625
homeassistant: ">0.49"
---

Ecovacs integration is supported by [sucks api](https://github.com/wpietri/sucks) which is now considered abandonware until someone else supports the project. There is an ongoing issue with connecting to, and being controlled by, Home Assistant. (See issue [#38625](https://github.com/home-assistant/core/issues/38625)).

If connection is lost, re-connecting to your device through the Ecovacs mobile app may restore connection to Home Assistant.
