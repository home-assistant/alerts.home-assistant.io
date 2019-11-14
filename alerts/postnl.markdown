---
title: "PostNL integration no longer works"
created: 2019-11-08 12:00:00
integrations:
  - postnl
github_issue: https://github.com/home-assistant/home-assistant/issues/28726
homeassistant: ">0.0"
---

PostNL has changed their authentication API to now require an User-Agent.

## Fix
A fix is currently being worked on but requires an update to the library. As soon as the library is updated, the component in HA can be updated.
Please see the related Github issue to track progress.

## Work around
A work around can be found here: https://community.home-assistant.io/t/lovelace-postnl/112433/218
