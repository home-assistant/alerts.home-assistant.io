var path = require("path");

module.exports = {
  srcDir: path.resolve(__dirname, "../src"),
  buildDir: path.resolve(__dirname, "../dist"),
  alertsDir: path.resolve(__dirname, "../alerts"),
  getManifest() {
    return require(path.resolve(__dirname, "../manifest.json"));
  }
};
