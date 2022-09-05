const { param, query, body } = require("express-validator");
const { isValidInteger, isValidString, isValidFloat } = require('./commonValidationRules')


const create = () => {
    return [
        isValidString('cat_name', 2, 50),
        isValidString('cat_desc', 5, 300),
        isValidInteger('age_from',1,100),
        isValidInteger('age_to',1,100),
        // isValidString('cat_img'),
        // isValidString('product_img'),
        // isValidString('poster_img'),
        // isValidString('promo_img'),
        isValidInteger('gender',1,1),
        isValidString('subcat_ids').optional()
]
}
const patch=()=>{
    return[
        isValidInteger('is_active',1,1),
        
        ]
}
const idValidation=()=>{
    return [
        param("id").isInt().withMessage("Not a valid category Id")
    ]
     
}

module.exports = { create,patch,idValidation}