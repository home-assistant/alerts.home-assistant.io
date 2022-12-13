const pluginRss = require("@11ty/eleventy-plugin-rss");
const fs = require("fs")
const alertAsJson = require("./utils/alert_as_json")

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

  eleventyConfig.addFilter("alertAsJson", (alert) => JSON.stringify(alertAsJson(alert, true)))
  eleventyConfig.addFilter("alertsAsJson", (alerts) => JSON.stringify(alerts.map(alert => alertAsJson(alert, false))));


    eleventyConfig.on('eleventy.after', async () => {
      // 11ty does not yet support .markdown files, homeassistant_alerts expect .markdown so we trick it
      const srcBasePath = `${__dirname}/alerts`
      fs.readdirSync(srcBasePath).forEach(file => {
        if (file.endsWith(".md")) {
          const filename = file.split(".")[0]
          fs.copyFileSync(`${srcBasePath}/${filename}.md`, `${__dirname}/dist/alerts/${filename}.markdown`)
        }
      });
    });
  

  return {
      dir: {
        input: ".",
        output: "dist",
        layouts: "layouts",
      },
      htmlTemplateEngine: "liquid",
      markdownTemplateEngine: "liquid",
    };
}