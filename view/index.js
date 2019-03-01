const nunjucks = require("nunjucks");
const fs = require("fs");
const path = require("path");

const getHtmlData = njkData => {
  return new Promise((resolve, reject) => {
    try {
      const njkString = fs.readFileSync(
        path.resolve(__dirname, "index.njk"),
        "utf8"
      );
      const htmlData = nunjucks.renderString(njkString, njkData);
      resolve(htmlData);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = getHtmlData;
