const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Simulate a successful request
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    } else {
      // Simulate a failure
      const error = new Error('Simulated error');
      error.code = 'ECONNRESET'; // Example error code
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      // or
      //console.error('Request failed:', error);
      //return;
    }
  }, 1000); 
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});