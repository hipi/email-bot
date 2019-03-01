const getHtmlData = require("./view");
const getAllData = require("./superagent");
const sendMail = require("./email");
(async () => {
  let apiData = await getAllData();
  let htmlData = await getHtmlData(apiData);
  let res = await sendMail(htmlData);
  console.log(res);
})();
