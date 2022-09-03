

const {Subcategory,sequelizeCon}=require('../models/sql/')
const Constant=require('../Constant')
const sequelize = require("sequelize");

class subcatgeoryPersistence{
   async getall(incoming){
    let {is_active}=incoming
    let query =`select * from mst_subcat `
    if (is_active && is_active==1) query += ` where  is_active =${is_active}`
    if (is_active && is_active==0) query += ` where  is_active =${is_active}`
    const resData = await sequelizeCon.query(query, {


        type: sequelize.QueryTypes.SELECT, raw: true

    });
    return resData
   }
   async create(data){
    data.is_active=1
    return await Subcategory.create(data)
   }
   async getbyId(id){
    return await Subcategory.findOne({
        where:{
            subcat_id:id
        }
    })
   }
   async patch(id,is_active){
 
    return await Subcategory.update({is_active}, { where: { subcat_id: id } });
   }
   async update(id,incoming){
    return await Subcategory.update(incoming, { where: { subcat_id: id } });
   }
}
module.exports=new subcatgeoryPersistence()