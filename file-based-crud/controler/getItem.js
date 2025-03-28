const fs = require('fs');

function getItem(req,res){
   

    try{
        let data =  fs.readFileSync('data.json')
        // console.log(data.toString())
        res.statusCode = 200;
        res.writeHead(200,{'content-type':'application/json'})
        res.write(data)
        res.end()
        return;
    }catch(err){
        res.write("error")
        res.end()
    }
}

module.exports = {getItem};

