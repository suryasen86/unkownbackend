const { validationResult } = require('express-validator')

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  let errorObj = {};
  errors.array().map((err) => {
    if (!errorObj[err.param]) {
      //we need to send only one error for a field at a time
      errorObj[err.param] = true
      extractedErrors.push({ [err.param]: err.msg })
    }
    return extractedErrors
  });
  return res.status(422).send({ code: 422, message: 'Validation failed for some data', errors: extractedErrors })
};
module.exports = {
  validate
};