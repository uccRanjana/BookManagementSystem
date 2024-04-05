

const express = require("express");
const cors = require("cors");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to the database"))
  .catch((err) => console.error("Error connecting to the database:", err));

//Schema
const userSchema = mongoose.Schema({
  fullname: String,
  email: {
    type: String,
    unique: true,
  },
  number: {
    type: Number,
    unique: true,
  },
  password: String,
  city: String,
  pincode: {
    type: Number,
  },
});

//modal
const userModal = mongoose.model("user", userSchema);

//Products Schema

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: Number,
  description: String,
});

const productModal = mongoose.model("products", productSchema);

//save products

app.post("/uploadProduct", async (req, res) => {
  // console.log(req.body)
  const data = await productModal(req.body);
  const datasave = await data.save();
  res.send({ message: "Upload successfully" });
});

//show
app.get("/product", async (req, res) => {
  const data = await productModal.find({});
  res.send(JSON.stringify(data));
});


function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send({ message: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
}


//api signup
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { fullname, email, number, password, city, pincode } = req.body;
  console.log(process.env.JWT_SECRET);

  try {
    const existingUser = await userModal.findOne({
      email: email,
      number: number,
    });
    if (existingUser) {
      res.send({
        message: "Email or Mobile number already exists",
        alert: false,
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = new userModal({
        fullname: req.body.fullname,
        email: req.body.email,
        number: req.body.number,
        password: hashPassword,
        city: req.body.city,
        pincode: req.body.pincode,
      });
      await newUser.save();
      const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.send({ message: "User Registered Successfully", alert: true, token });
      console.log(process.env.JWT_SECRET);
      // res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

//login api
app.post("/login",verifyToken,  async(req, res) => {
  console.log(req.body);
  const email = req.body;
  console.log(process.env.JWT_SECRET);

  try {
    const existingUser = await userModal.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(404).send({
        message: "Email is not available, Please signup",
        alert: false,
      });
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(404).send("Email and password does not match!!");
    }
    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET
    );
    
    if (existingUser) {
      const DataSend = {
        _id: existingUser._id,
        fullname: existingUser.fullname,
        email: existingUser.email,
        number: existingUser.number,
        city: existingUser.city,
        pincode: existingUser.pincode,
      };
      console.log(DataSend);
      res.status(200).json({
        status: 200,
        message: "Login Successfully",
        alert: true,
        data: DataSend,
        token: token // Include the token in the response JSON
      });
      // res.send({
      //   message: "Successfully logged in",
      //   alert: true,
      //   data: DataSend,
      // });
    // } else {
    //   res.send({
    //     message: "Email is not available, Please signup",
    //     alert: false,
    //   });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => console.log("Server is running at port : " + PORT));
