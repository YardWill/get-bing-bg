const request = require('request');
const fs = require('fs');
const path = require('path');
const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 6)];
rule.hour = 8;
rule.minute = 0;

// const times = [];
// for (let i = 1; i < 60; i++) {
//     times.push(i);
// }
// rule.second = times;

schedule.scheduleJob(rule, () => {
    request.get('http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN', (error, response, body) => {
        const img = JSON.parse(body).images[0];
        const arr = img.url.split('/');
        const str = arr[arr.length - 1];
        request(img.url).pipe(fs.createWriteStream(path.join('../myapp/public/bingBG', str)));
        // '../../../Documents/bg'可以选择自己想要保存的目录（相对路径）
        require('./src/cmd.js');
        console.log(`${new Date()}${str} is ok!`);
    });
});
