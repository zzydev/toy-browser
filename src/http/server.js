const http = require("http");
// server.js

http.createServer(function (req, res) {
    let body = [];

    req.on("error", (err) => {
        console.error(err);
    })
        .on("data", (chunk) => {
            body.push(chunk.toString());
        })
        .on("end", () => {
            body = Buffer.concat(body).toString();
            console.log("body: ", body);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("Hello World");
        });
}).listen(8080);

console.log("server started");
