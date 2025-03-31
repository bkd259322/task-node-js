const fs = require('fs')
const path = require('path')

function getDataWithJs(req,res){
    try {
        fs.readFile('public/index.html','utf8',(err,data) =>{
            if(err){
                return res.status(500).send('Error reading file: ' + err.message);
            }
            res.sendFile(path.join(__dirname,'..','public','script.js'));
        });
    } catch (error) {
        res.send("error")
    }
}

module.exports = {getDataWithJs}