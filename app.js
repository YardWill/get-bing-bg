const request = require('request');
const fs = require('fs');
const path = require('path');

request.get('http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN', (error, response, body) => {
    const img = JSON.parse(body).images[0];
    const arr = img.url.split('/');
    const str = arr[arr.length - 1];
    request(img.url).pipe(fs.createWriteStream(path.join('../../../Documents/bg', str)));
});
