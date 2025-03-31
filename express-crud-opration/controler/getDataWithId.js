const fs = require('fs');
const {readData} = require('../readWriteData')

function getDataWithId(req,res){
    try{
        const {id} = req.params;
        const data = readData();
        const item = data.find(item => item.id == id)
        item ? res.json(item) : res.status(404).send('Item not found');
    }catch(err){
        res.send('error')
    }
}

module.exports = {getDataWithId}