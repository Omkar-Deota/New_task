import dotenv from 'dotenv';
dotenv.config({
  path: "../.env", 
}); 
import express, { Request, Response } from 'express'; 
import mongoose, { Schema, Document } from 'mongoose';
import cors from 'cors'; 
import authRoutes from './api/auth'; 
import DB_URI from './config/env.config'
const app = express();
app.use(cors());
app.use(express.json());
// Connect to MongoDB using Mongoose
mongoose
  .connect(DB_URI.db)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("CONNECTION FAILED", err));

// Interface for PricingOption schema
interface IPricingOption extends Document {
  title: string;
  price: string;
  features: string[];
}

// PricingOption Schema
const pricingOptionSchema = new Schema<IPricingOption>({
  title: { type: String, required: true },
  price: { type: String, required: true },
  features: { type: [String], required: true },
});

const PricingOption = mongoose.model<IPricingOption>("PricingOption", pricingOptionSchema);

app.use('/api/auth', authRoutes);

// Fetch pricing option
app.get("/pricing-options", async (req: Request, res: Response) => {
  try {
    const pricingOptions = await PricingOption.find({});
    res.json(pricingOptions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pricing options", error });
  }
});

app.all('*', (_req: Request, res: Response) =>
  res.status(404).send('Route does not exists'),
);


export default app; 
