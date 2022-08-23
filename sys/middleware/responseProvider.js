const responseProvider = (req, res, next) => {
    res.success = ({ code, message, data }) => {
      res.locals.data = { code, message, data }
  
      next()
  
    }
    res.error = ({ code, message = false, errors = null }) => {
  
      message = message ? message : "Technical issue,Please try again After some time"
  
      res.locals.data = { code, message, errors }
      res.locals.status = code
      next()
    }
    res.noContent = () => {
  
      res.locals.data = { code: 204 }
      res.locals.status = 204
      next()
    }
    next();
  }
  
  module.exports = responseProvider;