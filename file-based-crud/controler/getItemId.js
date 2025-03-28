const fs = require('fs');

function getItemId(req,res){
    try{
        let id = req.url.split('/').pop()
        let data = fs.readFileSync('data.json')
        data = JSON.parse(data)
        // console.log(id)
        let tempData = " ";
        for(let i=0; i<data.length; i++){
            // console.log(data[i].iId);
            if(data[i].iId == id){
                tempData = data[i]
            }
        }
        // console.log(tempData)
        if(tempData === " "){
            res.write("data not found")
            res.end();
            return
        }
        res.writeHead(200,{'content-type':'application/json'})
        res.write(JSON.stringify(tempData))
        res.end();
    }catch(err){
        res.write('error')
    }
}

module.exports = {getItemId}