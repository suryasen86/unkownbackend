const logger = require('./logger');


exports.customError = (customcode, resMsg, errmsg, logerr, res) => {

    const errorCode = Math.floor(100000 + Math.random() * 90000);

    logger.error(`Error no =># ${errorCode} # Msg=> ${errmsg} --- `, logerr);

    return res.status(customcode).json({ status: customcode, message: resMsg, API_code: errorCode });

}


exports.ApiError = (customcode, resMsg) => {

    const apiError = new Error(resMsg)

    apiError.customcode = customcode

    throw apiError;

}
