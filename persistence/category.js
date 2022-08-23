
const { Category,sequelizeCon } = require('../models/sql/')
const Constant = require('../Constant')
const sequelize = require("sequelize");
class CategoryPersistence {
    async getAll() {
        return await Category.findAll()
    }
    async create(incoming) {
        incoming.is_active = Constant.active
        return await Category.create(incoming)
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
        if(from_age){
            query += ` and age_from >= ${from_age}`
        }
        if (to_age){
            query += ` and age_to <= ${to_age}` 
        }
        const resData = await sequelizeCon.query(query, {


            type: sequelize.QueryTypes.SELECT, raw: true

        });
        return resData
    }
}

module.exports = new CategoryPersistence()