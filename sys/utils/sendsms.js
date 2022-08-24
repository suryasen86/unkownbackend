const winston = require('./logger');
const fast2sms = require('fast-two-sms')
const axios=require('axios');
 
require('dotenv').config();


const smsService = {}


smsService.sendOtp = async ( mobile, otp ) => {
    return new Promise(async(resolve,reject)=>{
         
        try {
            
            let body={
                authorization:process.env.SMS_AUTHORIZATION,
                 
                message:`Your otp is ${otp}`,
                numbers:[mobile],
                method:"GET"
               
            }
            // let {data}= await axios.get(`${process.env.SMS_PROVIDER_HOST}?authorization=${process.env.SMS_AUTHORIZATION}&variables_values=${otp}&numbers=${mobile}&flash=0`)
            const  data= await fast2sms.sendMessage({...body})
            console.log(data)
            resolve(data)
        } catch (error) {
            console.log(error)
            reject(error.message)
        }
    })
   

}


module.exports = smsService;
