---
title: "BMW Connected Drive API (china) unavailable, other regions restored"
created: 2021-07-15 14:40:00
integrations:
  - bmw_connected_drive
github_issue: https://github.com/home-assistant/core/issues/53977
homeassistant: ">0.64.0"
---

BMW has shut down the old API (`Connected Drive app`) to force people to migrate to their new API (`My BMW app`).

Work is underway to migrate to the new API but this has not been finished yet 
(see [bimmerconnected/bimmer_connected#299](https://github.com/bimmerconnected/bimmer_connected/discussions/299)).

## Updates
| HA version | `rest_of_world` | `north_america` | `china` |
|------------|-----------------|-----------------|---------|
| `>=2021.8.5` | sensors are working again, remote services still broken | sensors are working again, remote services still broken | currently not available |
