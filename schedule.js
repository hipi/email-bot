const schedule = require("node-schedule");
const config = require("./config");
const scheduleRun = fn => {
  console.log("NodeMail: 开始等待目标时刻...");
  let j = schedule.scheduleJob(config.SENDDATE, function() {
    console.log("开始执行任务......");
    fn();
  });
};
module.exports = scheduleRun;
