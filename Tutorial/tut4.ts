// unauthorized, user doesn't exist, wrong credentials, internal error

enum LoginError {
    Unauthorized = "Unauthorized",
    NoUser = "User Doesn't Exist",
    WrongCredentials = "Wrong Credentials",
    InternalError = "Internal Error",
};


const printErrorMsg = (error: LoginError) => {

    if (error == LoginError.Unauthorized) {
        console.log("User not authorized.");
    } else if(error == LoginError.NoUser) {
        console.log("User Doesn't Exist");
    } else if(error == LoginError.WrongCredentials) {
        console.log("Wrong Credentials");
    } else {
        console.log("Internal Error");
    }
};

printErrorMsg(LoginError.NoUser);