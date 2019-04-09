## email-bot

> 根据用户配置 爬取 one 和不同地区墨迹天气 每天定时多人发邮件

## how to use 

```bash
git clone https://github.com/cyea/email-bot.git

cd email-bot

yarn 

```

新建`.env`文件 格式是跟`.env.example` 一样的 **填入自己的邮箱账号密码及邮件提供商**

修改`config/index.js`里的配置文件

```js
ONE: "http://wufazhuce.com/", // ONE的web版网站
  MOJI_HOST: "https://tianqi.moji.com/weather/china/", // 中国墨迹天气url,
  EmianService: env.EmianService, // 发送者邮箱厂家
  EamilAuth: {
    // 发送者邮箱账户用户名及密码
    user: env.EamilAuth_user,
    pass: env.EamilAuth_pass
  },
  EmailFrom: "yuyehack@outlook.com", // 发送者昵称与邮箱地址
  EmailSubject: "一封暖暖的小邮件", // 邮件主题
  /**
   * @description: 收信人详细
   */
  EmailToArr: [
    {
      TO: "yuyehack@gmail.com", // 接收者邮箱地址
      CITY: "jiangsu", // 墨迹天气链接末尾城市代码
      LOCATION: "pukou-district" // 墨迹天气链接末尾详细地区代码
    },
    {
      TO: "yuyehack@qq.com", 
      CITY: "jiangsu",
      LOCATION: "kunshan" 
    }
  ],
  //每日发送时间
  SENDDATE: "58 15 8 * * *"
```

```bash
yarn start
```

调试的话 可以自己修改定时任务 详细定时文档可去[node-schedule](https://github.com/node-schedule/node-schedule) 

## 最后

仅供娱乐
感谢[Vincedream](https://github.com/Vincedream/NodeMail)提供的思路
