const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
  name: {
    type: String,
    reauired: true,
  },
  location: {
    type: String,
    reauired: true,
  },
  foodMenu: {
    type: String,
    reauired: true,
  },
  userReview: {
    type: String,
    reauired: true,
  },
  userRating: {
    type: Number,
    reauired: true,
  },
  image: {
    type: String,
    reauired: true,
  },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
