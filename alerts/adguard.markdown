---
title: "AdGuard Home v0.99.0 and newer not working with integration"
created: 2019-10-19 09:00:00
updated: 2019-10-19 09:00:00
integrations:
  - adguard
github_issue: https://github.com/home-assistant/home-assistant/issues/27918
homeassistant: ">0.95 <0.102"
---

AdGuard Home v0.99.0 introduced backward breaking API changes, causing the integration not to work as expected.

# Workaround

As a temporary workaround, downgrading to a previous AdGuard version solves the issues.

# Fix

The Adguard Home integration provided by Home Assistant 0.101.0, will address this isssue.
