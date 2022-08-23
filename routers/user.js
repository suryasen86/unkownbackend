const express = require('express')
const RouteHandler = express.Router()

const {customError} =require('../sys/utils/errorHander')
const { validate } = require("../sys/middleware/validator")
const {generatePassHash,compareHash}=require('../sys/utils')

const Constant=require('../Constant')

RouteHandler.post('/login',async (req,res)=>{
    res.send("Login")
})

RouteHandler.post('/getotp',async (req,res)=>{
    res.send("otp")
})

RouteHandler.post('/verifyotp',async(req,res)=>{
    res.send("verifyotp")
})

RouteHandler.post('/resendotp',async(req,res)=>{
    res.send('resendotp')
})


module.exports = RouteHandler;