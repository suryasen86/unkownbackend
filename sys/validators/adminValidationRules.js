const { param, query, body } = require("express-validator");
const { isValidInteger, isValidString, isValidFloat } = require('./commonValidationRules')


const login = () => {
    return [
        isValidString('mobile', 10, 10),
        
        isValidString('pin', 6, 6),
    ]
}

module.exports = { login}