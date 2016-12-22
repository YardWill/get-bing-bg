const schedule = require('node-schedule');
const req = require('./src/get.js');

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 6)];
rule.hour = 8;
rule.minute = 0;

// const times = [];
// for (let i = 1; i < 60; i += 10) { times.push(i); }
// rule.second = times;

// schedule.scheduleJob(rule, () => {
    req();
// });
