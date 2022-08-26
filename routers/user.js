const express = require('express')
const RouteHandler = express.Router()

const {customError} =require('../sys/utils/errorHander')
const { validate } = require("../sys/middleware/validator")
const {generatePassHash,compareHash}=require('../sys/utils')
const {authoriseRequest} =require('../sys/middleware/authorisation')
const Constant=require('../Constant')
const {getotp,verifyotp,assignageandgender,getProductForAnswer} =require('../sys/validators/userValidationRules')
const UserHelper=require('../helpers/user')
RouteHandler.post('/login',async (req,res)=>{
    res.send("Login")
})

RouteHandler.post('/getotp',getotp(),validate,async (req,res)=>{
    try {
        let data=await UserHelper.getOtp(req.body)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,`get otp ${JSON.stringify(req.body)}`,error,res)
    }
    
})

RouteHandler.post('/verifyotp',verifyotp(),validate,async(req,res)=>{
    try {
        let data= await UserHelper.verifyotp(req.body)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,`verify otp ${JSON.stringify(req.body)}`,error,res)
    }
})  

RouteHandler.post('/assignageandgender',authoriseRequest,assignageandgender(),validate,async(req,res)=>{
    let {user_id}=req
    try {
        req.body.updated_by=user_id
       
        
        let data= await UserHelper.assignAgeAndGender(req.body,user_id)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,`assignageandgender ${JSON.stringify(req.body)}`,error,res)
    }
})  


RouteHandler.get('/getcatandsubcat',authoriseRequest,async(req,res)=>{
    try {
        let {user_id}=req
        let data=await UserHelper.getCategoryAndSubcategory(user_id)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,`assignageandgender ${JSON.stringify(req.body)}`,error,res)
    }
})

RouteHandler.post('/products',getProductForAnswer(),validate,authoriseRequest,async(req,res)=>{
    try {
        let {user_id}=req
        let data=await UserHelper.getProducts(req.body)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,`get Products user ${JSON.stringify(req.body)}`,error,res)
    }
})
RouteHandler.post('/cart',authoriseRequest,async(req,res)=>{
    try {
        let {user_id}=req
        req.body.user_id=user_id
        let data=await UserHelper.createCart(req.body)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,`get Products user ${JSON.stringify(req.body)}`,error,res)
    }
})




module.exports = RouteHandler;