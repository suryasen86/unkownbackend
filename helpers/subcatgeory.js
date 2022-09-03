
const subcatgeoryPersistence=require('../persistence/subcatgeory')
class subcatgeoryHelper{
    async create(incoming){
        return await subcatgeoryPersistence.create(incoming)
    }   
    async getAll(incoming){
        return await subcatgeoryPersistence.getall(incoming)
    }
    async getbyId(id){
        return await subcatgeoryPersistence.getbyId(id)
    }
    async patch(id,is_active){
        return new Promise( async(resolve,reject)=>{
            let subcat =await this.getbyId(id)
            if(!subcat){
                reject(new Error("Subcategory not found"))
            }
            else{
                resolve(await subcatgeoryPersistence.patch(id,is_active))
            }
        })
      
    }
    async update(id,incoming){
        return new Promise( async(resolve,reject)=>{
            let subcat =await this.getbyId(id)
            if(!subcat){
                reject(new Error("Subcategory not found"))
            }
            else{
                resolve(await subcatgeoryPersistence.update(id,incoming))
            }
        })
    }
}
module.exports=new subcatgeoryHelper()