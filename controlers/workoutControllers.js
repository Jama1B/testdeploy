const Food = require('../models/FoodModel');

//get all foods

const getFoods = async (req, res) => {
  const foods = await Food.find({}).sort({ createdAt: -1 });
  res.status(200).json(foods);
};

//get a single food
const singleFood = async (req, res) => {
  const { id } = req.params;

  const food = await Food.findById(id);
  if (!food) {
    return res.status(400).json({ error: 'No such food' });
  }
  res.status(200).json(food);
};

// create a food
const createFood = async (req, res) => {
  const { title, description, price, imgUrl, category, tag } = req.body;

  try {
    const food = await Food.create({
      title,
      description,
      price,
      imgUrl,
      category,
      tag,
    });
    res.status(200).json(food);
  } catch (error) {
    console.log(error.massage);
    res.status(400).json({ error: error });
  }
};

//delete a food

//update a food

module.exports = { createFood, getFoods, singleFood };
