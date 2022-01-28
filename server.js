// присвоєння json
let json = require('./users.json');
// Сервер створений на http модулі .
const http = require('http');
// задаємо порт
const port = 5502;

// створюємо сервер
const server = http.createServer((req, res) => {
    const headers = {
        // Для доступу до домену прописуться зірочка на гет запити
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    };

// при відповідності url до файлу users ми отримає успішний статус коду 200
    if (req.url === "/users"){
        res.writeHead(200, headers);
        res.end(JSON.stringify(json));
        //повернення json
        return;
    }   
            
  })
  
  server.listen(port);

console.log("Server running at port 5502 is running..");

