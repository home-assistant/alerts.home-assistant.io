const pluginRss = require("@11ty/eleventy-plugin-rss");
const fs = require("fs")
const VersionedItem = require("./utils/versioned_item")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(
    { 
      "_headers": "_headers",
      "alerts/*.md": "alerts",
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
        // 11ty does not yet support .markdown files, homeassistant_alerts expect .markdown so we trick it
        filename: alert.inputPath.replace("./alerts/", "").replace(".md", ".markdown"),
        alert_url: `https://alerts.home-assistant.io${alert.url}`
      }
    )
  )));


    eleventyConfig.on('eleventy.after', async () => {
      // 11ty does not yet support .markdown files, homeassistant_alerts expect .markdown so we trick it
      const basePath = `${__dirname}/dist/alerts`
      fs.readdirSync(basePath).forEach(file => {
        if (file.endsWith(".md")) {
          const filename = file.split(".")[0]
          fs.rename(`${basePath}/${filename}.md`, `${basePath}/${filename}.markdown`, () => {})
        }
      });
    });
  

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