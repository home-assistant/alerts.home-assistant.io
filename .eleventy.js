const pluginRss = require("@11ty/eleventy-plugin-rss");
const VersionedItem = require("./utils/versioned_item")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(
    { 
      "_headers": "_headers",
      "mobile.json": "mobile.json",
      "static": "static",
    }
  );

  eleventyConfig.addCollection("sortedAlertsByUpdate", (collectionApi) => collectionApi.getFilteredByTag("alert").sort(
      (a1, a2) => 
      (a2.data.updated || a2.data.created).getTime() - 
      (a1.data.updated || a1.data.created).getTime()
    ))
  eleventyConfig.addCollection("sortedAlertsByCreated", (collectionApi) => collectionApi.getFilteredByTag("alert").sort(
    (a1, a2) => a2.data.created.getTime() - a1.data.created.getTime()
  ))

  eleventyConfig.addLiquidFilter("dateToRfc3339", (value) => value ? pluginRss.dateToRfc3339(value) : "");
  eleventyConfig.addFilter("formatGitHubUrl", (value) => {const values = value.split("/"); return `${values[3]}/${values[4]}#${values[6]}`});

  eleventyConfig.addFilter("alertsAsJson", (alerts) => JSON.stringify(
    alerts.map(alert => (
      {
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
        filename: alert.inputPath.replace("./alerts/", ""),
        alert_url: `https://alerts.home-assistant.io${alert.url}`
      }
    )
  )));
  

  return {
      dir: {
        input: ".",
        output: "dist",
        layouts: "layouts",
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid"
      },
    };
}