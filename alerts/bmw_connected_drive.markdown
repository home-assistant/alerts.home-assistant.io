---
title: "BMW Connected Drive API partly unavailable"
created: 2021-07-15 14:40:00
integrations:
  - bmw_connected_drive
github_issue: https://github.com/home-assistant/core/issues/53977
homeassistant: ">0.64.0"
---

BMW has shut down the old API (`Connected Drive app`) to force people to migrate to their new API (`My BMW app`).

Work is underway to migrate to the new API but this has not been finished yet 
(see [bimmerconnected/bimmer_connected#299](https://github.com/bimmerconnected/bimmer_connected/discussions/299)).

Please the the following table on what is working (based on your reports):

### Updates
| HA version | `rest_of_world` | `north_america` | `china` |
| :-: | :-: | :-: | :-: |
| `<2021.8.4` | ❌ | ❌ | ✔ |
| `>=2021.8.5` | sensors ✔ <br /> remote services ❌ | sensors ✔ <br /> remote services ❌ | ❌ |
| `>=2021.8.8` | ✔ | ✔ | ❌ |
