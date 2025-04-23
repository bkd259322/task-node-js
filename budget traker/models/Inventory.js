const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  type: {
    type:String,
    required:true
  },
  quantityAvailable:{
    type:Number,
    required:true
  } ,
  unitPrice: {
    type:Number,
    required:true
  },
});

module.exports = mongoose.model('Inventory', inventorySchema)
