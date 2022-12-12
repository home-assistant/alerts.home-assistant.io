module.exports = class {
    constructor(versionString) {
      const parts = versionString
        .split(" ")
        .map((s) => s.trim())
        // Remove empty strings
        .filter(Boolean);
  
      this.package = parts[0]
  
      for (let rawPrt of parts.slice(1)) {
        const part = rawPrt.replace(/,/, "");
  
        if (part.startsWith(">")) {
          this.affected_from_version = part.substr(1);
          // Backwards compat for change made in July 2022
          this.min = this.package === "homeassistant" ? part.substr(1) : undefined
        } else if (part.startsWith("<")) {
          this.resolved_in_version = part.substr(1);
          // Backwards compat for change made in July 2022
          this.max = this.package === "homeassistant" ? part.substr(1) : undefined
        } else {
          throw new Error(`Error parsing ${this.package}: ${part}`);
        }
      }
    }
  }