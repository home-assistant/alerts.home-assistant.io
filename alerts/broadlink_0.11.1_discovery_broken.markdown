---
title: "Broadlink >= 0.11 breaks discovery"
created: 2019-08-29 18:20:03
integrations:
  - broadlink
github_issue: https://github.com/home-assistant/home-assistant/issues/26657
homeassistant: ""
---

If you have a Broadlink RM Mini 3 and you reset the device, you won't be able to add it again to Home Assistant. 
HA log says "Failed to connect to device" and you won't be able to learn/send IR packets to any device. 

# Fix

This can be worked around by downgrading broadlink python library to 0.10, for example using "custom deps" addon as described here:
https://community.home-assistant.io/t/custom-deps-deployment-addon-what-does-it-do/55680/7

Put this json in addon Config:
`
{
  "pypi": [
    "broadlink==0.10"
  ],
  "apk": []
}
` 

