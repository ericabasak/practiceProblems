// basic app server created here
// simple server with nodejs

// simple node module
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(res.write());
    console.log(res());
});