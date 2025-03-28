const fs = require('fs')

    function deleteData(req,res){
        try{
            let flag = false
            let id = req.url.split('/').pop()
            let readfile = fs.readFileSync('data.json')
            readfile = JSON.parse(readfile)
            let temp = []
            for(let i=0; i<readfile.length; i++){
                if(readfile[i].iId != id){
                temp.push(readfile[i])
                }else{
                    flag = true
                }
            }
            if(!flag){
                res.write("id not found")
                res.end()
                return;
            }
         fs.writeFileSync('data.json',JSON.stringify(temp))
         res.write("data delete succesfully")
         res.end();
        }catch(err){
            res.write('error')
            res.end()
        }
    }

    module.exports = {deleteData}