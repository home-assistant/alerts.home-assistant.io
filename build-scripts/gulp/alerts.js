const yaml = require("js-yaml");
const gulp = require("gulp");
const path = require("path");
const fs = require("fs");
const jsonfeedToAtom = require("jsonfeed-to-atom");
const { marked } = require("marked");
const xss = require("xss");

const { alertsDir, buildDir } = require("../paths");

class VersionedItem {
  constructor(versionString) {
    const parts = versionString
      .split(" ")
      .map((s) => s.trim())
      // Remove empty strings
      .filter(Boolean);
    parts.forEach((part, index) => {
      if (index === 0) {
        this.package = part;
        return;
      }

      part = part.replace(/,/, "");

      if (part[0] === ">") {
        this.min = part.substr(1);
      } else if (part[0] === "<") {
        this.max = part.substr(1);
      } else {
        throw new Error(`Error parsing ${this.package}: ${part}`);
      }
    });
  }
}

function gatherAlertsMetadata() {
  const alerts = [];

  const files = fs.readdirSync(alertsDir);
  for (let i = 0; i < files.length; i++) {
    const content = fs.readFileSync(path.join(alertsDir, files[i]), "utf-8");
    const metadataSplit = content.indexOf("---", 1);
    try {
      const metadata = yaml.load(content.substring(4, metadataSplit));

      metadata.filename = files[i];
      metadata.alert_url = `https://alerts.home-assistant.io/#${files[i]}`;

      metadata.homeassistant = new VersionedItem(
        `homeassistant ${metadata.homeassistant || ""}`
      );

      for (const versionKey of ["packages", "integrations"]) {
        if (versionKey in metadata) {
          metadata[versionKey] = metadata[versionKey].map(
            (version) => new VersionedItem(version)
          );
        }
      }

      alerts.push(metadata);
    } catch (err) {
      console.error(`Error parsing ${files[i]}: ${err}`);
      throw err;
    }
  }

  return alerts;
}

gulp.task("gather-alerts", (done) => {
  const alerts = gatherAlertsMetadata();
  fs.writeFileSync(`${buildDir}/alerts.json`, JSON.stringify(alerts));
  done();
});

gulp.task("create-feeds", (done) => {
  const alerts = gatherAlertsMetadata();
  const jsonfeed = {
    version: "https://jsonfeed.org/version/1",
    title: "Home Assistant - Alerts",
    home_page_url: "https://alerts.home-assistant.io",
    feed_url: "https://alerts.home-assistant.io/feed.xml",
    description: "Alerts for breaking integrations of Home Assistant.",
    icon: "https://alerts.home-assistant.io/images/favicon.png",
  };
  jsonfeed.items = alerts
    .map((alert) => {
      const text = fs.readFileSync(
        path.join(alertsDir, alert.filename),
        "utf-8"
      );
      return {
        title: alert.title,
        date_published: alert.created ? alert.created.toISOString() : undefined,
        date_updated: alert.updated ? alert.updated.toISOString() : undefined,
        url: alert.alert_url,
        id: alert.filename,
        content_html: xss(
          marked(
            // Strip out the metadata
            text.substr(text.indexOf("---", 1) + 4),
            {
              breaks: true,
              gfm: true,
              tables: true,
            }
          )
        ),
      };
    })
    .sort((a, b) => {
      if (a.date_published > b.date_published) {
        return -1;
      }
      if (a.date_published < b.date_published) {
        return 1;
      }
      return 0;
    });
  fs.writeFileSync(`${buildDir}/feed.xml`, jsonfeedToAtom(jsonfeed));
  done();
});
