
const Constant = require("../Constant")
const {Questions} = require("../models/sql/")
const { sequelizeCon } = require('../models/sql/')
const sequelize = require("sequelize");
class questionsPersistence{
    async create (incoming){
        return await Questions.create(incoming)
    }
    async getAll(incoming){
        delete incoming.answers
        let {is_active,cat_id,subcat_id,questions_id}=incoming
        
           
        let query = `SELECT mst_questions.*  FROM db_unknown.mst_questions `
        if(Object.keys(incoming).length>0){
            query += ` where`
        }
        if(is_active ==0 || is_active==1) query += ` is_active= ${is_active}`
        if(cat_id) query += ` cat_id= ${cat_id}`
        if(questions_id) query += ` questions_id= ${questions_id}`
        if(subcat_id) query += ` subcat_id= ${subcat_id}`
        query += ` order by mst_questions.createdAt ;`
        const resData = await sequelizeCon.query(query, {


            type: sequelize.QueryTypes.SELECT, raw: true

        });
        return resData
    }
}
module.exports =new questionsPersistence()