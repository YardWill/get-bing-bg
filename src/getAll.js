const request = require('request');
const fs = require('fs');
const path = require('path');

request.get('http://bing.ioliu.cn/v1?p=1&size=287', (error, response, body) => {
    const data = JSON.parse(body);
    if (data.status.code === 200) {
        data.data.forEach((e) => {
            const img = e.url;
            const arr = img.split('/');
            const str = arr[arr.length - 1];
            request(img).pipe(fs.createWriteStream(path.join('./img', str)));
            console.log(`${new Date()}${str} is ok!`);
        });
    } else {
        console.log('接口请求未成功');
    }
});
