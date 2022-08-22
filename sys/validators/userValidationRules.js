const { param, query, body } = require("express-validator");
const { isValidInteger, isValidString, isValidFloat } = require('./commonValidationRules')


const getotp = () => {
    return [
        isValidString('mobile', 10, 10),
        
        isValidString('deviceid', 1, 100),
    ]
}

module.exports = { getotp}