const express = require('express')
const Budget = require('../models/Budget')
const router = express.Router()


router.post('/', async (req, res) => {
  try {
    const budget = new Budget(req.body)
    await budget.save()
    res.status(201).json(budget)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
});

router.get('/', async (req, res) => {
  const budgets = await Budget.find()
  res.json(budgets);
});

module.exports = router
