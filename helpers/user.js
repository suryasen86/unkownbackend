const UserPersistence=require('../persistence/user')
const {generateToken} =require("../sys/utils/auth")
const categoryHelper=require('./category')
class UserHelper {
    async getUserByMobile(mobile){
        return await UserPersistence.getUserByMobile(mobile)
    }
    async getUserById(user_id){
        return await UserPersistence.getUserById(user_id)
    }
    async getOtp(incoming){
        incoming.user_otp=9999
        let user=await this.getUserByMobile(incoming.user_phone)
        if(!user){
            return await UserPersistence.create(incoming)
        }   
        else{
            return await UserPersistence.update(incoming.user_phone,incoming)
        }
    }
    async verifyotp(incoming){
        return new Promise(async (resolve,reject)=>{
            let user= await this.getUserByMobile(incoming.user_phone)
            if(!user) reject(new Error(`User Not Found with ${incoming.user_phone}`))
            else{
                console.log(incoming.user_otp==user.user_otp)
                if(incoming.user_otp !=user.user_otp){
                    reject(new Error(`Invalid Otp ,Try Again`))
                }
                else{
                    await UserPersistence.update(incoming.user_phone,{user_otp:null})
                    let token =await generateToken({...user.dataValues});
                    user.token=token
                    resolve({...user.dataValues,token})
                }
            }
        })
    }   
    async assignAgeAndGender(incoming,id){
            return await UserPersistence.updateById(incoming,id)
    }

    async getCategoryAndSubcategory(user_id){
        return new Promise(async (resolve,reject)=>{
            let user= await this.getUserById(user_id)
            if(!user){
                reject(new Error("Invalid User"))
            }
            else{
                let {gender,from_age,to_age}=user
                let category =await categoryHelper.findByGenderAndAge(gender,from_age,to_age)
                resolve(category)
            }
        })
    }
    
}


module.exports =new UserHelper()