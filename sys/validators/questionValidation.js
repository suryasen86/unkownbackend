const { param, query, body } = require("express-validator");
const { isValidInteger, isValidString, isValidFloat } = require('./commonValidationRules')


const create = () => {
    return [
        isValidString("question"),
        body('cat_id').isInt().optional(),
        body('subcat_id').isInt().optional(),
        body('answers').exists().isArray({ min: 1, max: 50 }).withMessage("Please give valid Answer  with Products Ids and Optioms")
        .custom((value ) => {
           
            value.forEach(element => {
                if(element.option.length < 2){
                    throw new Error("pls check option min length is 2")
                }
                if(!Array.isArray(element.products_ids)) {
                    throw new Error("products_ids should be array")
                }

                if(element.products_ids.length < 1){
                    throw new Error("products_ids should be min length 1")
                }
                
            })
            return true
        })
         
            
    ]
}
const patch = () => {
    return [

        isValidInteger('is_active',1,1),

    ]
}
const idValidation = () => {
    return [
        param("id").isInt().withMessage("Not a valid question Id")
    ]

}
module.exports = { create, patch, idValidation }