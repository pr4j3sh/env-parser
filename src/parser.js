const { readFileSync } = require("node:fs");

class Parser {
  constructor() {
    this.data = "";
    this.lines = [];
    this.json = {};
  }

  parse() {
    this.lines = this.data
      .split("\n")
      .filter((l) => l !== "" && !l.startsWith("#"));
    return this;
  }

  input(data) {
    this.data = data;
    return this;
  }

  fileInput(path) {
    this.data = readFileSync(path).toString();
    return this;
  }

  toJson() {
    this.lines.forEach((l) => {
      let [key, ...value] = l.split("=");
      this.json[key.trim()] = value.join("=").trim();
    });
    return this.json;
  }
}

module.exports = { Parser };
