---
title: Docker 20.10 not compatible with Supervised installations
created: 2020-12-10 00:00:00
integrations:
  - hassio
github_issue: https://github.com/home-assistant/supervisor/issues/2359
homeassistant: ">0.7"
---

On December 9, 2020 Docker released version 20.10. This version is curerntly not compatible with the Supervisor that is running on a Supervised installation. If you are running our Home Assistant Operating System or Home Assistant Core directly in Docker this alert does **not** apply to you.

There are 2 parts to this issue. The first is the removal of filerting of images over the API, this results in images not beeing recognivced by the Supervisor correctly.

The second issue is changes in how the systemd service for Docker works, which results in the service `hassio-supervisor` not being able to start on system boot.

## Workaround

The only known workaround at this point is downgrading Docker to the previous version. The examples given below is for Debian 10 if that is not your OS, check the documentation for your OS's package manager on how to preform the downgrade.

```bash
apt install docker-ce=5:19.03.14~3-0~debian-buster
apt install docker-ce-cli=5:19.03.14~3-0~debian-buster
apt install containerd.io=1.3.9-1
```

When the downgrade is complete do a system reboot.