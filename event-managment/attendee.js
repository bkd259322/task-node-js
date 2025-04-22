const attendee = new mongoose.Schema({
    sRegistration: {
      dDate: {
        type: Date,
        require: true,
      },
      nId_card: {
        type: Number,
        required: true,
      },
      sName: {
        type: String,
        required: true,
      },
      nPhone: {
        type: String,
        required: true,
      },
    },
    
  });

  module.exports = mongoose.model("attendee",attendee)