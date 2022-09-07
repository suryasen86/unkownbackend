
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
        let {is_active=[1,0] ,cat_id,subcat_id,questions_id}=incoming
        
           
        let query = `SELECT mst_questions.*  FROM test.mst_questions  where is_active in (${is_active})`
        // if(Object.keys(incoming).length>0){
        //     query += ` where`
        // }
        // if(is_active ==0 || is_active==1) query += ` is_active= ${is_active}`
        if(cat_id) query += `and cat_id= ${cat_id}`
        if(questions_id) query += `and questions_id= ${questions_id}`
        if(subcat_id) query += `and subcat_id= ${subcat_id}`
        query += ` order by mst_questions.createdAt ;`
        const resData = await sequelizeCon.query(query, {


            type: sequelize.QueryTypes.SELECT, raw: true

        });
        return resData
    }
    async patch(incoming,id){
        
        await Questions.update(incoming, { where: { questions_id:id  } });
    }
}
module.exports =new questionsPersistence()