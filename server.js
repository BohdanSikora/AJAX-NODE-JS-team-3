let json = require('./users.json')
const http = require('http');

const hostname = '127.0.0.1';
// import { createServer } from "http";
// import json from './users.json';
const port = 4000;


const server = http.createServer((req, res) => {
   
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Method', 'GET');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('Hello World');

    if (req.url === "/users"){
        res.writeHead(200, headers);
        res.end(JSON.stringify(json));
        return;
    }   
            
  });
// createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if (req.url === "/users"){
//         res.writeHead(200, headers);
//         res.end(JSON.stringify(json));
//         return;
//         }   
//     })
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
      });


// console.log("Node.js web server at port 5500 is running..");