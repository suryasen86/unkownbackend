//remove unwanted and credentials of other app

TODO: module.exports = Object.freeze({

    Invalid_user_msg: "Invalid user",
  
    statusOK_msg: "Success",
  
    OtpSuccess_msg: "Otp Sent Successfully",
  
    userNotExist_msg: "User Does Not Exist",
  
    status_pending:"Otp Verification Pending",
  
    nodata_msg: "Data not available",
  
    fail_msg: "Opeartion failed",
  
    issue_msg: "Technical issue,Please try again After some time",
  
    access_denied_msg: "Access Denied",
  
    invalidtoken_msg: "Invalid token",
  
    notoken_msg: "Token not provided",
  
    Incorrectpassword_msg: "Password is incorrect",
  
    invalid_input_msg: "Invalid Input ",
  
    oldPassIncorrect: "Incorrect Old password",
  
    alreadyExist: "Already Exist",
  
    uploadError: "Error while uploading file",
  
    expireMsg: "Expire",
  
    invalid_link_msg: "Link is invalid",
  
    link_verify_msg: "Link is verified",
  
    docissue_msg: "Document and file number does not match",
  
    roleRejectError_msg: "Unauthorized Role",
  
    checkedInError_msg: "Already CheckedIn",
  
    checkedOutError_msg: "Already CheckedOut",
  
    checkedInFirstError_msg: "You should first checkin before checkout",
  
    imgUploadedFailed_msg: "Image uploading Failed",
  
    onlyAlphaNumericMsg: "should only contain alphanumeric.",
  
    onlyCharMsg: "should only contain character.",
  
    onlyNumMsg: "should only contain Number.",
  
  
    contactAdminForConfig: "Please Contact Admin",
  
    notAuthorizedMsg: "Not Authorized to login ",
  
    dishNotExist: "Dish Doesn’t Exist",
  
    notExistmsg: " Doesn't Exist ",
  
    couponNotExist: "Coupon Doesn’t Exist",
  
    MobNotRegApp:"The mobile number you entered did not match our records. Please try a different mobile number",
  
    accSuspendedMsg:"Looks like your account is suspended. Please contact admin for further information.",
  
    invalidOrderID: "The order ID you entered did not match our records. Please try again.",
  
    notperfromOp: "This operation cannot be performed currently.",
  
    rejectInActiveAccount: "Your account has been deactivated by Lokal Kitchen, please contact Admin",
  
    paymentVerificationFailed:" Payment Verification Failure",
  
  
  
  
  
    noPermChangeStatus: "Sorry! You dont have permission to change this information ",
  
  
    statusOK_code: 200,
  
    statusnodata_code: 902,
  
    statusalreadyexist_code: 422,
  
    statusinvaliduser_code: 313,
  
    statusfail_code: 501,
  
    statusissue_code: 502,
  
    statusvalidation_code: 311,
  
    statusinvalidinput_code: 312,
  
    statusmandatory: 401,
  
    status_rejected_code: 315,
  
    status_warning_code: 314,
  
  
    secret: "Suryasen",
  
    issuer: "baseNode",
  
    saltRounds: 12,
  
  
    steps:{
  
      step1:1,
  
      step2:2,
  
      step3:3,
  
      step4:4
  
  
    },
  
    status1:{
  
      active: 1,
  
      inactive: 0,
  
      pending:2,
  
    },
  
    Status: {
  
      active: 1,
  
      inactive: 0,
  
       //pending:2
  
    },
  
    String_Status: {
  
      active: '1',
  
      inactive: '0',
  
       //pending:2
  
    },
  
    creation_type: {
  
      scrappyTeam: 1,
  
      student: 2,
  
    },
  
  
    del_type: {
  
      school: 1,
  
      ground: 2,
  
    },
  
  
    approval_status: {
  
      new:1,
  
      approved: 2,
  
      rejected: 3,
  
    },
  
  
    status:{
  
      accept:2,
  
      reject:3
  
    },
  
  
    active: 1,
  
    inactive: 0,
  
    pending: 2,
  
    reject: 2,
  
  
    //Length validation
  
    otpLength: 4,
  
    compLength: 50,
  
    groupLength: 50,
  
  
    //Mail messages and subject
  
    // otp_msg: 'OTP to change password is <<otp>>. ',
  
    otp_msg:
  
      "Dear <<user>>,\n\n<<OTP>> is your OTP to update your new password for Cabbagesoft Login.\n\nThank You.\n\nTeam Cabbagesoft\n+917710022555 ",
  
    otp: "OTP generated Successfully",
  
  
    //Role Nanme
  
    User: "User",
  
  
    //Platform
  
    platform: {
  
      web: 1,
  
      mobile: 2,
  
      both: 3,
  
    },
  
    //Discount type
  
      disc_flat: 1,
  
      disc_per: 2,
  
  
    //Upload Size
  
      float_point: 2,
  
  
    //Role ID
  
    Role_id: {
  
      admin: 1,
  
      student: 2,
  
      Volunter: 3,
  
      SuperAdmin: 4,
  
      SchoolAdmin: 5,
  
    },
  
  
    Steps:{
  
      step_1:1,
  
      step_2:2,
  
      Step_3:3,
  
      Step_4:4,
  
      Step_5:5
  
    },
  
    groundSteps:{
  
      step_1:1,
  
      step_2:2,
  
    },
  
  
    listType:{
  
      school:1,
  
      playground:2,
  
      pending:3
  
    },
  
  
    Days:{
  
      Monday:1,
  
      Tuesday:2,
  
      Wednesday:3,
  
      Thursday:4,
  
      Friday:5,
  
      Saturday:6
  
    },
  
  
    fcmTokenMaxLength: 250,
  
    fcmKey: "YWIxMjdiMjEtMWQ5ZS00YjI4LTg2OWEtNzgzMWM4NDA1M2Ni",
  
    fcmAppId: "bc07bee9-2264-4e37-ad25-586c2e1c67cc",
  
  
    currency: {
  
      INR: {
  
          symbol: 'INR',
  
          conversion: 100,
  
      }
  
  },
  
  
  paymentType: {
  
    credit_sales:'credit_sales',
  
    cash: 'cash',
  
    lk_wallet: 'lk_wallet',
  
    credit:'credit',
  
  },
  
  
  
    msgType: {
  
      users: "users",
  
      auth: "auth",
  
      task: "task",
  
    },
  
    msgId: "1007163212174309679",
  
  
    //Notification
  
    notificationType: {
  
      in_app_notification: "in_app_notification",
  
      sms: "sms",
  
      email: "email",
  
      push_notification: "push_notification",
  
    },
  
    notificationStatus: {
  
      new: 1,
  
      sent: 2,
  
      failed: 3,
  
      read: 4,
  
      perm_failed: 5,
  
    },
  
    //Notification Msg
  
  
    s3Credential: {
  
      accessKeyId: "AKIAJ7GBX3I6YVLCNXZQ",
  
      secretAccessKey: "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",
  
      region: "ap-south-1",
  
      Bucket: "pics.test.mm",
  
    },
  
  
    notiMsg: {
  
      createChallan:
  
        "<<userName>> created <<dc_id>> for StyleCode <<style_code>>",
  
      forwardChallan: "<<userName>> has forwarded <<dc_id>> for <<processStep>>",
  
      receiveChallan:
  
        "<<userName>> has received <<dc_id>> for StyleCode <<style_code>>",
  
      dueChallan: "<<dc_id>> has yet not received due on <<date>>",
  
      delChallan: "User <<userName>> deleted <<dc_id>>",
  
    },
  
  
    endUserNoti: {
  
      app_id: "38b3106e-dacb-440b-a677-18af7331f834",
  
      fcmKey: "ZDJlMDExMGEtOTM1OC00NmU4LWJlNDUtNTY0NjI4OTJmNzA5",
  
    },
  
  
   
  
    afterNewState:{
  
     "Cancelled":2,
  
     "Delivered":3, 
  
    },
  
  
    orderStates:{
  
     1:"New",
  
     2:"Cancelled",
  
     3:"Delivered",
  
     "New":1,
  
     "Cancelled":2,
  
     "Delivered":3,
  
    },
  
  
    attendanceType: {
  
      checkIn: 1,
  
      checkOut: 2,
  
    },
  
  
    roleStatus: {
  
      admin: 1,
  
      manager: 2,
  
      user: 3,
  
      service: 4,
  
    },
  
    langauage:{
  
    "Marathi":1,
  
    "Hindi":2,
  
    "English":3,
  
    "Other":4
  
    },
  
    // AudioUrl: "http://3.7.239.154/callman_web/listencall/",
  
    // Validation messages(Yup)
  
    array_error: "Must be an Array",
  
    integer_error: "Must be a integer",
  
    string_error: "Must be a string",
  
    required_error: "is required",
  
    otpLength_error: "Otp length must be of 4 digit",
  
    passLength_error: "Minimum Password length must be 6 digit",
  
    otpLength_error: "Otp length must be 4",
  
    passmaxLength_error: "Maximum Password length must be 10 digit",
  
    mobileLength_error: "Length must be 10",
  
    addressMaxLength_error: "Maximum Address Length must be 100",
  
    cityMaxLength_error: "Maximum City Length must be 50",
  
    stateMaxLength_error: "Maximum State Length must be 50",
  
    compLength_error: "Minimum Comp Name length is 3",
  
    compmaxLength_error: "Maximum Comp Name length is 50",
  
    fcmTokenMaxLength_error: "Maximum FcmToken length is 250",
  
    langMaxLength_error: "Maximum lang length is 3",
  
    emailformat_error: "Must be in a valid format",
  
    number_error: "Must be a number",
  
    array_error: "Must be a array",
  
    alphanumeric_error: "Must be a alphanumeric character",
  
    typeLength_error: "Type value must be 1 or 2",
  
    dateformat_error: "Must be in a valid date format",
  
    date_error: "Must be a date (YYY-MM-DD)",
  
    mandatory_error: "Mandatory Field",
  
    compLength_error: "Maximum Comp Name length is 50",
  
    groupNameLength_error: "Maximum Group Name length is 50",
  
    maxLength_Error: " Maximum length",
  
    minLength_Error: " Minimum length",
  
    maximumImageMsg: "Maximum <<Length>> image allowed for",
  
    dishNotAvlMsg:"Dish not available",
  
    priceError:"Price Changed",
  
    gstError:"GST Changed",
  
    applicabDays_error:"Applicable days Changes",
  
    notFoundMsg:" Not Found",
  
    alreadyMember:"Cannot Send Request",
  
    otherIdError:"Please enter others id"
  
  });
  