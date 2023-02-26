const express = require('express');
const {
  createFood,
  getFoods,
  singleFood,
} = require('../controlers/workoutControllers');
const router = express.Router();
const Food = require('../models/FoodModel');

// GET ALL FOOD
router.get('/', getFoods);

// GET A SINGLE FOOD
router.get('/:id', singleFood);

// CREATE A SINGLE FOOD
router.post('/', createFood);

// UPDARE A SINGLE FOOD
router.patch('/:id', (req, res) => {
  res.json({ massage: 'update a food' });
});

// DELETE A SINGLE FOOD
router.delete('/:id', (req, res) => {
  res.json({ massage: 'Delete a food' });
});

module.exports = router;
