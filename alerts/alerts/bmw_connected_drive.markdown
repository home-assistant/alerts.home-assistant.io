---
title: "BMW API change"
created: 2021-11-31 10:56:00
integrations:
  - bmw_connected_drive
packages:
  - bimmer_connected
github_issue: https://github.com/home-assistant/core/issues/53977
homeassistant: ">0.64.0"
---

BMW has shut down parts old API (`Connected Drive app`) to force people to migrate to their new API (`My BMW app`).
This doesn't apply to all regions, please see the most updated information below.

Work is underway to migrate to the new API but this has not been finished yet 
(see [bimmerconnected/bimmer_connected#327](https://github.com/bimmerconnected/bimmer_connected/discussions/327)).

### Current status
* `rest_of_world`: :x: not working
* `north_america`: :x: not working
* `china`: ✔️ working 
