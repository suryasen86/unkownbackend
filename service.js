const express = require('express')
ROOT_DIR = __dirname + '/';
const app = express()
const db = require('./models/sql');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'})
const Constants=require('./Constant')
const port =process.env.SERVER_PORT
const cors = require('cors');
const conn =require('./connectors/conn')

//sql setup
db.sequelizeCon.sync({ force: false }).then(() => {       // Sync All tables 
console.log("Drop and Resync with { force: false }");
});

//mongo setup
conn()

const {customError} =require('./sys/utils/errorHander')

app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies

app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies









app.get('/', (req, res) => {
  res.send("Hello")

   
})







const responseProvider = require('./sys/middleware/responseProvider')
app.use(responseProvider)
//routers
  
app.use('/api/admin',require('./routers/admin'))
app.use('/api/subcat',require('./routers/subcatgeory'))


  // catch 404 and forward to error handler

  app.use((req, res, next) => {

    const error = new Error("Not found");

    error.status = 404;

    next(error);

  });










  // error handler middleware

  app.use((error, req, res, next) => {

    res.status(error.status || 500).json({

      status: error.status || 500,

      message: error.message || 'Internal Server Error',

    });

  });



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})