const fs = require('fs')
const path = require('path')

function getDataWithCss(req,res){
    try{
        fs.readFile('public/index.html','utf8',(err,data) =>{
            if(err){
                return res.status(500).send('Error reading file: ' + err.message);
            }
            res.sendFile(path.join(__dirname,'..','public','style.css'));
        });
    }catch(err){
        res.send("error")
    }
}

module.exports = {getDataWithCss}