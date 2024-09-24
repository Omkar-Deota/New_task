import dotenv from 'dotenv';
dotenv.config({
  path: "../.env", 
}); 
import env from './config/environment.config'
import express, { Request, Response } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
import cors from 'cors';
import { subscriptionRoute, userRoutes } from './api/index';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const uri= String(env.db);
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("CONNECTION FAILED", err));

app.use('/users', userRoutes);
app.use('/subscription', subscriptionRoute);

app.get('/', (_req: Request, res: Response) =>
  res.status(200).send("Hello Dev's"),
);

app.all('*', (_req: Request, res: Response) =>
  res.status(404).send('Route does not exists'),
);

export default app;
