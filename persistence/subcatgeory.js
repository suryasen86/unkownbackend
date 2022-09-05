

const {Subcategory,sequelizeCon}=require('../models/sql/')
const Constant=require('../Constant')
const sequelize = require("sequelize");
const {uploadtoserver,upload,getimgdata}=require('../sys/utils/fileupload')
class subcatgeoryPersistence{
   async getall(incoming){
    let {is_active}=incoming
    let query =`select * from mst_subcat `
    if (is_active && is_active==1) query += ` where  is_active =${is_active}`
    if (is_active && is_active==0) query += ` where  is_active =${is_active}`
    const resData = await sequelizeCon.query(query, {


        type: sequelize.QueryTypes.SELECT, raw: true

    });
    return resData
   }
   async create(incoming){

    let impageUploded,data,Key;
    let {body} =incoming
    if(incoming.files?.subcat_img?.name){
        Key =Date.now().toString() + incoming.files.subcat_img.name;
        data = incoming.files.subcat_img.data;
        impageUploded=await upload(Key,'/subcatgoery/',data)
        body.subcat_img=Key
    }  
    if(incoming.files?.product_img?.name){
        Key =Date.now().toString() + incoming.files.product_img.name;
        data = incoming.files.product_img.data;
        impageUploded=await upload(Key,'/subcatgoery/',data)
        body.product_img=Key
    }  
    if(incoming.files?.poster_img?.name){
        Key =Date.now().toString() + incoming.files.poster_img.name;
        data = incoming.files.poster_img.data;
        impageUploded=await upload(Key,'/subcatgoery/',data)
        body.poster_img=Key
    }  
    if(incoming.files?.promo_img?.name){
        Key =Date.now().toString() + incoming.files.promo_img.name;
        data = incoming.files.promo_img.data;
        impageUploded=await upload(Key,'/subcatgoery/',data)
        body.promo_img=Key
    }   
   
    // return body
    body.is_active=1
    return await Subcategory.create(body)
   }
   async getbyId(id){
    let query =`select * from mst_subcat  where subcat_id =${id}`
    const resData = await sequelizeCon.query(query, {


        type: sequelize.QueryTypes.SELECT, raw: true

    });
    if(resData.length){
        let element=resData[0]
        element.subcat_img=await getimgdata(element.subcat_img,'/subcatgoery/')
        element.poster_img=await getimgdata(element.poster_img,'/subcatgoery/')
        element.promo_img=await getimgdata(element.promo_img,'/subcatgoery/')
        element.product_img=await getimgdata(element.product_img,'/subcatgoery/')
        return  element
    }else{
        return null
    }
    
   }
   async patch(id,is_active){
 
    return await Subcategory.update({is_active}, { where: { subcat_id: id } });
   }
   async update(id,incoming){
    return await Subcategory.update(incoming, { where: { subcat_id: id } });
   }
}
module.exports=new subcatgeoryPersistence()