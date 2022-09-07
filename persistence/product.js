const Constant = require("../Constant")
const {Product} = require("../models/sql/")
const { Category,sequelizeCon } = require('../models/sql/')
const sequelize = require("sequelize");
const {uploadtoserver,upload}=require('../sys/utils/fileupload')
class productPersistence{
    async create(incoming){
        let body=incoming.body
        let impageUploded,data,Key;
        if(incoming.files?.product_img?.name){
            Key =Date.now().toString() + incoming.files.product_img.name;
            data = incoming.files.product_img.data;
            impageUploded=await upload(Key,'/products/',data)
            body.product_img=Key
        }   
       
        body.is_active=Constant.active
        
        
        return await Product.create(body)
         
    }
    async getAll(incoming){
        let {is_active}=incoming
        let query = `SELECT * FROM mst_product  `
        if(is_active==1) query += 'where is_active = 1'
        const resData = await sequelizeCon.query(query, {


            type: sequelize.QueryTypes.SELECT, raw: true

        });
        return resData
         
    }
    async getProductById(id){{
        return Product.findOne({
            where:{
                product_id:id
            }
        })
    }}
    async patch(incoming,id){
        if(incoming.product_img){
            let uploaded=await uploadtoserver(incoming.product_img)
            incoming.product_img=uploaded.url
        }
        return Product.update(incoming,{
            where:{
                product_id:id
            }
        })
    }
    async getBulkProductsWithIds(product_ids,is_active){
        let query = `SELECT * FROM mst_product  where product_id in (${product_ids}) `
        if(is_active) query += ` is_active=${is_active}`
        const resData = await sequelizeCon.query(query, {


            type: sequelize.QueryTypes.SELECT, raw: true

        });
        return resData
    }
}
module.exports =new productPersistence