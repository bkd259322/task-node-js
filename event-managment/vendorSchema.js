const vendorSchema = new mongoose.Schema({
    nEventId: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    vandorDetails: {
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
  

  module.exports = mongoose.model("vandor",vendorSchema)