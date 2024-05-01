"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newUser = {
    _id: "098ss9df07dfsd86d0s9d",
    name: "Sachin Kumar",
    phone: 1234567890,
    email: "sachin@gmail.com",
    password: "jkwpeoirsd"
};
// newUser._id = "79sd7a9sd7fsd65f75sd6f0fd"        // we can't assign a new value to readonly variable
newUser.phone = 8234098343; //  we can do this because this the normal variable
console.log(newUser);
