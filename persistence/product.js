const Constant = require("../Constant")
const {Product} = require("../models/sql/")
const { Category,sequelizeCon } = require('../models/sql/')
const sequelize = require("sequelize");
const {uploadtoserver}=require('../sys/utils/fileupload')
class productPersistence{
    async create(incoming){
        incoming.is_active=Constant.active
        let uploaded=await uploadtoserver(incoming.product_img)
        incoming.product_img=uploaded.url
        return await Product.create(incoming)
    }
    async getAll(){
        return await Product.findAll()
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