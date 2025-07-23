---
title: Tesla Fleet Authentication Endpoint
created: 2024-07-23 00:00:00
integrations:
  - tesla_fleet
homeassistant: "<2025.7.4"
---

Tesla has announced that the original Tesla Fleet API OAuth endpoint is being rate limited starting August 1st, 2025.

Home Assistant has been updated to use the new OAuth endpoint in 2025.7.4, however all previous versions of Home Assistant will be subject to authentication rate limits, which _may_ cause authentication issues after August 1st, 2025.

> Fleet API Partner,
>
> Our logs show that your integration is still using https://auth.tesla.com/ for token exchange. As part of our ongoing improvements, we introduced a domain dedicated to Fleet API token exchange with increased rate limits and reliability: https://fleet-auth.prd.vn.cloud.tesla.com/. Please migrate to this domain in the next few weeks to avoid being rate limited.
>
> Action required - Update the domain used for calls to /token endpoints by August 1st, 2025.
>
> No other changes are required - This is a host-only update for token acquisition. Credentials, Fleet API domains, existing authorizations, endpoints, streaming configurations all remain unchanged.
