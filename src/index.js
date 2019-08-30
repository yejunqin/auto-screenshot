// const path = require("path");
// const fs = require("fs");
// const { isSameDay, format } = require("date-fns");
// const screenshot = require("screenshot-desktop");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("hello");

// 文件夹名
// const shotDirName = "auto-screenshots";
// const shotDirPath = path.resolve(__dirname, shotDirName);
// const timeFormat = "HH:mm";
// let today = new Date();
// // 每天要截屏的时间点
// const timeList = ["00:33", "00:34", "00:35", "00:36"];
// // 已截屏的时间点
// let shottedList = [];

// console.log("自动截屏运行中...");

// function polling() {
//   const now = new Date();
//   // 过天重新赋值
//   if (!isSameDay(today, now)) {
//     today = now;
//     shottedList = [];
//   }
//   if (!fs.existsSync(shotDirPath)) {
//     fs.mkdirSync(shotDirPath);
//   }
//   const curTimeStr = format(now, timeFormat);
//   // 需要截屏的
//   const timeStrIdx = timeList.indexOf(curTimeStr);
//   if (timeStrIdx !== -1) {
//     // 是否已经截屏
//     if (shottedList.indexOf(curTimeStr) === -1) {
//       screenshot()
//         .then(img => {
//           shottedList.push(curTimeStr);
//           const fileName = `${format(now, "yyyy-MM-dd_HH_mm_00")}.jpg`;
//           fs.writeFileSync(path.resolve(shotDirPath, fileName), img);
//           console.log(`截屏：${fileName}`);
//         })
//         .catch(err => {
//           console.error(err);
//           process.exit(1);
//         });
//     }
//   }
// }

// setInterval(polling, 5000);
