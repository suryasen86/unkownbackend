
const { Category,sequelizeCon } = require('../models/sql/')
const Constant = require('../Constant')
const sequelize = require("sequelize");
const {uploadtoserver,upload}=require('../sys/utils/fileupload')
class CategoryPersistence {
    async getAll() {
        let query = `SELECT * FROM mst_category   `
        const resData = await sequelizeCon.query(query, {


            type: sequelize.QueryTypes.SELECT, raw: true

        });
        return resData
    }
    async create(incoming) {
        let impageUploded,data,Key;
        let {body} =incoming
        if(incoming.files?.cat_img?.name){
            Key =Date.now().toString() + incoming.files.cat_img.name;
            data = incoming.files.cat_img.data;
            impageUploded=await upload(Key,'/catgoery/',data)
            body.cat_img=Key
        }  
        if(incoming.files?.product_img?.name){
            Key =Date.now().toString() + incoming.files.product_img.name;
            data = incoming.files.product_img.data;
            impageUploded=await upload(Key,'/catgoery/',data)
            body.product_img=Key
        }  
        if(incoming.files?.poster_img?.name){
            Key =Date.now().toString() + incoming.files.poster_img.name;
            data = incoming.files.poster_img.data;
            impageUploded=await upload(Key,'/catgoery/',data)
            body.poster_img=Key
        }  
        if(incoming.files?.promo_img?.name){
            Key =Date.now().toString() + incoming.files.promo_img.name;
            data = incoming.files.promo_img.data;
            impageUploded=await upload(Key,'/catgoery/',data)
            body.promo_img=Key
        }   
       
        // return body
        body.is_active=1
        return await Category.create(body)
    }
    async getById(id) {
        return await Category.findOne({
            where: {
                cat_id: id
            }
        })
    }
    async update(id, incoming) {
        return await Category.update(incoming, { where: { cat_id: id } });
    }
    async findByGenderAndAge(gender, from_age, to_age) {
        let query = `SELECT * FROM mst_category  where is_active =${Constant.active}`
        if(gender){
            query += ` and gender =${gender}`
        }
        if(from_age && to_age){
            query += ` and age_from >= ${from_age}  and age_to <= ${to_age}`
        }
        if (from_age && !to_age ){
            query += ` and age_from >= ${from_age}` 
        }
        if (!from_age && to_age ){
            query += ` and age_to >= ${to_age}` 
        }
        const resData = await sequelizeCon.query(query, {


            type: sequelize.QueryTypes.SELECT, raw: true

        });
        return resData
    }
}

module.exports = new CategoryPersistence()