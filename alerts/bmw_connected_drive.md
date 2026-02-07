---
title: BMW APIs blocked
created: 2025-10-03 20:00:00
integrations:
  - bmw_connected_drive
homeassistant: ">2024.1.0"
---

On September 29, 2025, the BMW has blocked third parties (i.e. the BMW Connected Drive integration) from executing requests against BMW servers.
BMW enforced additional security checks within the MyBMW app to block third parties (not only Home Assistant, but also other companies such as energy providers).

You will see error messages asking you to log in again without any success, and your sensors will not update anymore.

More information about the new API change [here](https://github.com/home-assistant/core/issues/149750).
Technical information on what is happening [here](https://github.com/home-assistant/core/issues/152646#issuecomment-3356106193).

Through the BMW CarData Service official API and Streaming Data is available: [here](https://bmw-cardata.bmwgroup.com/thirdparty/public/home).
The HACS Integration "BMW CarData for Home Assistant" uses the Streaming Data [here](https://github.com/kvanbiesen/bmw-cardata-ha).
BMW-CarData-REST-API-Streaming is a project which allows connection via the API and Stream - however not integrated into Home Assistant [here](https://github.com/tabsl/BMW-CarData-REST-API-Streaming).

