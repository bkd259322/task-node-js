const fs = require('fs');
const {readData} = require('../readWriteData')


function getData(req,res){
    try{
        const data = readData()
        res.json(data)
    }catch(err){
        res.send('err')
    }
}

module.exports = {getData}