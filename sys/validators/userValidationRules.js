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

module.exports = { getotp,verifyotp,assignageandgender}