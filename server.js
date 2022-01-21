const { fstat } = require('fs');
const http = require('http');
const dt = require("./dateTime");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    fs.readFile('./demofile1.html', function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });
});

server.listen(port, () => {
    console.log(dt.myDateTime());
    console.log(`server running at port ${port}`);
});