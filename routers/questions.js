const express = require('express')
const RouteHandler = express.Router()

const {customError} =require('../sys/utils/errorHander')
const { validate } = require("../sys/middleware/validator")


const Constant=require('../Constant')

RouteHandler.get('/',async (req,res)=>{
    res.send("select all")
})
RouteHandler.get('/:id',async (req,res)=>{
    res.send("get specify category")
})
RouteHandler.post('/',async (req,res)=>{
    res.send("created succes full")
})

RouteHandler.patch('/:id',async(req,res)=>{
    res.send("patched success full")
})

RouteHandler.delete('/:id',async(req,res)=>{
    res.send('deletd succesfully')
})




module.exports = RouteHandler;