const bcrypt = require("bcrypt");

const Constants = require("../../Constant");

const utilObj = {};


utilObj.generatePassHash = function (data) {

    return bcrypt.hashSync(data.toString(), Constants.saltRounds);
  
  };
  
  
  utilObj.compareHash = function (data, hashData) {
  
    return bcrypt.compareSync(data.toString(), hashData);
  
  };
module.exports = utilObj;