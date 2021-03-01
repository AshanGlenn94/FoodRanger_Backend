const express = require('express');
const Order = require('../models/Order');
const router = express.Router();
const Review = require('../models/Order');

// Post restaurant order
router.post('/users/:id/orders', async (req, res) => {
  const order = new Order({
    name: req.body.name,
    email: req.body.email,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
