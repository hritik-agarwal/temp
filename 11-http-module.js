const http = require('http') 

const server = http.createServer((req, res) => {
    if(req.url === '/') res.end('Welcome to home page')
    else if(req.url === '/about') res.end('Here is my history')
    else res.end(`Oops can't seem to find what you are looking for`)
})

server.listen(5000)  