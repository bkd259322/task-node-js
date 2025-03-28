const fs = require('fs')

function getJsFile(req,res){
    try{
        let readPublicJs = fs.readFileSync('./public/bhargav.js')
        console.log("file run succesfully")
        res.write(readPublicJs)
        res.end();
         return;
    }catch(err){
        res.write("file not found chack and again try...")
        res.end()
    }
}
module.exports = {getJsFile}