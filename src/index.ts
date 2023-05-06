// Basic Express server setup
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT: number = process.env.PORT ? +process.env.PORT : 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
