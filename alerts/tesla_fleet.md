---
title: Tesla Fleet built-in credential is being disabled
created: 2025-01-30 12:00:00
integrations:
  - tesla_fleet
homeassistant: "<2025.1"
---

On Febuary 1st 2025, Tesla is starting it's pay-per-use billing of the Tesla Fleet API, which impacts the client ID that was built into the Tesla Fleet integration before 2025.1.

Tesla has disabled this client ID, so all users of the Tesla Fleet integration need to upgrade to 2025.1 or later, and follow the [documentation](https://www.home-assistant.io/integrations/tesla_fleet/#configuration) configuration steps to setup a new developer application.

If you are unable to setup your own developer application, Home Assistant has other paid integrations for working with Tesla:
- [Teslemetry](https://www.home-assistant.io/integrations/teslemetry)
- [Tessie](https://www.home-assistant.io/integrations/tessie)
