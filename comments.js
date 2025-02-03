// Create web server
// 1. Create a web server
// 2. Listen to the port
// 3. Handle the request and send response
// 4. Read and write the file
// 5. Parse the data
// 6. Send response
// 7. Handle errors

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Server Error' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));