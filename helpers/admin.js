const AdminPercictence=require('../persistence/admin')
const {generatePassHash,compareHash}=require('../sys/utils')
const {generateToken,verifyToken} =require("../sys/utils/auth")

const cartPersistence=require('../persistence/cart')
const { getimgdata } = require('../sys/utils/fileupload')
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
                    let token=await generateToken({...admin.dataValues},{})

                     
                    let resp={token,...admin.dataValues}
                    resolve(resp)
                    // genrate token
                }
            }else{
                reject( new Error("Admin Not Found"))
            }   
        })
        
    }
    async cartDetails({coupon}){
        let finalCartItems=[]
        console.log(coupon)
        let cart=await cartPersistence.getCart(coupon)
        if(!cart)throw new Error("Invalid Coupon");
        let cartObj=await cartPersistence.getCartDetail(cart.cart_id)
        if(cartObj.length){
            for (let index = 0; index < cartObj.length; index++) {
                let element = cartObj[index];
                element.product_img=await getimgdata(element.product_img,'/products/')
                finalCartItems.push(element)
            }
        }
        return {cart,cartItem:finalCartItems}

    }
}

module.exports =new AdminHelper()