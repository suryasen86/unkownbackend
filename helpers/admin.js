const AdminPercictence=require('../persistence/admin')
const {generatePassHash,compareHash}=require('../sys/utils')
const {generateToken,verifyToken} =require("../sys/utils/auth")
class AdminHelper {
    async login(incoming) {
        return new Promise(async (resolve,reject)=>{
           
            let admin=await AdminPercictence.getAdmin(incoming.mobile)
            if(admin){
                let verifyPassword=await compareHash(incoming.pin,admin.user_pin)
                if(!verifyPassword){
                    reject(new Error("Invalid Password"))
                }
                else{
                     delete admin.user_pin
                    let token=await generateToken({...admin},{})

                     
                    let resp={token,...admin.dataValues}
                    resolve(resp)
                    // genrate token
                }
            }else{
                reject( new Error("Admin Not Found"))
            }   
        })
        
    }
}

module.exports =new AdminHelper()