const winston = require('winston');

const { createLogger, format, transports } = winston;


const options = {

  file: {

    level: 'info',

    filename: `${ROOT_DIR}/logs/app.log`,

    handleExceptions: true,

    maxsize: 5242880, // 5MB

    maxFiles: 5,

    colorize: false,

  },

};


// instantiate a new Winston Logger with the settings defined above

const logger = createLogger({

  format: format.combine(

    format.timestamp(),

    format.simple(),

    format.json()

  ),

  transports: [

    new transports.Console(

      {

        handleExceptions: true,

        format: format.combine(

          format.timestamp(),

          format.colorize({ all: true }), // all:true colorize level as well as message

          // format.colorize(), // all:true colorize level as well as message

          format.simple(),

          // format.align(), //TODO: Study

        )

      }

    ),

    new transports.File(options.file),

  ],

  exitOnError: false,

});


logger.stream = {

  write(message, encoding) {

    logger.info(message);

  },

};


module.exports = logger;
