const http = require('http')
const fs = require('fs')
const path = require('path')


http.createServer((req,res)=>{
   fs.readFile('bhargav.html',(err,data)=>{
    if(err){
        console.log(err)
        res.writeHead(404, { "Content-Type": text });
    }else{
        res.statusCode = 200;
        res.write(data)
        res.end()
    }
   })
   
}).listen(3000, () => 
{
    console.log('Server is running on port 3000','http://localhost:3000')
});