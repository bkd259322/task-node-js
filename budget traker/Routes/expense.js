const express = require('express');
const Expense = require('../models/Expense')
const router = express.Router()
const Inventory = require('../models/Inventory')


router.post('/', async (req, res) => {
 const {inventoryId, qty} = req.body

 try{
      const item = await Inventory.findOne({_id:inventoryId})
      if(!item){
        return res.json({message:"item not found"})
      }

      const new_expense = new Expense({inventoryItem:inventoryId,amount:qty*item.unitPrice,quantityPurchased:qty})

      await new_expense.save()
      return res.json({massage:"item add sucessfully"})


      


 }catch(error){
  res.json({message:"server error"})
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
