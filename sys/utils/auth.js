const jwt = require("jsonwebtoken");

const Constants = require(`../../Constant`);

const appSecret = Constants.secret;

const tokenIssuer = Constants.issuer;

const logger = require("./logger");

exports.generateToken = (userData, options) => {

    const token = jwt.sign(userData, appSecret, {issuer: tokenIssuer});
  
    return token;
  
  };
  
 exports.verifyToken=async (token)=>{
    let decoded = false;
    try {
        decoded = await jwt.verify(token, appSecret); 
    } catch (error) {
        logger.error("In verify token error occured while decoding token ", error);
    
    }  
    return decoded

 } 