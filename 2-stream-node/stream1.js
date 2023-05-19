// const { createReadStream } = require('fs');

// const stream = createReadStream('./content/first.txt',{encoding:'utf-8'})

// stream.on('data',(result) => {
//     console.log(result);
// })
// stream.on('error',(err) => {
//     console.log(err);
// })

const http = require('http')
const fs = require('fs')

http.createServer((req,res) => {
    // const text=fs.readFileSync('./content/big.txt','utf-8')
    // res.end(text)
    const stream = fs.createReadStream('./content/big.txt','utf-8')
    stream.on('data',() => {
        stream.pipe(res)
    })
    stream.on('error',(err) => {
        res.end(err)
    })
}).listen(8080) 

