// different `types` to specify different the parameter list , method return type of the functions.
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
