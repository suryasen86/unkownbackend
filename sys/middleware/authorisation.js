const Constant=require('../../Constant') 
const {verifyToken}=require('../utils/auth')
const authoriseRequest = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
          return  res.status(Constant.statusmandatory).send({status:Constant.statusmandatory,message:Constant.notoken_msg})
        }
       

        let user=await verifyToken(token)
        if(!user){
            return  res.status(Constant.statusmandatory).send({status:Constant.statusmandatory,message:"Invalid Token"})
        }
        req.user_id=user.user_id
        req.user_phone=user.user_phone
        req.role_id=user.role_id

        next();
    }
    catch (error) {
        let statusCode = 401;
        res
            .status(statusCode)
            .send({ code: statusCode, message: error.message, errors: [] });
    }
}



module.exports = {
    authoriseRequest
}