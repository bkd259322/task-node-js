const fs = require('fs');
const {readData,writeData} = require('../readWriteData')

const {Namevalidetion,PriceVelidation,quantityVelidation,deleteItem} = require('../utils/itemValidation')

function deleteData(req,res){
    try {
        const { id } = req.params;
        let data = readData();
        deleteItem(data.id)
        
        const filteredData = data.filter(item => item.id != id); 
    
        if (data.length === filteredData.length) {
            return res.status(404).send('Item not found');
        }
    
        writeData(JSON.stringify(filteredData));  
        res.send('Item deleted successfully');
    } catch (error) {
        res.send('error')
    }
}

module.exports = {deleteData}