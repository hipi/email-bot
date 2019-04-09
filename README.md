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

```bash
yarn start
```

调试的话 可以自己修改定时任务 详细定时文档可去[node-schedule](https://github.com/node-schedule/node-schedule) 

## 最后

仅供娱乐
感谢[Vincedream](https://github.com/Vincedream/NodeMail)提供的思路
