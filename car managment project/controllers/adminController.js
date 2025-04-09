const jwt = require("jsonwebtoken");
const { cars,adminSessions,AdminIdPassword} = require("../data/store");
const adminSecret = "adminSecretKey";

exports.login =(req,res)=>{
  const {username,password} = req.body;
  if(username === AdminIdPassword.username && password === AdminIdPassword.password){
    const token =  jwt.sign({username,role:"admin"},adminSecret,{expiresIn:"1h"});
    if(adminSessions.length >= 2)
     adminSessions.shift();
    adminSessions.push(token);
    return res.json({ message:"admin login succesfullt",token});
  }
  res.status(401).json({message: "invelid admin details"});
};

exports.logout = (req,res)=>{
  const {token} = req;
  const index = adminSessions.indexOf(token);
  if(index !== -1)
  adminSessions.splice(index, 1);
  res.json({ message: "admin logout " });
};

exports.addCar = (req,res)=>{
  cars.push(req.body);
  console.log(cars)
  res.status(201).json({message: "car add", car: req.body});
};

exports.updateCar = (req,res)=>{
  const {id} = req.params;
  console.log(cars,"upadate")
  const index = cars.findIndex(c => c.id === id);
  if(index !== -1){
    cars[index] = { ...cars[index], ...req.body };
    return res.json({ message: "car update", car: cars[index]});
  }
  res.status(404).json({ message: "car not found" });
};

exports.deleteCar = (req,res)=>{
  const {id} = req.params;
  const index = cars.findIndex(c => c.id === id);
  if(index !== -1) {
    const deleted = cars.splice(index, 1);
    return res.json({ message: "Car deleted", car: deleted[0]});
  }
  res.status(404).json({ message: "Car not found"});
};
