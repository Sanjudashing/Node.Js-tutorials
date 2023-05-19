// const { readFile } = require('fs');
// const getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile(path,'utf-8',(err,result) => {
//             if(err) {
//                 reject(err);
//             }
//             else {
//                 resolve(result)
//             }
//         })
//     })
// }
// getText('./content/first.txt').then((data) => console.log(data)).catch((err) => console.log(err))


const util=require('util');
const fs=require('fs');

function readFileCallback(path,callback){
    fs.readFile(path,'utf8',callback)
}

const readFilePromise=util.promisify(readFileCallback);

readFilePromise('./content/second.txt').then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})
