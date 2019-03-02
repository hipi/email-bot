const data = {
  today: "2019-02-12",
  one: {
    info:
      "我们总是忘了事情是怎么开始的，却执着于控制它结束的方式。“事情不应该这么结束”，于是千千万万段感情继续着，以奇形怪状的式样。",
    imgSrc: "http://image.wufazhuce.com/Fh0XS7aucYI1BxpNDyJ6QBV9BQS-"
  },
  moji: {
    addressText: "中国-江苏省-浦口区",
    weatherTip: "明天有雨，天气阴冷，穿暖和点吧！",
    nowInfo: { Temp: "7", WeatherText: "阴", FreshText: "今天22:03更新" },
    threeDaysData: [
      {
        Day: "今天",
        WeatherImgUrl:
          "https://h5tq.moji.com/tianqi/assets/images/weather/w7.png",
        WeatherText: "小雨",
        Temperature: "6° / 11°",
        WindDirection: "东风",
        WindLevel: "3级",
        Pollution: "209 重度污染",
        PollutionLevel: "level_5"
      },
      {
        Day: "明天",
        WeatherImgUrl:
          "https://h5tq.moji.com/tianqi/assets/images/weather/w7.png",
        WeatherText: "小雨",
        Temperature: "4° / 7°",
        WindDirection: "东风",
        WindLevel: "3-4级",
        Pollution: "117 轻度污染",
        PollutionLevel: "level_3"
      },
      {
        Day: "后天",
        WeatherImgUrl:
          "https://h5tq.moji.com/tianqi/assets/images/weather/w31.png",
        WeatherText: "多云",
        Temperature: "3° / 8°",
        WindDirection: "西北风",
        WindLevel: "2级",
        Pollution: "99 良",
        PollutionLevel: "level_2"
      }
    ]
  }
};
const express = require("express");
const nunjucks = require("nunjucks");
var app = express();

nunjucks.configure("view", {
  autoescape: true,
  express: app
});

app.get("/", function(req, res) {
  res.render("index.njk", data);
});
app.listen("3000", function() {
  console.log("http://localhost:3000");
});
