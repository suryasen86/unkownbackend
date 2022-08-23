const CategoryPersistence=require('../persistence/category')
const SubcategoryHelper=require('../helpers/subcatgeory')
 
class catgeoryHelper {
    async getAll(){

        let resp =await CategoryPersistence.getAll()
        if(resp.length){
            await Promise.all(
                resp.map(async data => {
                    if(data && data.subcat_ids?.length>0){
                        let subcatArr=[]
                        data.subcat_ids=data.subcat_ids.split(",")
                         
                        await Promise.all(
                            data.subcat_ids.map(async element => {
                                
                                    let subCat=await SubcategoryHelper.getbyId(element)  
                                    if(subCat) subcatArr.push(subCat)
                            })
                        )
                        
                        data.subcat_ids=subcatArr
                    }
    
                })
            )
            
        }
        return resp
    }
    async create(incoming){
        return  new Promise(async (resolve,reject)=>{
            let {subcat_ids}=incoming
            if (subcat_ids.length){
                 
                subcat_ids.forEach(async element => {
                let subcat=await SubcategoryHelper.getbyId(element)
                if(!subcat){
                    reject(new Error(`Subcategory Not Exist ${element}`))
                }
                });
                incoming.subcat_ids=incoming.subcat_ids.toString();
            }
            resolve(await CategoryPersistence.create(incoming))
            
        })
    
    }
    async getById(id){
        let data 
        data=await CategoryPersistence.getById(id)
        if(data && data.subcat_ids?.length>0){
            let subcatArr=[]
            data.subcat_ids=data.subcat_ids.split(",")
             
            await Promise.all(
                data.subcat_ids.map(async element => {
                    
                        let subCat=await SubcategoryHelper.getbyId(element)  
                        if(subCat) subcatArr.push(subCat)  
                })
            )
            
            data.subcat_ids=subcatArr
        }
        return data
    }


    async update(id,incoming){
        let {cat_name,cat_img,cat_desc,age_from,age_to,gender,subcat_ids}=incoming
    
        return new Promise( async(resolve,reject)=>{
            let category=await this.getById(id)
            if(!category){
                reject(new Error("Category Not Found"))
            }
            let updateQuery={}
            if (cat_name)updateQuery.cat_name=cat_name
            if (cat_img)updateQuery.cat_img=cat_img
            if (cat_desc)updateQuery.cat_desc=cat_desc
            if (age_from)updateQuery.age_from=age_from
            if (age_to)updateQuery.age_to=age_to
            if (gender)updateQuery.gender=gender
            if (subcat_ids && subcat_ids.length){
                subcat_ids.forEach(async element => {
                    let subcat=await SubcategoryHelper.getbyId(element)
                    if(!subcat){
                        reject(new Error(`Subcategory Not Exist ${element}`))
                    }
                    });
                    incoming.subcat_ids=incoming.subcat_ids.toString();
            }
            resolve(await CategoryPersistence.update(id,incoming))

        })
    }

    async patch(id,incoming){
        return new Promise(async (resolve,reject)=>{
            let category=await this.getById(id)
            if(!category){
                reject(new Error("Category Not Found"))
            }
            resolve( await this.update(id,incoming))
        })
       
    }
}

module.exports =new catgeoryHelper()