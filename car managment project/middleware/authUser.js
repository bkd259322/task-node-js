const jwt = require("jsonwebtoken");
const { userSessions} = require("../data/store");
const UserSecret = "userSecretKey";

module.exports = function(req,res,next){
  const token = req.headers.authorization?.split(" ")[1];
  if(!token || !userSessions.includes(token)){
    return res.status(403).json({ message: "unauthorise user"});
  }

  try{
    const verifyToken = jwt.verify(token,UserSecret);
    req.user = verifyToken;
    req.token = token;
    next();
  }catch{
    return res.status(403).json({ message: "Invalid token" });
  }
};
