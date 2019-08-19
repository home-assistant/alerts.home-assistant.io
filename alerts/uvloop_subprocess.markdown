---
title: "Stream integration incompatible with X"
created: 2019-08-18 21:11:03
updated: 2019-08-18 23:11:03
packages:
  - uvloop >0.1
integrations:
  - stream >0.32 <0.60
  - ffmpeg >0.54
github_issue: https://github.com/home-assistant/home-assistant/issues/22999
homeassistant:
---

_This is demo content._

There is a known issue with `uvloop` and the stream integration.

# Workaround

Uninstall uvloop:

```bash
pip3 uninstall uvloop
```
