const nodemailer = require('nodemailer');

const logger = require('./logger');


exports.sendMail = async function (receiver, subject, text, htmllink = '') {

    let mailOptions = {

        // from: 'govenuetest@gmail.com',

        to: receiver,

        subject,

        text,

        html: htmllink,

        // attachments: [

        //     {

        //         filename: name+".xlsx",

        //         path: filelocation,

    

        //     }

        // ]

    };

    let transporter = nodemailer.createTransport({

        host: 'host',

        port: 465,

        secure: true,

        // service: 'gmail',  

        auth: {

            user: 'email',

            pass: 'pass'

        }

    });

    transporter.sendMail(mailOptions).then(function (info) {

        logger.info('Mail was sent from Sendmail common');

    }).catch(function (err) {

        logger.error('Some error in sendmail common----------->', err);

    });


}
