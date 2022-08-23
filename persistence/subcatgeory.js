

const {Subcategory}=require('../models/sql/')
const Constant=require('../Constant')

class subcatgeoryPersistence{
   async getall(){
    return await Subcategory.findAll();
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