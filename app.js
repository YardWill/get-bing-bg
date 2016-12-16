const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 6)];
rule.hour = 8;
rule.minute = 0;

schedule.scheduleJob(rule, () => {
    require('./src/get.js');
});
// console.log('start');
// require('./src/get.js');
// console.log('end');

// setInterval(() => {
//     console.log('start');
//     require('./src/get.js');
//     console.log('end');
// }, 24 * 60 * 60 * 1000);
