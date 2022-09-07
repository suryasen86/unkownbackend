
const {Answer} = require("../models/sql/")
const { sequelizeCon } = require('../models/sql/')
const sequelize = require("sequelize");
class answerPersistance{
 async create(incoming){
    return await Answer.create(incoming)
 }
 async findByQuestion(questions_id){
    
    let data=await Answer.findAll({
        where:{
            questions_id
        }
    })
    // console.log(data)
     
    return data
 }
 async getAll(){
    return await Answer.findAll()
 }
 async allProductsKeys(answers){
    // console.log(answers)
  let   query = `  SELECT product_ids FROM test.mst_answer where answer_id in (${answers})  and is_active = 1  `
    const resData = await sequelizeCon.query(query, {


        type: sequelize.QueryTypes.SELECT, raw: true

    });
    return resData
 }
}
module.exports=new answerPersistance()