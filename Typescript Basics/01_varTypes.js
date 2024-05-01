"use strict";
// different `type` to specify the type of the variable
Object.defineProperty(exports, "__esModule", { value: true });
// Basic types
var numValue = 10;
var numValue2 = 3033.33;
var strValue = "Sachin Kumar";
var boolValue = true;
var nullValue = null;
var unKnownValue;
console.log(numValue, numValue2.toFixed(), strValue.toUpperCase(), boolValue, nullValue, unKnownValue);
var age = 25; // Type inference: number
var name = "John"; // Type inference: string
console.log(age, name);
var storeValue;
function func() {
    return "String value";
}
// function may return any type of value
storeValue = func(); // Type inference: any
console.log(storeValue);
var storeValue2;
function func2() {
    return 10;
}
// in this case the storeValue2 variable they store only 'number' type of values
storeValue2 = func2();
console.log(storeValue2);
