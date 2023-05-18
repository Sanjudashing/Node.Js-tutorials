const { readFile,writeFile } = require('node:fs')

console.log("start");
readFile('./content/first.txt','utf-8',(err,data) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = data
    readFile('./content/second.txt','utf-8',(err,data) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = data
        writeFile('./content/result-async.txt',`Here is the result: ${first}, ${second}`,(err) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log("File has been create successfully");
        })
    })
})
console.log("Next task");