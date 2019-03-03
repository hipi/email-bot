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
        console.log(error);
        reject(mailOptions.To);
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
