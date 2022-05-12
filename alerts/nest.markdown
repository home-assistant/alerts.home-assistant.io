---
title: "Nest Desktop Auth Deprecation"
created: 2022-05-12 14:04:00
integrations:
  - nest
github_issue: https://github.com/home-assistant/core/issues/67662#issuecomment-1079977875
---

The primary authentication method recommended by the Nest Home Assistant integration called "Desktop", "Installed App" or "OOB" auth has been [deprecated](https://developers.googleblog.com/2022/02/making-oauth-flows-safer.html#disallowed-oob).

See the [github issue](https://github.com/home-assistant/core/issues/67662#issuecomment-1079977875) for details on temporary workarounds and the longer term solution.

# Background

The OAuth out-of-band flow was designed to support native applications that cannot support a redirect URI like a Web application, which was convenient for Home Assistant since it is difficult for end Home Assistant users to set up SSL certificates and DNS needed for a secure Web endpoint. However, Google has deprecated the OOB flow as it introduces a phishing risk.  New users are no longer allowed to create new Desktop auth credentials and existing users will no longer work starting October 3, 2022.
