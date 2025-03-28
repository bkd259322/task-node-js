
const express = require('express')

const app = express()



app.get('/',(req,res)=>{
  res.send("this is a get request")
})

app.post('/',(req,res)=>{
    res.send("this is a post request")
})

app.put('/',(req,res)=>{
    res.send("this is a put request")
})
app.delete('/',(req,res)=>{
    res.send("this is a delete request")
})

app.listen(4444)