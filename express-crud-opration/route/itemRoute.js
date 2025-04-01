
const Router  = require('express').Router()
const fs = require('fs')

const {getData} = require('../controler/getData')
const {getDataWithId} = require('../controler/getDataWithId')
const { addData } = require('../controler/addData')
const { updateData } = require('../controler/updateData.')
const { deleteData } = require('../controler/deleteData')

Router.get('/',(req,res)=>{
    getData(req,res)
})

Router.get('/:id',(req,res)=>{
   getDataWithId(req,res)
})

Router.post('/',(req,res)=>{
   [
      check("sName").isString().notEmpty().withMessage("Name is required"),
      check("nPrice").isFloat({ gt: 0 }).withMessage("Price must be a positive number"),
      check("nQuantity").isInt({ gt: 0 }).withMessage("Quantity must be a positive integer"),
      validateStatus,
  validateRequest,
  ],
   addData(req,res)
})

Router.put('/:id', (req, res) => {
   [
      check("sName").isString().notEmpty().withMessage("Name is required"),
      check("nPrice").isFloat({ gt: 0 }).withMessage("Price must be a positive number"),
      check("nQuantity").isInt({ gt: 0 }).withMessage("Quantity must be a positive integer"),
      validateStatus,
  validateRequest,
  ],
   updateData(req,res)
});


Router.delete('/:id', (req, res) => {
  deleteData(req,res)
});


module.exports = Router