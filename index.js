require("env2")("./.env"); // 环境变量
const { EmailToArr } = require("./config");
const getAllData = require("./superagent");
const getHtmlData = require("./view");
const sendMail = require("./email");
const scheduleRun = require("./schedule");

const getAllDataAndSendMail = async () => {
  for (let i = 0, len = EmailToArr.length; i < len; i++) {
    let item = EmailToArr[i];
    let apiData = await getAllData(item.CITY, item.LOCATION);
    let htmlData = await getHtmlData(apiData);
    await sendMail(item.TO, htmlData);
  }
};

// 定时
scheduleRun(getAllDataAndSendMail);
