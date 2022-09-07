const express = require('express')
const RouteHandler = express.Router()

const {customError} =require('../sys/utils/errorHander')
const { validate } = require("../sys/middleware/validator")
const {create,patch,idValidation}=require('../sys/validators/categoryValidationRules')
const categoryHelper =require('../helpers/category')
const Constant=require('../Constant')
const {uploadtoserver} =require('../sys/utils/fileupload')
RouteHandler.get('/',async (req,res)=>{
     
    try {   
        let data=await categoryHelper.getAll(req.query)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"category get all",error,res)
    }
    
})
RouteHandler.get('/:id',idValidation(),validate,async (req,res)=>{
    let {id}=req.params
    try {
      let data =await categoryHelper.getById(id) 
      res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"category specific",error,res)
    }
     
})
RouteHandler.post('/',create(),validate,async (req,res)=>{
    let {user_id=1}=req
    try {
        let {}=req.body
    
        req.body.created_by=user_id
        let data=await categoryHelper.create(req)
        return res.send(req.body)

        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"create category",error,res)
    }
     
})

RouteHandler.patch('/:id',idValidation(),patch(),validate, async(req,res)=>{
    let {user_id=1}=req
    try {
        let {id}=req.params
        req.body.updated_by=user_id
        let data = await categoryHelper.patch(id,req.body)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"create patch",error,res) 
    }
})

RouteHandler.put('/:id',idValidation(),validate,async(req,res)=>{
    let {user_id=1}=req
    try {   
        let {cat_img}=req.body
        let {id}=req.params
        if(cat_img){
            let uploded=await uploadtoserver(cat_img)
            req.body.cat_img=uploded.url
            console.log(uploded)
        }
        req.body.updated_by=user_id
        let data=await categoryHelper.update(id,req.body)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"update category",error,res)
    }
    
})

  


module.exports = RouteHandler;