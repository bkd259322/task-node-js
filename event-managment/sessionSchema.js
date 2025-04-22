const sessionSchema = new mongoose.Schema({
    eventData: {
        type: Date,
        require: true,
      },
      sEvent_Name: {
        type: String,
        required: true,
      },
    
  });
  module.exports = mongoose.model("session",sessionSchema)