


const {Admin}=require('../models/sql/')
const Constant=require('../Constant')

class AdminPersistence{
    async getAdmin(mobile){
         
        return await Admin.findOne({where:{
            user_phone:  mobile
        }})
    }
            
}

module.exports =new AdminPersistence()