---
title: "Shell command is incompatible with uvloop + stream."
created: 2019-08-18 21:11:03
updated: 2019-08-18 23:11:03
packages:
  - uvloop
integrations:
  - stream
  - shell_command
github_issue: https://github.com/home-assistant/home-assistant/issues/22999
homeassistant: <0.98
---

A bug in uvloop causes the `shell_command` to stop working when the `stream` integration is loaded and Home Assistant uses the uvloop as the asyncio eventloop.

# Workaround

Uninstall uvloop:

```bash
pip3 uninstall uvloop
```

# Fix

Fixed in 0.98 by no longer installing uvloop as the default asyncio loop. If you have a manual installation, please uninstall `uvloop` by following the workaround instructions.
