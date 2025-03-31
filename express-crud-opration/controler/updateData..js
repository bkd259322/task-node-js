const fs = require('fs');
const {readData,writeData} = require('../readWriteData')

const {Namevalidetion,PriceVelidation,quantityVelidation} = require('../utils/itemValidation')



function updateData(req,res){
    try {
        const { id } = req.params;
    let data = readData();
    Namevalidetion(data.product_name);
    PriceVelidation(data.price);
    quantityVelidation(data.quantity);
    // data = JSON.parse(data);
    // console.log("this: ", typeof data);
    const index = data.findIndex(function(item) { return item.id == id});
    // console.log({index})
    if (index === -1) {
        return res.status(404).send('Item not found');
    }
    data[index] = { ...data[index], ...req.body };
    // console.log(data[index]);
    writeData(JSON.stringify(data));
    res.send('Item updated successfully');
    } catch(err){
        res.send('error')
    }
}

module.exports = {updateData}