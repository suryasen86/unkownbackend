const express = require('express')
const RouteHandler = express.Router()

const {customError} =require('../sys/utils/errorHander')
const { validate } = require("../sys/middleware/validator")

const {create} =require('../sys/validators/questionValidation')
const Constant=require('../Constant')
const questionsHelper=require('../helpers/questions')
RouteHandler.get('/',async (req,res)=>{
    // 
   try {
    let data= await questionsHelper.getAll(req.body)
    res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data}) 
   } catch (error) {
    return customError(Constant.statusissue_code,error.message,"question get all",error,res) 
   }
})
RouteHandler.get('/:id',async (req,res)=>{
    res.send("get specify category")
})
RouteHandler.post('/',create(),validate,async (req,res)=>{
    let {user_id=1}=req
        try {
            let incoming=req.body
            incoming.user_id=user_id
            if(!incoming.cat_id && !incoming.subcat_id){
                 
                return customError(Constant.statusissue_code,`Please specify category or subcatgeory`,"question creation",null,res)  
            }
            if(incoming.cat_id && incoming.subcat_id){
                 
                return customError(Constant.statusissue_code,`Please Select one category Or Subcateogy`,"question creation",null,res)  
            }
            let data= await questionsHelper.create(incoming)
            res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data}) 
            
        } catch (error) {
            return customError(Constant.statusissue_code,error.message,"question creation",error,res)  
        }
    

   
})

RouteHandler.patch('/:id',async(req,res)=>{
    res.send("patched success full")
})

RouteHandler.delete('/:id',async(req,res)=>{
    res.send('deletd succesfully')
})




module.exports = RouteHandler;