const express = require('express')
const RouteHandler = express.Router()

const {customError} =require('../sys/utils/errorHander')
const { validate } = require("../sys/middleware/validator")
const {generatePassHash,compareHash}=require('../sys/utils')
const {login} =require('../sys/validators/adminValidationRules')
const {Admin}=require('../models/sql/')
const Constant=require('../Constant')
const AdminHelper=require('../helpers/admin')

RouteHandler.post('/login',login(),validate,async (req,res)=>{
    try {
     
        let admin =await AdminHelper.login(req.body)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data:admin})
     
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"Admin Login",error,res)
    }  
})

RouteHandler.post('/register',async (req,res)=>{
    res.send("otp")
})

module.exports = RouteHandler;