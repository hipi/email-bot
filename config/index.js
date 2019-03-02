const { env } = process;
module.exports = {
  ONE: "http://wufazhuce.com/", //ONE的web版网站
  MOJI_HOST: "https://tianqi.moji.com/weather/china/", //中国墨迹天气url,
  EmianService: env.EmianService, //发送者邮箱厂家
  EamilAuth: {
    //发送者邮箱账户SMTP授权码
    user: env.EamilAuth_user,
    pass: env.EamilAuth_pass
  },
  EmailFrom: "yuyehack@outlook.com", //发送者昵称与邮箱地址
  EmailSubject: "一封暖暖的小邮件", //邮件主题
  /**
   * @description: 收信人详细
   */
  EmailToArr: [
    {
      TO: "yuyehack@gmail.com",
      CITY: "jiangsu",
      LOCATION: "pukou-district"
    },
    {
      TO: "angQi14303@163.com",
      CITY: "jiangsu",
      LOCATION: "kunshan"
    }
  ],
  //每日发送时间
  SENDDATE: "58 15 8 * * *"
};
