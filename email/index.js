const config = require("./../config");
const sendMail = (transporter, To, HtmlData) => {
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: config.EmailFrom,
      to: To,
      subject: config.EmailSubject,
      html: HtmlData
    };
    transporter.sendMail(mailOptions, (error, info = {}) => {
      if (error) {
        console.error("邮件发送成功" + error);
        reject(error);
      } else {
        console.log("邮件发送成功", info.messageId);
        console.log("静等下一次发送");
        resolve();
      }
    });
  });
};
module.exports = sendMail;
