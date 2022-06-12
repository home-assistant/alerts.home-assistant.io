---
title: "Nest Desktop Auth Deprecation"
created: 2022-05-12 14:04:00
integrations:
  - nest
github_issue: https://github.com/home-assistant/core/issues/67662#issuecomment-1144425848
---

The primary authentication method recommended by the Nest Home Assistant integration called *Desktop*, *Installed App* or *OOB* auth was deprecated for new uses on February 28th, 2022 and will be disabled for all users on October 3, 2022. See the [Google Developer blog](https://developers.googleblog.com/2022/02/making-oauth-flows-safer.html#disallowed-oob)
for announcement details.

**Existing must upgrade to *Web Auth* credentials by Ocotober 3, 2022.**

## New Users

New users may sign up using *Web Auth* without issue. Follow the [documentation](https://www.home-assistant.io/integrations/nest/) which has been updated to use *Web Auth* and a *My Home Assistant* redirect URL using Home Assistant `2022.6` or newer.

## Existing Users: App Auth

If you created *App Auth* credentials after Feb 28, 2022 and your integration is currently broken, then follow the workaround instructions to move to *Web Auth* in the [github issue](https://github.com/home-assistant/core/issues/67662#issuecomment-1144425848).

For everyone else, a future version of Home Assistant will walk you through the steps to create new *Web Auth* credentials and upgrade your integration. You will need to upgrade before October to avoid interruption.

## Existing Users: Web Auth

Users who signed up using *Web Auth* are not affected by the App Auth deprecation. However, as of 2022.06 the *My Home Assistant* URL is now the default redirect URL and may need to be updated in the Google Cloud Console to avoid a `redirect_uri_mismatch` ([more info](https://www.home-assistant.io/integrations/nest/#troubleshooting)).

# Background

The OAuth out-of-band flow was designed to support native applications that cannot support a redirect URI like a Web application, which was convenient for Home Assistant since it is difficult for end Home Assistant users to set up SSL certificates and DNS needed for a secure Web endpoint. However, Google has deprecated the OOB flow as it introduces a phishing risk.  New users are no longer allowed to create new Desktop auth credentials and existing users will no longer work starting October 3, 2022.

As of `2022.6` the *Web Auth* OAuth2 flow uses the *My Home Assistant* redirect URL which handles SSL. This is what allows new signups for *Web Auth* as the new recommended approach.
