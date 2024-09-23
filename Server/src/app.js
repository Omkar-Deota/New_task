const dotenv = require("dotenv")
dotenv.config({
  path: "../.env",
});
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
const DB_LINK = process.env.DB_URI;
const authRoutes = require('./api/auth.js')

// Connect to MongoDB using Mongoose
mongoose
  .connect(DB_LINK, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("CONNECTION FAILED", err));


// PricingOption Schema
const pricingOptionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  features: { type: [String], required: true },
});

const PricingOption = mongoose.model("PricingOption", pricingOptionSchema);
app.use('/api/auth', authRoutes)

// Fetch pricing option
app.get("/pricing-options", async (req, res) => {
  try {
    const pricingOptions = await PricingOption.find({});
    res.json(pricingOptions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pricing options", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
