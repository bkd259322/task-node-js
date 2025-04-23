const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  inventoryItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inventory'
  },
  amount: {
    type: Number,
    required: true,
    min: 1
  },
  quantityPurchased:{
    type:Number,
    required:true
  },
  purchaseDate: {
    type:Date,
    defult:Date.now()
  }
});

module.exports = mongoose.model('Expense', expenseSchema)
