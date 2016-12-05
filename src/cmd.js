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

const exec = (c) => {
    return new Promise((resolve, reject) => {
        childProcess.exec(c, config, (err, stdout, stderr) => {
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
    .then(() => exec(cmd('git add .')))
    .then(() => exec(cmd(`git commit -m ${new Date().getTime()} `)))
    .then(() => exec(cmd('git push -u origin master')))
    .then(() => console.log('Deploy end.'))
    .catch(err => {
        console.error(err);
    });


