const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://omkar_2023:Magureinc2024@cluster0.fksi8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

const pricingOptionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  features: { type: [String], required: true },
});

const PricingOption = mongoose.model("PricingOption", pricingOptionSchema);

app.post("/register", async (req, res) => {
  const { username, password,name } = req.body;

  try {

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        name,
      username,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ message: "User registration failed", error: err });
  }
});

app.post("/authenticate-user", async (req, res) => {
  const { username, password } = req.body;

  try {
    
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({message:"invalid username"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({message:"invalid password"});
    }
    const name=user.name;
    res.json({ message: "Successfully logged in", name});
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
});

app.get("/pricing-options", async(req, res)=>{
  try{
    const data=await PricingOption.find({});
    console.log(data);
    return res.json(data);
  }catch(error){
    res.status(500).json({message:"Error met"});
  }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
