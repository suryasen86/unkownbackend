const express = require('express')
const RouteHandler = express.Router()

const {customError} =require('../sys/utils/errorHander')
const { validate } = require("../sys/middleware/validator")
const asyncHandler = require('express-async-handler')
const {uploadtoserver} =require('../sys/utils/fileupload')
 
 
const {create,patch} =require('../sys/validators/subcategoryValidationRules')
 
const Constant=require('../Constant')
const subcatgeory = require('../helpers/subcatgeory')

RouteHandler.get('/',async (req,res)=>{
    try {
        let data =await subcatgeory.getAll(req.body)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"Subcategory get all",error,res)
    }
     
})
RouteHandler.get('/:id',async (req,res)=>{
    let {id}=req.params
    let data=await subcatgeory.getbyId(id)
    res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
})
RouteHandler.post('/',create(),validate,async (req,res)=>{
    let {user_id=1}=req
    let {subcat_img,product_img,poster_img,promo_img}=req.body
    try {   
        req.body.created_by=user_id
        if(subcat_img){
            let uploded=await uploadtoserver(subcat_img)
            console.log(uploded)
            req.body.subcat_img=uploded?.url
        } 
        if(product_img){
            let uploded=await uploadtoserver(product_img)
            req.body.product_img=uploded?.url
            console.log(uploded)
        }
        if(poster_img){
            let uploded=await uploadtoserver(poster_img)
            req.body.poster_img=uploded?.url
            console.log(uploded)
        }
        if(promo_img){
            let uploded=await uploadtoserver(promo_img)
            req.body.promo_img=uploded?.url
            console.log(uploded)
        }
        let data= await subcatgeory.create(req.body)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        console.log(error)
        return customError(Constant.statusissue_code,error.message,"Subcategory Create",error,res)
    }
     
   
})

RouteHandler.patch('/:id',patch(),validate,
asyncHandler(async(req,res)=>{
    
    try {   
        let {id}=req.params
        let {is_active}=req.body
        let data=await subcatgeory.patch(id,is_active)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"Subcategory patch",error,res)
    }
})
)

RouteHandler.put('/:id',
asyncHandler(async(req,res)=>{
    let {subcat_name,subcat_desc,subcat_img,updated_by=1} =req.body
    let updateQuery={}
    try {   
        let {id}=req.params
        if(subcat_name)updateQuery.subcat_name=subcat_name
        if(subcat_desc)updateQuery.subcat_desc=subcat_desc
        if(subcat_img){
            let uploded=await uploadtoserver(subcat_img)
            console.log(uploded)
            updateQuery.subcat_img=uploded.url
        }   
        
        if(Object.keys(updateQuery).length==0){
            return customError(Constant.statusissue_code,"Invalid Request","Subcategory update",null,res)
        }
        updateQuery.updated_by=updated_by
        let data=await subcatgeory.update(id,updateQuery)
        res.send({status:Constant.statusOK_code,message:Constant.statusOK_msg,data})
    } catch (error) {
        return customError(Constant.statusissue_code,error.message,"Subcategory update",error,res)
    }
})
)





module.exports = RouteHandler;