const speakerSchema = new mongoose.Schema({
    speakerDetails: {
      sName: {
        type: String,
        required: true,
      },
      nPhone: {
        type: String,
        required: true,
      },
      Address: {
        type: String,
        required: true,
      },
    },
  });

  module.exports = mongoose.model("speaker",speakerSchema)