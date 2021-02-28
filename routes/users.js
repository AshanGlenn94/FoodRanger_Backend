const router = require('express').Router();
const User = require('../models/User');

// Register user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  //Simple validation
  if (!email || !password) {
    return res.status(400).send({ msg: 'Field cannot be blank!' });
  }
  try {
    const newUser = new User({
      email,
      password,
    });
    const response = await newUser.save();
    res.status(201).send({
      message: 'Signup Successful!',
      _id: response._id,
      email: response.email,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      message: 'Error while signing up!',
      error: error,
    });
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.send({ msg: 'Please enter all fields!' });
  try {
    const user = await User.findOne({ email, password }, 'login successful!');
    if (user) {
      res.json({
        message: 'Success',
        found: true,
        data: user,
      });
    } else {
      res.json({
        message: 'credentials invalid',
        found: false,
      });
    }
  } catch (e) {
    console.log('Some error');
    res.status(400).send({
      message: 'Request error',
      error: e,
    });
  }
});

module.exports = router;
