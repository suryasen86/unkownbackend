const express = require('express')
const RouteHandler = express.Router()

const {customError} =require('../sys/utils/errorHander')
const { validate } = require("../sys/middleware/validator")
const {generatePassHash,compareHash}=require('../sys/utils')

const Constant=require('../Constant')

RouteHandler.post('/login',async (req,res)=>{
    res.send("Login")
})

RouteHandler.post('/register',async (req,res)=>{
    res.send("otp")
})

module.exports = RouteHandler;