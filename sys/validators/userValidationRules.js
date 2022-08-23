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
        isValidInteger('from_age',1,3),
        isValidInteger('to_age',1,3),
      
    ]
}

module.exports = { getotp,verifyotp,assignageandgender}