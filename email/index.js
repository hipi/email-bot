const nodemailer = require("nodemailer"); //发送邮件的node插件
const config = require("./../config");
const sendMail = HtmlData => {
  let transporter = nodemailer.createTransport({
    service: config.EmianService,
    port: 465,
    secureConnection: true,
    auth: config.EamilAuth
  });

  let mailOptions = {
    from: config.EmailFrom,
    to: config.EmailTo,
    subject: config.EmailSubject,
    html: HtmlData
  };
  transporter.sendMail(mailOptions, (error, info = {}) => {
    if (error) {
      console.log(error);
      sendMail(HtmlData); //再次发送
    } else {
      console.log("邮件发送成功", info.messageId);
      console.log("静等下一次发送");
    }
  });
};

module.exports = sendMail;
