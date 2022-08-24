const { param, query, body } = require("express-validator");
const { isValidInteger, isValidString, isValidFloat } = require('./commonValidationRules')


const create = () => {
    return [
        isValidString('product_name', 2, 100),
        
        isValidString('product_desc', 5, 300),
        isValidString('product_img'),
    ]
}
const patch=()=>{
    return[
        isValidInteger('is_active',1,1),
        
        
    ]
}
const idValidation=()=>{
    return [
        param("id").isInt().withMessage("Not a valid product Id")
    ]
     
}
module.exports = { create,patch,idValidation}