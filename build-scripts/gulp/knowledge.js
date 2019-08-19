const yaml = require("js-yaml");
const gulp = require("gulp");
const path = require("path");
const fs = require("fs");

const { knowledgeDir, buildDir } = require("../paths");

class VersionedItem {
  constructor(versionString) {
    const parts = versionString.split(" ").map(s => s.trim());
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
        console.warning(`Error parsing ${this.package}: ${part}`);
      }
    });
  }
}

function gatherKnowledge() {
  const knowledge = [];

  const files = fs.readdirSync(knowledgeDir);
  for (let i = 0; i < files.length; i++) {
    const content = fs.readFileSync(path.join(knowledgeDir, files[i]), "utf-8");
    const metadataSplit = content.indexOf("---", 1);
    try {
      const metadata = yaml.safeLoad(content.substring(4, metadataSplit));

      metadata.filename = files[i];

      for (const versionKey of ["packages", "integrations"]) {
        if (versionKey in metadata) {
          metadata[versionKey] = metadata[versionKey].map(
            version => new VersionedItem(version)
          );
        }
      }

      knowledge.push(metadata);
    } catch (err) {
      console.error(`Error parsing ${files[i]}: ${err}`);
    }
  }

  return knowledge;
}

gulp.task("gather-knowledge", done => {
  const knowledge = gatherKnowledge();
  fs.writeFileSync(`${buildDir}/data.js`, JSON.stringify(knowledge));
  done();
});
