const yaml = require("js-yaml");
const gulp = require("gulp");
const path = require("path");
const fs = require("fs");

const { srcDir, buildDir, getManifest } = require("../paths");

const writeIndex = entrypoint => {
  let content = fs.readFileSync(
    path.join(srcDir, "html/index.html.template"),
    "utf-8"
  );
  content = content.replace("{{ entrypoint }}", entrypoint);
  fs.writeFileSync(`${buildDir}/index.html`, content);
};

gulp.task("gen-entrypoint-dev", done => {
  writeIndex("entrypoint.js");
  done();
});

gulp.task("gen-entrypoint-prod", done => {
  const manifest = getManifest();
  writeIndex(manifest["./src/entrypoint.ts"]);
  done();
});
