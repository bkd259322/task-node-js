const fs = require('fs')

function addItem(req,res){
    try{
        let data = ""
        req.on('data',(chunks)=>{
            data += chunks
        })
        req.on('end',()=>{
           data =  JSON.parse(data)
           let file =  fs.readFileSync('data.json')
         file = JSON.parse(file)
         file.push(data)
         fs.writeFileSync('data.json',JSON.stringify(file))
         res.write("data add succesfully")
            res.end()
            return;
        })
    }catch(err){
        res.write("error")
    }
}

module.exports = {addItem}