const winston = require('./logger');
const fast2sms = require('fast-two-sms')
// sms 
const axios=require('axios');
 
require('dotenv').config();


const smsService = {}


smsService.sendOtp = async ( mobile, otp ) => {
    return new Promise(async(resolve,reject)=>{
         
        try {
            
            let body={
               
                orgToken:`luC6yWOnS3yE8MzHyjCiWw`,
                message: `Please enter OTP ${otp} to verify your mobile on bodyfirst.in`,
                to:mobile,
                campaignName: "Test_New",
                gatewayId: "27537f8f2ac34d7380fc4f618113af4b",
                approvedTemplateId: "1007711035485931566"
               
            }
            let {data}= await axios.post(`https://app.wigzo.com/rest/v1/sms/send`,body)
           
            console.log(data)
            resolve(data)
        } catch (error) {
            console.log(error)
            reject(error.message)
        }
    })
   

}


module.exports = smsService;
