## email-bot

> 爬取 one + 墨迹天气 每天定时发邮件

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


![example](https://wx1.sinaimg.cn/large/0079V2lRgy1g0oa64ouz9j31qu1bqb29.jpg)
## 最后

仅供娱乐
感谢[Vincedream](https://github.com/Vincedream/NodeMail)提供的思路
