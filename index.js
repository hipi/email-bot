require("env2")("./.env"); // 环境变量
const getHtmlData = require("./view");
const getAllData = require("./superagent");
const sendMail = require("./email");
const scheduleRun = require("./schedule");
const getAllDataAndSendMail = async () => {
  let apiData = await getAllData();
  let htmlData = await getHtmlData(apiData);
  await sendMail(htmlData);
};

scheduleRun(getAllDataAndSendMail);
