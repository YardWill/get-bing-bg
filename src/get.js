const request = require('request');
const fs = require('fs');
const path = require('path');
const exe = require('./cmd');

const req = () => {
    request.get('http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN', (error, response, body) => {
        const img = JSON.parse(body).images[0];
        const arr = img.url.split('/');
        const str = arr[arr.length - 1];
        request(`http://cn.bing.com${img.url}`)
            .pipe(fs.createWriteStream(path.join('./img', str))
                .on('close', () => {
                    console.log(`${new Date()}${str} is ok!`);
                    exe();
                }));
    });
};

module.exports = req;
