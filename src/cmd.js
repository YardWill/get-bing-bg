const childProcess = require('child_process');

const cmd = (c) => c;
const shell = 'bash';
const config = {
    env: {
        NODE_ENV: 'production',
        encoding: 'utf8',
    },
    shell,
};

const exec = (cmdd) => {
    return new Promise((resolve, reject) => {
        childProcess.exec(cmdd, config, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve(stdout, stderr);
            }
        });
    });
};
console.log('Deploy start.');
exec(cmd('cd ../myapp/public/img'))
    .then(() => exec(cmd('git push -u origin master')))
    .catch(err => {
        console.error(err);
    });


