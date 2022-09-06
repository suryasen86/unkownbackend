
const { Category, sequelizeCon, CatgeoryAndAge } = require('../models/sql/')
const Constant = require('../Constant')
const sequelize = require("sequelize");
const { uploadtoserver, upload } = require('../sys/utils/fileupload')
class CategoryPersistence {
    async getAll() {
        let query = `SELECT * FROM mst_category   `
        const resData = await sequelizeCon.query(query, {


            type: sequelize.QueryTypes.SELECT, raw: true

        });
        return resData
    }
    async create(incoming) {
        let impageUploded, data, Key;
        let { body } = incoming
        if (incoming.files?.cat_img?.name) {
            Key = Date.now().toString() + incoming.files.cat_img.name;
            data = incoming.files.cat_img.data;
            impageUploded = await upload(Key, '/catgoery/', data)
            body.cat_img = Key
        }
        if (incoming.files?.product_img?.name) {
            Key = Date.now().toString() + incoming.files.product_img.name;
            data = incoming.files.product_img.data;
            impageUploded = await upload(Key, '/catgoery/', data)
            body.product_img = Key
        }
        if (incoming.files?.poster_img?.name) {
            Key = Date.now().toString() + incoming.files.poster_img.name;
            data = incoming.files.poster_img.data;
            impageUploded = await upload(Key, '/catgoery/', data)
            body.poster_img = Key
        }
        if (incoming.files?.promo_img?.name) {
            Key = Date.now().toString() + incoming.files.promo_img.name;
            data = incoming.files.promo_img.data;
            impageUploded = await upload(Key, '/catgoery/', data)
            body.promo_img = Key
        }

        // return body
        body.is_active = 1
        return await Category.create(body)
    }
    async getById(id) {
        let newQueery = ` SELECT * FROM db_unknown.mst_category where cat_id = ${id}`

        const resData = await sequelizeCon.query(newQueery, {


            type: sequelize.QueryTypes.SELECT, raw: true

        });
        if(resData.length){
            return resData[0]
        }else{
            return false
        }
        
    }
    async update(id, incoming) {
        return await Category.update(incoming, { where: { cat_id: id } });
    }
    async findByGenderAndAge(gender, from_age, to_age, age_id) {

        let newQueery = `SELECT DISTINCT mst_category.cat_id as aw, 
        mst_category.* FROM db_unknown.mst_category inner join map_category_age on 
        mst_category.cat_id= map_category_age.cat_id where mst_category.is_active =1 and gender in (2,${gender})
        and map_category_age.age_id = ${age_id}
        `

        const resData = await sequelizeCon.query(newQueery, {


            type: sequelize.QueryTypes.SELECT, raw: true

        });
        return resData
    }
    async CatgeoryAndAge(cat_id, age_ids) {
        if (age_ids.length) {
            for (let index = 0; index < age_ids.length; index++) {
                const element = age_ids[index];
                await CatgeoryAndAge.create({
                    cat_id,
                    age_id: element,
                    is_active: 1,
                    created_by: 1
                })
            }
        }
        return true
    }
}

module.exports = new CategoryPersistence()