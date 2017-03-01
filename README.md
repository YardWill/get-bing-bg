###描述
保存bing的每日美图

###步骤
```
npm install
npm start
```

###核心代码
```
const request = require('request');
const fs = require('fs');
const path = require('path');

request.get('http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN', (error, response, body) => {
    const img = JSON.parse(body).images[0];
    const arr = img.url.split('/');
    const str = arr[arr.length - 1];
    request(img.url).pipe(fs.createWriteStream(path.join('../../../Documents/bg', str)));// '../../../Documents/bg'可以选择自己想要保存的目录（相对路径）
});
```

###用法
把这个项目放到服务器上，每天爬取bing上的壁纸，然后在本地只需要 git pull 命令就可以获取所有存在服务器上的壁纸，如果是mac用户可以把壁纸文件夹设置为本项目的img文件夹，然后半小时换一次壁纸，这是一种很好的体验。