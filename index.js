require("env2")("./.env"); // 环境变量
const nodemailer = require("nodemailer"); //发送邮件的node插件
const { EmailToArr, EmianService, EamilAuth } = require("./config");
const getAllData = require("./superagent");
const getHtmlData = require("./view");
const sendMail = require("./email");
const scheduleRun = require("./schedule");

let transporter = nodemailer.createTransport({
  service: EmianService,
  port: 465,
  secureConnection: true,
  auth: EamilAuth,
  pool: true
});
const getAllDataAndSendMail = async () => {
  for (let i = 0, len = EmailToArr.length; i < len; i++) {
    try {
      let item = EmailToArr[i];
      let apiData = await getAllData(item.CITY, item.LOCATION);      
      let htmlData = await getHtmlData(apiData);
      await sendMail(transporter, item.TO, htmlData);
    } catch (error) {
      console.error(error);
    }
  }
};
// test
// getAllDataAndSendMail()
// 定时
scheduleRun(getAllDataAndSendMail);
