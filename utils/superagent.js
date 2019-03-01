const superagent = require("superagent");
//请求
function fetch(url, method, params, data, cookies) {
  return new Promise(function(resolve, reject) {
    superagent(method, url)
      .query(params)
      .send(data)
      .set("Content-Type", "application/x-www-form-urlencoded")
      .end(function(err, response) {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
  });
}
module.exports = fetch;
