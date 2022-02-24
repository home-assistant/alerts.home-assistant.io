---
title: "Samsung Internet 16.0 and 16.1 block insecure websocket connections"
created: 2022-01-19 0:00:00
integrations:
  - frontend
github_issue: https://github.com/home-assistant/frontend/issues/11332
---

Starting with Samsung Internet v16, insecure websocket connections no longer work. This prevents using the Home Assistant interface if you don't use `https://` to access Home Assistant.

Samsung doesn't have a bug tracker but here are two related discussions:

- [Is there any method to disable “blocking insecure websocket connection” in version 16?](https://forum.developer.samsung.com/t/is-there-any-method-to-disable-blocking-insecure-websocket-connection-in-version-16/17747)
- [Cannot make WebSocket connection without SSL](https://forum.developer.samsung.com/t/cannot-make-websocket-connection-without-ssl/18080)

## Workaround

This is fixed in Samsung Internet 16.2 which is currently available in the beta channel.

Another workaround is to visit Home Assistant over `https://` only or use a different browser.
