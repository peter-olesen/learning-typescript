"use strict";
;
const User = {
    id: 2,
    name: "Pete",
    greet(message) {
        console.log(message);
    }
};
User.greet("Hello User");
if (!User.age) {
    console.log("No age of the user");
}
else {
    console.log(User.age);
}
