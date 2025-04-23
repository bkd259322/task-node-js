const express = require('express');
const Expense = require('../models/Expense')
const router = express.Router()


router.post('/', async (req, res) => {
  try {
    const expense = new Expense(req.body)
    await expense.save()
    res.status(201).json(expense)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
});


router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find() 
    res.json(expenses)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id)
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
});

module.exports = router
