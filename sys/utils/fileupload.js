const uploadservice = {};
const { cloudinary } = require("../../connectors/cloudinary");

uploadservice.uploadtoserver = async (filedata) => {
    return new Promise(async (reject,resolve)=>{
        try {
            let uploadData= await cloudinary.uploader.upload(filedata, {
                upload_preset: 'dev_setups',
            });
            resolve(uploadData)
        } catch (error) {
            reject(error)
        }
    })
   
   
     

}

module.exports = uploadservice;
