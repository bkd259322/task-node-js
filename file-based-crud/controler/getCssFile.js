const fs = require('fs')

    function getCssFile(req,res){
        try{
            let readPublicCss = fs.readFileSync('./public/index.css')
            console.log("file run succesfully")
            res.write(readPublicCss)
            res.end();
             return;
        }catch(err){
            res.write("file not found chack and again try...")
            res.end()
        }
    }

    module.exports = {getCssFile}