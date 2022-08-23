const jwt = require("jsonwebtoken");
const { reject } = require("../../Constant");

const Constants = require(`../../Constant`);

const appSecret = Constants.secret;

const tokenIssuer = Constants.issuer;

const logger = require("./logger");

exports.generateToken = async(userData, options) => {
     
        const token =await jwt.sign(userData, appSecret, {issuer: tokenIssuer});
  
    return token      
    

   
  
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