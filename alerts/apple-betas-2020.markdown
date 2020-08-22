---
title: "Latest Apple betas and Home Assistant Frontend"
created: 2020-08-22 11:00:00
integrations:
  - frontend
  - ios
github_issue: https://github.com/home-assistant/frontend/issues/6654
homeassistant: All
---

We are aware of a bug in the latest betas from Apple which prohibits use of controls or buttons in the Home Assistant frontend. Affected betas are iOS 14 beta 5 (18A5351d) and Safari Technology Preview 112 (Safari 14.0, WebKit 15610.1.25.5.1). This issue causes the view to be refreshed when interacting with a control without the control being executed.

The frontend team have determined that the issue lies upstream of Home Assistant and is related to Google's Material Web Components. Further investigation by Google has confirmed that this appears to be a bug in the latest Apple betas, and they have directly raised a report with Apple.

Due to the way iOS works, this will affect all browsers (and our Companion App) on iOS devices. If you only need to log in to view your Home Assistant interface this can be done by using the return button on the keyboard to submit your login credentials. Push notifications and sensors for the Companion App are not affected.

We would be grateful if affected users could raise the feedback with Apple through the Feedback App. You may find the template report below useful:

> In the latest betas, I see a crash when using a MWC control in web view and Safari (new in iOS 14.0b5, 18A5351d) Visit https://mwc-demos.glitch.me/ or https://demo.home-assistant.io/ and tap any button/toggle. Safari and a WKWebView will both have the rendering process crash. The same behaviour is seen in MacOS with the latest Safari Technology Preview 112 (Safari 14.0, WebKit 15610.1.25.5.1). Please see the related WebKit Bugzilla report at: https://bugs.webkit.org/show_bug.cgi?id=215732 for more details of the crash. 

For those wishing to follow this we suggest you follow the active issues on our [frontend](https://github.com/home-assistant/frontend/issues/6654) and [iOS app](https://github.com/home-assistant/iOS/issues/925) repositories and also the [Webkit Bugzilla report](https://bugs.webkit.org/show_bug.cgi?id=215732).
