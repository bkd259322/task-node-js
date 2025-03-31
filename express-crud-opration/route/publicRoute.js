const Router = require('express').Router()
const fs = require('fs')

const { getDataWithHtml } = require('../controler/getDataWithHtml')
const { getDataWithCss } = require('../controler/getDataWithCss')
const { getDataWithJs } = require('../controler/getDataWithJs')

Router.get('/index.html',(req, res)=>{
    getDataWithHtml(req,res)
 });
 
 Router.get('/style.css',(req, res)=>{
     getDataWithCss(req,res)
 });
 
 Router.get('/script.js',(req, res)=>{
    getDataWithJs(req,res)
 });
 

 module.exports = Router