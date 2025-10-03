---
title: BMW APIs blocked
created: 2025-10-03 20:00:00
integrations:
  - bmw_connected_drive
homeassistant: "all"
---

On September 29, 2025, BMW enforced additional security checks within the MyBMW app to block third parties (i.e. Home Assistant, but also other companies such as energy providers).
Currently no final solution is available, however a custom integration using the read-only CarData API has been created (EU only).

More information about the new API change [here](https://github.com/home-assistant/core/issues/149750).
Technical information on what is happening [here](https://github.com/home-assistant/core/issues/152646#issuecomment-3356106193).
