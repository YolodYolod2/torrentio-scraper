import express from 'express';
import { handler } from './serverless.js';

const app = express();
const PORT = process.env.PORT || 7000;

app.use(handler); // make serverless handler usable via express

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
