const http = require('http');
const next = require('next');
const nextConfig = require('./next.config'); // Import Next.js configuration

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    // Next.js request handling
    handle(req, res);
  });

  server.listen(nextConfig.port, (err) => { // Using nextConfig.port from the imported configuration
    if (err) throw err;
    console.log(`> Ready on http://localhost:${nextConfig.port}`);
  });
});
