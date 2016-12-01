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

###喵喵喵
每天运行一次感觉也挺麻烦，但是为了这样一个功能直接起一个后台任务就有点浪费了。以后再更新