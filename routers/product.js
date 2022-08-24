const express = require('express')
const RouteHandler = express.Router()

const {customError} =require('../sys/utils/errorHander')
const { validate } = require("../sys/middleware/validator")

const {create,patch,idValidation} =require('../sys/validators/productValidationRules')
const Constant=require('../Constant')
const productHelper=require('../helpers/product')
RouteHandler.get('/',async (req,res)=>{

   let {user_id=1}=req
    try {
        
        let data=await productHelper.getAll()
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data}) 
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"product get all",error,res)
    }
})
RouteHandler.get('/:id',idValidation(),validate,async (req,res)=>{
    try {let {id}=req.params
        
        let data=await productHelper.getProductById(id)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data}) 
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"product get by id",error,res)
    }
})
RouteHandler.post('/',create(),validate,async (req,res)=>{
    let {user_id=1}=req
    try {
        req.body.created_by=user_id
        let data=await productHelper.create(req.body)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data}) 
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"product create",error,res)
    }
     
})

RouteHandler.patch('/:id',idValidation(),patch(),validate,async(req,res)=>{
    let {user_id=1}=req
    try {
        let {id}=req.params
        req.body.updated_by=user_id
        let data=await productHelper.patch(req.body,id)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data}) 
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"product patch",error,res)
    }
})

RouteHandler.put('/:id',idValidation(),validate,async(req,res)=>{
    let {user_id=1}=req
    try {
        let {id}=req.params
        req.body.updated_by=user_id
        let data=await productHelper.update(req.body,id)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data}) 
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"product patch",error,res)
    }
})




module.exports = RouteHandler;