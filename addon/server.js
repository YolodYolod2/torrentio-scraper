import express from 'express';
import handler from './serverless.js';

const app = express();
const port = process.env.PORT || 7000;

app.use(async (req, res) => {
  try {
    const result = await handler(req);
    res
      .status(result.statusCode || 200)
      .set(result.headers || {})
      .send(result.body || '');
  } catch (err) {
    console.error('❌ Error in server:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`📡 Torrentio addon server running at http://localhost:${port}`);
});
