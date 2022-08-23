const dotenv=require('dotenv');
dotenv.config({path:'./.env'})
const env = {

    database: process.env.DB_DATABASE_NAME,
  
    username: process.env.SQL_USER,
  
    password: "PNuoienw&$cGHJVJF23",
  
    host: process.env.SQL_HOST,
  
    dialect: 'mysql',
  
    pool: {
  
      max: 5,
  
      min: 0,
  
      acquire: 30000,
  
      idle: 10000
  
    }
  
  };
  
  
  module.exports = env;
  