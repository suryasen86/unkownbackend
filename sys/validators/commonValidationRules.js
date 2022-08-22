const { body, param, query } = require("express-validator");
class BaseValidationRules {

  isValidString(fieldName, minLength, maxLength, inValues = []) {
    let validation = body(fieldName)
      .exists().withMessage(`${fieldName} is required`)
      .notEmpty().withMessage(`${fieldName} should not be empty`)

    if (minLength && maxLength) {
      validation.isLength({ min: minLength, max: maxLength }).withMessage(`${fieldName} should be of min ${minLength} and max ${maxLength} characters`)
    }

    if (inValues.length) {
      validation
        .isIn(inValues)
        .withMessage(
          `${fieldName} must be one of the following values: ${inValues}`
        )
    }
    return validation;
  }

  isValidFloat(fieldName, min = 0, max = 100000) {
    return body(fieldName).exists().withMessage(`${fieldName} is required`)
      .notEmpty().withMessage(`${fieldName} should not be empty`)
      .isFloat({ min: min, max: max }).withMessage(`${fieldName} should be min ${min} and max ${max}`)
  }

  isValidInteger(fieldName, min = 0, max = 100000) {
    let validation = body(fieldName).exists().withMessage(`${fieldName} is required`)
      .notEmpty().withMessage(`${fieldName} should not be empty`)

    if (min && max) {
      validation.isLength({ min, max }).withMessage(`${fieldName} should be of min ${min} and max ${max} characters`)
    }
    return validation;
  }

}
module.exports = new BaseValidationRules()