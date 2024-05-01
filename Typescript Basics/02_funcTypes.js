"use strict";
// different `types` to specify different the parameter list , method return type of the functions.
Object.defineProperty(exports, "__esModule", { value: true });
function addNumber(num1, num2) {
    return num1 + num2;
}
var result = addNumber(10, 20);
function convertToUpperCase(str) {
    return str.toUpperCase();
}
function signUp(userName, email, password) { }
var logIn = function (userName, email, password, isAuthorized) {
    if (isAuthorized === void 0) { isAuthorized = false; }
};
function name(params) {
    if (params === void 0) { params = ["Parameters List"]; }
    return params;
}
console.log(name(["First Parameter", "Second Parameter", "Third Parameter"]));
var funct = function (name, age) {
    if (age < 0) {
        return "Invalid Age";
    }
    return "".concat(name, " is ").concat(age, " years old");
};
console.log(funct("Rohit Kumar", 12));
var funct2 = function (age) {
    if (age < 0) {
        return "Invalid Age";
    }
    return age;
};
console.log(funct2(-20));
