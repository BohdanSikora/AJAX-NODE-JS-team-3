import { createServer } from "http";
import json from './users.json';
const port = 5500;



createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url === "/users"){
        res.writeHead(200, headers);
        res.end(JSON.stringify(json));
        return;
        }   
    })
    .listen(port);


console.log("Node.js web server at port 5500 is running..");