const eventSchema = new mongoose.Schema({
    sEvent_Name: {
      type: String,
      required: true,
    },
    dStart_Date: {
      type: Date,
      required: true,
    },

    dEnd_Date:{
      type:Date,
      required:true
    },
  
    sLocation: {
      type: String,
      required: true,
    },
    
  });

  module.exports = mongoose.model("event",eventSchema)




  