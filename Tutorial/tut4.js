"use strict";
// unauthorized, user doesn't exist, wrong credentials, internal error
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "Unauthorized";
    LoginError["NoUser"] = "User Doesn't Exist";
    LoginError["WrongCredentials"] = "Wrong Credentials";
    LoginError["InternalError"] = "Internal Error";
})(LoginError || (LoginError = {}));
;
const printErrorMsg = (error) => {
    if (error == LoginError.Unauthorized) {
        console.log("User not authorized.");
    }
    else if (error == LoginError.NoUser) {
        console.log("User Doesn't Exist");
    }
    else if (error == LoginError.WrongCredentials) {
        console.log("Wrong Credentials");
    }
    else {
        console.log("Internal Error");
    }
};
printErrorMsg(LoginError.NoUser);
