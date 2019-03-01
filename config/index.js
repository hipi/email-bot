const { env } = process;
module.exports = {
  ONE: "http://wufazhuce.com/", //ONE的web版网站
  MOJI_HOST: "https://tianqi.moji.com/weather/china/", //中国墨迹天气url,
  CITY: "jiangsu", //收信者所在城市
  LOCATION: "nanjing", //收信者所在区
  EmianService: "outlook", //发送者邮箱厂家
  EamilAuth: {
    //发送者邮箱账户SMTP授权码
    user: env.EamilAuth_user,
    pass: env.EamilAuth_pass
  },
  EmailFrom: "yuyehack@outlook.com", //发送者昵称与邮箱地址
  EmailTo: "yuyehack@gmail.com", //接收者邮箱地
  EmailSubject: "一封暖暖的小邮件", //邮件主题
  //每日发送时间
  SENDDATE: "58 15 8 * * *"
};
