const uploadservice = {};
const { cloudinary } = require("../../connectors/cloudinary");
const AWS = require("aws-sdk");
const dotenv=require('dotenv');
dotenv.config({path:'../../.env'})
const s3Client = new AWS.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey:  process.env.AWS_SECRET,
    region: process.env.AWS_BUCKET_REGION,
  });
uploadservice.uploadtoserver = async (filedata) => {
    return new Promise(async (resolve,reject)=>{
        try {
            let uploadData= await cloudinary.uploader.upload(filedata, {
                upload_preset: 'dev_setups',
            });
            resolve(uploadData)
        } catch (error) {
             
            resolve(null)
        }
    })     

}


uploadservice.upload = async function uploadfile(Key, path, data, filetype) {
    return new Promise(async (resolve, reject) => {
      const uploadParams = {
        Bucket: process.env.AWS_BUCKET,
        Key: `bodyfrist${path}${Key}`, // pass key
        Body: data,
      };
      if (filetype) uploadParams.ContentType = "audio/mpeg";
      await s3Client.putObject(uploadParams, (err, s3data) => {
        if (err) {
          reject({ Errro: err });
        } else {
          console.log("s3data", s3data);
          resolve(s3data);
        }
      });
    });
  };

uploadservice.getimgdata = async function getS3file(Key,path) {
    return new Promise((resolve, reject) => {
      s3Client.getSignedUrl('getObject', {
            Bucket: process.env.AWS_BUCKET,
            Expires: 60 * 60 * 72,    //This means that url valid for 1 day
            Key: `bodyfrist${path}${Key}`    //profile-image is the folder name that is already created in the bucket
        }, function (err, url) {
            if (err) {
                console.log("Signed url error" + Key + " --", err);
                reject(err);
            }
            else {
                resolve(url);
            }
        })
    });
}
module.exports = uploadservice;
