const mongoose = require('mongoose')

const budgetSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,

  dailyLimit:{
    type:Number,
    required:true
  },
  weeklyLimit:{
    type:Number,
    required:true
  },
  monthlyLimit:{
    type:Number,
    required:true
  } ,
  Date:{
    type:Date,
    required:true

  }
});

module.exports = mongoose.model('Budget', budgetSchema);
