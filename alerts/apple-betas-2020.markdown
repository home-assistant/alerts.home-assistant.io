---
title: "Latest Apple betas and Home Assistant Frontend"
created: 2020-08-22 11:00:00
integrations:
  - frontend
  - ios
  - mobile_app
github_issue: https://github.com/home-assistant/frontend/issues/6654
homeassistant: ">0.7"
---

We are aware of a bug in the latest betas from Apple which prohibits the use of controls or buttons in the Home Assistant frontend. Affected betas are iOS 14 beta 5 (18A5351d) and Safari Technology Preview 112 (Safari 14.0, WebKit 15610.1.25.5.1). This issue causes the view to be refreshed when interacting with a control without the control being executed.

The frontend team has determined that the issue lies upstream of Home Assistant and is related to Google's Material Web Components. Further investigation by Google has confirmed that this appears to be a bug in the latest Apple betas, and they have directly raised a report with Apple.

Due to the way iOS works, this will affect all browsers (and our Companion App) on iOS devices. If you only need to log in to view your Home Assistant interface this can be done by using the return button on the keyboard to submit your login credentials. Push notifications and sensors for the Companion App are not affected.

For those wishing to follow this we suggest you follow the active issues on our [frontend](https://github.com/home-assistant/frontend/issues/6654) and [iOS app](https://github.com/home-assistant/iOS/issues/925) repositories and also the [Webkit Bugzilla report](https://bugs.webkit.org/show_bug.cgi?id=215622).

**Update 2020-08-26**: The underlying issue in WebKit has been resolved. This is included in iOS 14 beta 6 (18A5357e) which has now been released as a public beta. This alert will be closed when we confirm the next macOS Big Sur beta and Safari Technology Preview build also contains the fix.
