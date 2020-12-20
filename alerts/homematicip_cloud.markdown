---
title: HomematicIP (EQ-3) blocks public IP addresses, if access to the Cloud is too frequent.
created: 2020-12-20 12:00:00
integrations:
  - homematicip_cloud
packages:
  - homematicip
homeassistant: ">0.7"
---

Since Dec 1, 2020 HomematicIP (EQ-3) has started to **block public IP addresses** of Home Assistant installations if they access the Homematic IP Cloud **too often**. In this case, the Homematic IP Cloud can only be reached from a cellular network. 
Further plans to completely block the non-partner apps from the Homematic IP Cloud cannot be ruled out.

Official partners such as Mediola and Smartha are still permitted.
The same issue has also been reported for other smarthome platform like ioBroker, which use different code to access the Homematic IP Cloud.

The Homematic IP Cloud Integration is based on the cloud push principle, by which status updates are transmitted from the cloud to the local installation as an event, so this should not be the problem.

Reducing calls to the cloud might help not to be blocked.
The following activities in Home-Assistant make calls to the cloud (not complete):
- switch/dim light or power plug
- set target temperature or the active profile on a thermostat
- activate Eco/Vacation Mode
- activate/deactivate alarm

## Alternate Integration

The [Homematic Integration](https://www.home-assistant.io/integrations/homematic/), which uses a local CCU or RaspberryMatic, is the recommended alternative that doesn’t require the Homematic IP Cloud.



