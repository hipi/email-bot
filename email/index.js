const nodemailer = require("nodemailer"); //发送邮件的node插件
const config = require("./../config");
const sendMail = (To, HtmlData) => {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: config.EmianService,
      port: 465,
      secureConnection: true,
      auth: config.EamilAuth,
      pool: true
    });

    let mailOptions = {
      from: config.EmailFrom,
      to: To,
      subject: config.EmailSubject,
      html: HtmlData
    };
    transporter.sendMail(mailOptions, (error, info = {}) => {
      if (error) {
        console.log(error);
        reject();
        //sendMail(To, HtmlData); //再次发送
      } else {
        console.log("邮件发送成功", info.messageId);
        transporter.close();
        resolve();
        console.log("静等下一次发送");
      }
    });
  });
};
module.exports = sendMail;
