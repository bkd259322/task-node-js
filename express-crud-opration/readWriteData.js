const fs = require('fs')

function readData (){
    try{
       const temp =  JSON.parse(fs.readFileSync('data.json'))
       return temp;
    }catch(err){
        return err;
    }
}

const writeData = function(data) {
    fs.writeFileSync('data.json',data)
}

module.exports = {readData,writeData}