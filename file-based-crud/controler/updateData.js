const fs = require('fs')

function updateData(req,res){
    try{
        
        let id = req.url.split('/').pop();
        console.log(id)
        let data = ""
        req.on('data',(chunks)=>{
            data += chunks
        })
        req.on('end',()=>{
            data = JSON.parse(data)
            let read = fs.readFileSync('data.json').toString()
            // console.log(read)
            read = JSON.parse(read)
            for(let i=0; i<read.length; i++){
                if(read[i].iId == id){
                    read[i] = data
                }
            }
            fs.writeFileSync('data.json',JSON.stringify(read))
            res.write("data update succesfully")
            res.end();
        })


    }catch(err){
        res.write('erroe')
        res.end()
    }
}

module.exports = {updateData}