---
title: Coinmarketcap public API deprecated
created: 2020-08-19T06:56:00+02:00
integrations:
  - coinmarketcap
github_issue: https://github.com/home-assistant/core/issues/32551
homeassistant: ">0.106.3"
---

Since March 5th Coinmarketcap deprecated their legacy Public API in favor of their new "Professional API". 
This breaks the current Coinmarketcap integration which still seems to rely on this legacy API for it's data. 
More details can be found [here](https://pro.coinmarketcap.com/migrate).

Coinmarketcap moving towards the Professional API seems like it is no longer Publicly available but they actually have a Basic tier for their new API that allows for personal use and is actually suited for new HA data binding.
