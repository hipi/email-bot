## wecaht-bot

> 微信机器人

## puppeteer 下载失败解决办法

Cause storage.googleapis.com is blocked in mainland china, you'd better config by following guide.

> 因为`torage.googleapis.com`在中国被墙所以要切换镜像地址

### npm

```bash
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
npm config set puppeteer_download_host https://storage.googleapis.com.cnpmjs.org
```

### yarn

```bash
yarn config set registry https://registry.npm.taobao.org
yarn config set disturl https://npm.taobao.org/dist
yarn config set puppeteer_download_host https://storage.googleapis.com.cnpmjs.org
```
