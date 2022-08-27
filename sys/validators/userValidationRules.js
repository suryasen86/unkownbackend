const { param, query, body } = require("express-validator");
const { isValidInteger, isValidString, isValidFloat } = require('./commonValidationRules')


const getotp = () => {
    return [
        isValidString('user_phone', 10, 10),
        
        isValidInteger('is_privacy', 1, 1),
        isValidString('user_name', 1, 50),
    ]
}
const verifyotp=()=>{
    return [
        isValidString('user_phone', 10, 10),
        isValidInteger('user_otp',4,4),
    ]
}
const assignageandgender=()=>{
    return [
        isValidInteger('gender',1,1),
     
       
        body("to_age").optional(),
        body("from_age").optional()
        
    ]
}
const getProductForAnswer=()=>{
    return [
        body('answers').isArray({min:1})
    ]
}
const createCart=()=>{
    return [
        body('cart_items').isArray({min:1}).custom((value ) => {
           
            value.forEach(element => {
                if(!element.product_id){
                    throw new Error("Invalid Product Id")
                }
                if(!element.qty){
                    throw new Error(`Invalid Qty `)
                }
                if(typeof(element.product_id) != 'number') throw new Error(`Please Provide valid Product id`)
                if(typeof(element.qty) != 'number') throw new Error(`Please Provide valid qty`)
            })  
            return true
        })
    ]
}
module.exports = { getotp,verifyotp,assignageandgender,getProductForAnswer,createCart}