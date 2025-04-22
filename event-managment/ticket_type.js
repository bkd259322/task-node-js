const ticket_type = new mongoose.Schema({
    ticketType: {
        type: String,
        require: true,
      },
      nPrice: {
        type: Number,
        min: 0,
        required: true,
      },
})