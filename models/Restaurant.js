const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: Number,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
  },
  bannerImage: {
    type: String,
    required: true,
  },
  menu: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
  },
  rating: {
    type: Number,
    required: true,
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
