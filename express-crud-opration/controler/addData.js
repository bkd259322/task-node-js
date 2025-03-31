const fs = require('fs');
const {readData} = require('../readWriteData')
const {Namevalidetion,PriceVelidation,quantityVelidation} = require('../utils/itemValidation')

function addData(req,res){
    try{
        let data = req.body
        Namevalidetion(data.product_name);
        PriceVelidation(data.price);
        quantityVelidation(data.quantity);
        // console.log(data)
        let file = fs.readFileSync('data.json')
        file = JSON.parse(file)
        file.push(data)
        fs.writeFileSync('data.json',JSON.stringify(file))
        res.send("data create succesfully")
    }catch(err){
        res.send('error')
    }
}

module.exports = {addData}