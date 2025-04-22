const eventSchema = new mongoose.Schema({
    sName: {
        type:String,
        required:true
    },
    nPhon:{
        type:String,
        required:true
    },
    sEmail:{
        type:String,
        required:true
    },
    sAddress:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("orgenizer",organizersSchema)
