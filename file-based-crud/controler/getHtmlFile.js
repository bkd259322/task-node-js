const fs = require('fs')

function getHtmlFile(req,res){
    try{
        let readPublicHtml = fs.readFileSync('./public/index.html')
        console.log("file run succesfully")
        res.write(readPublicHtml)
        res.end();
         return;
    }catch(err){
        res.write("file not found chack and again try...")
        res.end()
    }
}

module.exports = {getHtmlFile}