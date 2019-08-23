const gulp = require("gulp");
const path = require("path");
const fs = require("fs");

const { srcDir, buildDir, getManifest } = require("../paths");

const writeFile = (template, replaces) => {
  let content = fs.readFileSync(
    path.join(srcDir, `html/${template}.html.template`),
    "utf-8"
  );
  Object.entries(replaces).forEach(([search, replace]) => {
    content = content.replace(`{{ ${search} }}`, replace);
  });
  fs.writeFileSync(`${buildDir}/${template}.html`, content);
};

const writeIndex = entrypoint => writeFile("index", { entrypoint });

gulp.task("gen-entrypoint-dev", done => {
  writeIndex("app.js");
  writeFile("demo_alert_link", { "ce-alert-link": "ce-alert-link.js" });
  done();
});

gulp.task("gen-entrypoint-prod", done => {
  const manifest = getManifest();
  writeIndex(manifest["./src/entrypoints/app.ts"]);
  // Change filename to longer be hashed
  fs.renameSync(
    path.join(buildDir, manifest["./src/entrypoints/ce-alert-link.ts"]),
    path.join(buildDir, "ce-alert-link.js")
  );
  done();
});
