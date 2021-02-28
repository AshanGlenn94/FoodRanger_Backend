const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

//Create New Data
router.post('/', async (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    location: req.body.location,
    foodMenu: req.body.foodMenu,
    userReview: req.body.userReview,
    userRating: req.body.userRating,
    image: req.body.image,
  });

  try {
    const savedRestaurant = await restaurant.save();
    res.json(savedRestaurant);
  } catch (error) {
    res.json(console.log(error));
  }
});

//  Get All data
router.get('/', async (req, res) => {
  try {
    const getRestaurants = await Restaurant.find();
    res.json(getRestaurants);
  } catch (error) {
    res.json(console.log(error));
  }
});

//  Get Specific Data
router.get('/:restaurantID', async (req, res) => {
  try {
    const specificRestaurant = await Restaurant.findById(
      req.params.restaurantID
    );
    res.json(specificRestaurant);
  } catch (error) {
    res.json(console.log(error));
  }
});

//  Delete specific data
router.delete('/:restaurantID', async (req, res) => {
  try {
    const deleteRestaurant = await Restaurant.remove({
      _id: req.params.restaurantID,
    });
    res.json(deleteRestaurant);
  } catch (error) {
    res.json({ message: err });
  }
});

// Update a specific data
router.patch('/:restaurantID', async (req, res) => {
  try {
    const updateRestaurant = await Restaurant.updateOne(
      { _id: req.params.restaurantID },
      { $set: { userRating: req.body.userRating } }
    );
    res.json(updateRestaurant);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
