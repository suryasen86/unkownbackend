
const Constant = require("../Constant")
const {Product,CartHdr,CartDtl} = require("../models/sql/")
const { Category,sequelizeCon } = require('../models/sql/')
const sequelize = require("sequelize");

class cartPersistence{
    async createCartHeader(incoming){
        return await CartHdr.create(incoming)
    }
    async createCartDetail(incoming){
        return await CartDtl.create(incoming)
    }
    async getCart(coupon){
        return await CartHdr.findOne({
            where:{
                coupon
            }
        })
    }
    async getCartDetail(cart_id){
        let query = `SELECT trans_cart_dtl.*, mst_product.* FROM db_unknown.trans_cart_dtl left join mst_product on  trans_cart_dtl.product_id = mst_product.product_id WHERE cart_id= ${cart_id}`
         
        const resData = await sequelizeCon.query(query, {


            type: sequelize.QueryTypes.SELECT, raw: true

        });
        return resData
    }
}
module.exports=new cartPersistence()