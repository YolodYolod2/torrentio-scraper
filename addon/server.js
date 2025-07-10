import http from 'http';
import handler from './serverless.js';

const port = process.env.PORT || 10000;

http
  .createServer((req, res) => {
    try {
      if (typeof handler === 'function') {
        handler(req, res);
      } else {
        res.statusCode = 500;
        res.end('Handler not a function');
      }
    } catch (err) {
      console.error('❌ Error in server:', err);
      if (res && typeof res.writeHead === 'function') {
        res.writeHead(500);
        res.end('Internal server error');
      }
    }
  })
  .listen(port, () => {
    console.log(`📡 Torrentio addon server running at http://localhost:${port}/`);
  });
