---
title: "Home Assistant is blocked by the Rituals API"
created: 2021-03-04T00:50:00+01:00
integrations:
  - rituals_perfume_genie
packages:
  - pyrituals
github_issue: https://github.com/home-assistant/core/issues/47321
homeassistant: ">2021.3.0"
---

Home Assistant is blocked by the Rituals API because some users are making too many requests. This makes it impossible to use the integration.

Sense company is working on a solution so they can throttle your requests instead of blocking all Home Assistant users if you exceed a request limit.
According to Sense company Home Assistant will regain API access in a few days.

**Be patient**. Please **do not try to bypass or use the integration**, we don't want to overload their servers even more. 
