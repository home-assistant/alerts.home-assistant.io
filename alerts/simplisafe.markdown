---
title: "SimpliSafe cloud API experiencing sporadic impact"
created: 2021-04-28 18:00:00
integrations:
  - yeelight
homeassistant: ">2021.4.0"
---

## Summary

For some months, the unpublished SimpliSafe cloud API has been experencing sporadic service impact, resulting in:

* Delayed changes to the alarm state
* Re-authentication of the SimpliSafe integration in Home Assistant
* Missing or delayed `SIMPLISAFE_EVENT` and `SIMPLISAFE_NOTIFICATION` events

Although we are making the integration as resilient as possible, these issues are arising from within the SimpliSafe cloud itself, meaning we have a limited ability to fix these issues directly. We are continuing to monitor the situation and will make every effort to improve the integration where possible.
