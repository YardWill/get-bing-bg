const request = require('request');
const fs = require('fs');
const path = require('path');

let i = 0;

const getImg = (index, number = 5) => {
    request.get(`http://bing.ioliu.cn/v1?p=${index}&size=${number}`, (error, response, body) => {
        const data = JSON.parse(body);
        if (data.status.code === 200) {
            data.data.forEach((e) => {

                const img = e.url;
                const arr = img.split('/');
                const str = arr[arr.length - 1];
                const url = `http://images.ioliu.cn/bing/${str}`;
                request(url)
                    .pipe(fs.createWriteStream(path.join('./img', str))
                        .on('close', () => {
                            i++;
                            console.log(`${i}${new Date()}${str} is ok!`);
                            if (i % number === 0) {
                                getImg((i / number) + 2);
                            }
                        }));
            });
        } else {
            console.log('下载完成');
        }
    });
};

getImg(i);
