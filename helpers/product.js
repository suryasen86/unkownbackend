const productPersistence=require('../persistence/product')
class productHelper{
   async create(incoming){
        
       return await productPersistence.create(incoming)
    }
    async  getAll(){
        return await productPersistence.getAll()
    }
    async getProductById(id){
        return await productPersistence.getProductById(id)
    }
    async patch(incoming,id){
        return await productPersistence.patch(incoming,id)
    }
    async update(incoming,id){
        return await this.patch(incoming,id)
    }
}

module.exports=new productHelper()