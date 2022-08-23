
const {Category}=require('../models/sql/')
const Constant=require('../Constant')
class CategoryPersistence{
    async getAll(){
        return await Category.findAll()
    }
    async create(incoming){
        incoming.is_active=Constant.active
        return await Category.create(incoming)
    } 
    async getById(id){
        return await Category.findOne({where:{
            cat_id:id
        }})
    }
    async update(id,incoming){
        return await Category.update(incoming, { where: { cat_id: id } });
    }
}

module.exports=new CategoryPersistence()