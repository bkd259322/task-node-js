const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const uuid = require('uuid')
const {getItem} = require('./controler/getItem')
const {getItemId} = require('./controler/getItemId')
const {addItem} = require('./controler/addData')
const {updateData} = require('./controler/updateData')
const {deleteData} = require('./controler/deleteData')
const {getHtmlFile} = require('./controler/getHtmlFile')
const {getCssFile} = require('./controler/getCssFile')
const {getJsFile} = require('./controler/getJsFile')



class item{
    constructor(sName,nQuantity,_pPrice,sStatus,_dCreatedAt,_uUpdateAt,_dDeleted){
        this.iId = uuid.v1();
        this.sName = sName;
        this.nQuantity = nQuantity;
        this.sStatus = sStatus
        this.nPrice = nPrice;
        this.dCreatedAt = new Date();
        this.dUpdatedAt = new Date();
        this.isDeleted = false;
    }
}

 http.createServer((req,res)=>{


    if(req.method === 'GET' && req.url === '/api/data'){
       getItem(req,res)
    }
    else if(req.method === 'GET' && req.url.startsWith('/api/data/')){
        getItemId(req,res)
    } 
    else if(req.method === 'POST' && req.url === '/api/data'){
        addItem(req,res)
    }
    else if(req.method === 'PUT' && req.url.startsWith('/api/data/')){
        updateData(req,res)
    }
    else if(req.method === 'DELETE' && req.url.startsWith('/api/data/')){
        deleteData(req,res)
    }

    /// read file

    else if(req.method === 'GET' && req.url.startsWith('/public/index.html')){
        getHtmlFile(req,res)
    }
    else if(req.method === 'GET' && req.url.startsWith('/public/index.css')){
        getCssFile(req,res)
    }
    else if(req.method === 'GET' && req.url.startsWith('/public/bhargav.js')){
        getJsFile(req,res)
    }
    else{
       res.write("url not found")
       res.end()
    }

    
}).listen(5000,()=>{
    console.log(`server listen on 5000`)
})