const VersionedItem = require("./versioned_item")

module.exports = function(alert, extended) {
    const contents  = {
        id: alert.fileSlug,
        title: alert.data.title,
        created: alert.data.created,
        updated: alert.data.updated,
        integrations: alert.data.integrations?.map(integration => new VersionedItem(integration)),
        packages: alert.data.packages?.map(package => new VersionedItem(package)),
        homeassistant: !alert.data.homeassistant ? undefined : new VersionedItem(
          `homeassistant ${alert.data.homeassistant}`
        ),
        supervisor: !alert.data.supervisor ? undefined : new VersionedItem(
          `supervisor ${alert.data.supervisor}`
        ),
        // 11ty does not yet support .markdown files, homeassistant_alerts expect .markdown so we trick it
        filename: alert.inputPath.replace("./alerts/", "").replace(".md", ".markdown"),
        alert_url: `https://alerts.home-assistant.io${alert.url}`
      }
    if (extended) {
        contents["tags"] = alert.data.tags
        contents["content"] = alert.template.frontMatter.content
    }
    return contents
  }