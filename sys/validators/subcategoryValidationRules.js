const { param, query, body } = require("express-validator");
const { isValidInteger, isValidString, isValidFloat } = require('./commonValidationRules')


const create = () => {
    return [
        isValidString('subcat_name', 2, 100),
        
        isValidString('subcat_desc', 5, 300),
        ]
}
const patch=()=>{
    return[
        isValidInteger('is_active',1,1),
        
        
    ]
}

module.exports = { create,patch}