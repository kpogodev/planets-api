// Basic Express server setup
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import planetsRouter from './routes/planets';
import { notFound, errorHandler } from './middlewares/errorMiddleware';

dotenv.config();

const PORT: number = process.env.PORT ? +process.env.PORT : 5000;

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/planets', planetsRouter)

//Custom Middlewares
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
