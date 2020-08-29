---
title: Neato - Vorwerk Vendor 2FA Changes
created: 2020-08-29T06:56:00+02:00
integrations:
  - neato
packages:
  - pybotvac
github_issue: https://github.com/home-assistant/core/issues/39378
homeassistant: All
---

The Neato integration also allows for Vorwerk accounts to connect as they use the same API. Starting in August 2020 Vorwerk started to reach out to its user base about a new app called MyKobold. This app requires the users account to migrate to a new OAUTH model that enforces 2FA. The current integration does not support this so at this time we recommend users hold off on migrating their account to the new app. Vorwerk says the new app will take place in March 2021 so its safe to hold off for now. More details can be found in the linked github issue up top and from this [comment](https://github.com/home-assistant/core/issues/39165#issuecomment-680007713).