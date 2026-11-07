---
title: Legacy Fitbit Web API has been shut down
created: 2026-11-07 21:00:00
integrations:
  - fitbit
github_issue: https://github.com/home-assistant/core/issues/190247
---

On November 2, 2026, Google permanently shut down the legacy Fitbit Web API and its OAuth endpoints following the end of developer support on September 30, 2026. Requests to the legacy Fitbit API now fail with `410 Gone`, so your Fitbit sensors will no longer update and re-authentication will not succeed. See Google's [Fitbit Web API Migration Guide](https://developers.google.com/health/migration) for details.

Because legacy Fitbit OAuth credentials and tokens do not carry over to the new API, automatic migration is not possible.

To continue accessing your Fitbit data in Home Assistant:

1. Set up the [Google Health integration](https://www.home-assistant.io/integrations/google_health/), which replaces the Fitbit integration using the Google Health API.
2. Remove your existing Fitbit integration entries in **Settings** > **Devices & services**, and optionally remove any unused Fitbit OAuth credentials from **Application credentials**.
