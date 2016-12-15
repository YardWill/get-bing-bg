const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 6)];
rule.hour = 10;
rule.minute = 46;

schedule.scheduleJob(rule, () => {
    console.log('start');
    require('./src/get.js');
    console.log('end');
});
setInterval(() => {
    console.log('start');
    require('./src/get.js');
    console.log('end');
},  1000);
