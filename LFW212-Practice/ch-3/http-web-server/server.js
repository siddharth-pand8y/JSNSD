const http = require('http');
const PORT = process.env.port || 3000;
const fs = require('fs');
const url = require('node:url');

const htmlContent = fs.readFileSync('index.html', {
    encoding: 'utf-8'
})

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end(http.STATUS_CODES[res.statusCode] + '\r\n');
        return;
    }

    const { pathname } = url.parse(req.url);

    if (pathname === '/hello') {
        res.end(htmlContent);
        return;
    }

    res.statusCode = 404;
    res.end(http.STATUS_CODES[res.statusCode] + '\r\n');
});

server.listen(PORT)