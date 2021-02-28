require("dotenv").config();
const express = require("express");
const router = express.Router();

const User = require("../../models/User");

// Register user
router.post("/auth/register", async (req, res) => {
  const { fname, lname, address, email, password } = req.body;

  //Simple validation
  if (!fname || !lname || !address || !email || !password) {
    return res.status(400).send({ msg: "Please fillout all fields!" });
  }

  try {
    const newUser = new User({
      fname,
      lname,
      address,
      email,
      password,
    });

    const response = await newUser.save();

    res.status(201).send({
      message: "User sign-up success!",
      _id: response._id,
      email: response.email,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      message: "Error, user sign-up unsuccessful!",
      error: error,
    });
  }
});

// Login User
router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.send({ msg: "Please enter username & password both!" });
  try {
    const user = await User.findOne(
      { email, password },
      "user login authorized!"
    );
    if (user) {
      res.json({
        message: "Success",
        found: true,
        data: user,
      });
    } else {
      res.json({
        message: "email/password is invalid",
        found: false,
      });
    }
  } catch (e) {
    console.log("error occured");
    res.status(400).send({
      message: "Request error",
      error: e,
    });
  }
});

// Get user info
//New change
module.exports = router;
