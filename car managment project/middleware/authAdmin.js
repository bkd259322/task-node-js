const jwt = require("jsonwebtoken");
const { adminSessions } = require("../data/store");
const adminSecret = "adminSecretKey";

module.exports =  function verifyUser(req,res,next){
  next()
}


module.exports = function(req,res,next){
  const token = req.headers.authorization?.split(" ")[1];
  if(!token || !adminSessions.includes(token)){
    return res.status(403).json({ message: "unautorise admin" });
  }
   
  try{
    const tokenerify = jwt.verify(token,adminSecret);
    req.admin = tokenerify;
    req.token = token;
    next();
  }catch{
    return res.status(403).json({ message: "invalid tokenn"});
  }
}; 
