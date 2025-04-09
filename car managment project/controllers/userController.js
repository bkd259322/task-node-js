const jwt = require("jsonwebtoken");
const generateOTP = require("../utils/otpGenerator");
const { userOTPs,userSessions,cars} = require("../data/store");
const UserSecret = "userSecretKey";

exports.login = (req,res)=>{
  const {email} = req.body;
  if(!email) 
  return res.status(400).json({ message: "email require" });

  const otp = generateOTP();
  const expire = Date.now() + 2 * 60 * 1000;
  userOTPs[email] = {otp,expire};

  res.json({message:"otp send",otp});
};

exports.verify = (req,res)=>{
  const {email,otp} = req.body;
  const data = userOTPs[email];

  if(!data || data.otp !== otp) 
  return res.status(400).json({ message: "invalid otp" });
  if(Date.now() > data.expire){
    delete userOTPs[email];
    return res.status(400).json({ message: "otp expire" });
  }

  delete userOTPs[email];
  const token = jwt.sign({email,role:"user"},
   UserSecret,{expiresIn:"1h"});
  if(userSessions.length >= 5) userSessions.shift();
  userSessions.push(token);

  res.json({ message: "user login ",token});
};

exports.logout = (req,res)=>{
  const {token} = req;
  const index = userSessions.indexOf(token);
  if(index !== -1)
  userSessions.splice(index,1);
  res.json({ message: "user logout"});
};

exports.getCars = (req,res)=>{
  res.json({cars});
};
