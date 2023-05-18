const http = require("http");
const server = http.createServer((req,res) => {
    if(req.url === "/") {
        res.end("Welcome the home page")
    }
    else if(req.url === "/about") {
        res.end("About page")
    }
    else {
        res.end(`<h1>Oops!</h1>
        <p>we can't see the page your are looking for</p>
        <a href="/">back home</a>`)
    }
})
server.listen(5000,() => {
    console.log("Server listen on 3000 port");
})

