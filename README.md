## email-bot

> 根据用户配置 爬取 one 和不同地区墨迹天气 每天定时发邮件，支持多人地区个性化定制

## 使用

```bash
git clone https://github.com/cyea/email-bot.git

cd email-bot

yarn

```

新建`.env`文件 格式是跟`.env.example` 一样的 **填入自己的邮箱账号密码及邮件提供商**

### 配置

修改`config/index.js`里的配置文件

```js
const { env } = process;
module.exports = {
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
};
```

```bash
yarn start
```

## 优化

根据 [Vincedream](https://github.com/Vincedream/NodeMail)提供的思路 进行了代码重构

### 1. 不使用用`ejs`

`ejs` 这种模板已经年老 更新不及时，所以换了更清晰更新的 `nunjucks`

### 2. 代码结构

```
│  .env.example #.env
│  .gitignore
│  index.js #服务启动模块
│  LICENSE
│  package.json
│  README.md
│  schedule.js #定时模块
│  test.js #模板样式调试模块
│  yarn.lock
│
├─config
│      index.js #配置
│
├─email
│      index.js #发送邮件模块
│
├─superagent
│      index.js #获取天气及ONE 数据
│
├─utils
│      index.js #通用工具函数
│      superagent.js #请求发送封装
│
└─view
        index.js #生成邮件样式模块
        index.njk #邮件样式模板模块
```

发送者的邮箱过于隐私 所以放进了 `.env`文件 作为环境变量

每个步骤 都基于 `ES6` 的 的 `async await`进行异步

## demo
![](https://i.loli.net/2019/04/09/5cac0c1ca75f1.png)

