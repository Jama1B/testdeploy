const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tag: {
      type: [String],
      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Food', foodSchema);
