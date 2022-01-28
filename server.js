let json = require('./users.json');
const http = require('http');
const port = 3300;


http.createServer((req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    };

    if (req.url === "/users"){
        res.writeHead(200, headers);
        res.end(JSON.stringify(json));
        return;
        }   
    })
    .listen(port);


console.log("Node.js web server at port 3000 is running..");