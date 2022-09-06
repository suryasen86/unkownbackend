
const subcatgeoryPersistence=require('../persistence/subcatgeory')
const {getimgdata}=require('../sys/utils/fileupload')
class subcatgeoryHelper{
    async create(incoming){
        return await subcatgeoryPersistence.create(incoming)
    }   
    async getAll(incoming){
        let finalresponse=[]
        let data= await subcatgeoryPersistence.getall(incoming)
        for (let index = 0; index < data.length; index++) {
            let element = data[index];
            element.subcat_img=await getimgdata(element.subcat_img,'/subcatgoery/')
            element.poster_img=await getimgdata(element.poster_img,'/subcatgoery/')
            element.promo_img=await getimgdata(element.promo_img,'/subcatgoery/')
            element.product_img=await getimgdata(element.product_img,'/subcatgoery/')
            finalresponse.push(element)
        }
        return finalresponse
    }
    async getbyId(id){
        let subcatgeory= await subcatgeoryPersistence.getbyId(id)
        if(subcatgeory){
            subcatgeory.subcat_img=await getimgdata(subcatgeory.subcat_img,'/subcatgoery/')
            subcatgeory.poster_img=await getimgdata(subcatgeory.poster_img,'/subcatgoery/')
            subcatgeory.promo_img=await getimgdata(subcatgeory.promo_img,'/subcatgoery/')
            subcatgeory.product_img=await getimgdata(subcatgeory.product_img,'/subcatgoery/')
        }
        return subcatgeory
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