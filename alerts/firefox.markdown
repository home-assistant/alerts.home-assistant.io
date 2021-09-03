---
title: "Firefox"
created: 2021-09-03 10:00:00
integrations: []
github_issue: https://github.com/home-assistant/supervisor/issues/3021
---

Firefox 88 and higher introduced an issue with strict privacy checking in combination with add-ons that are using our ingress feature. This is causing users to see an error "401 unauthorized" when opening such panels. The issue is being tracked by Mozilla here: https://bugzilla.mozilla.org/show_bug.cgi?id=1725996

## Workaround

Disable strict privacy checking for your Home Assistant URL.
