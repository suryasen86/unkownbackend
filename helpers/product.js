const productPersistence=require('../persistence/product')
const {getimgdata}=require('../sys/utils/fileupload')
class productHelper{
   async create(incoming){
        
       return await productPersistence.create(incoming)
    }
    async  getAll(){
        let finalResponse=[]
        let data=await productPersistence.getAll()
            for (let index = 0; index < data.length; index++) {
                let element = data[index];
                element.product_img=await getimgdata(element.product_img,'/products/')
                finalResponse.push(element)
            }
        return finalResponse
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
    async checkMultipleProductExistOrNot(product_ids){
        let arr=[]
        let allProducts=await this.getAll()
        for (let index = 0; index < product_ids.length; index++) {
            const element = product_ids[index];
            let product=allProducts.find(e=>e.product_id==element)
            if(!product)throw new Error(`Product Not Found with error ${element}`)
            if(product)arr.push(product)
        }
        
        return [...new Set(arr)]
    }
    async getBulkProductsWithIds(product_ids){
        return await productPersistence.getBulkProductsWithIds(product_ids)
    }
}

module.exports=new productHelper()