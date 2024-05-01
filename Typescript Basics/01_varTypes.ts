// different `type` to specify the type of the variable

// Basic types

let numValue: number = 10;
let numValue2: number = 3033.33;
let strValue: string = "Sachin Kumar";
let boolValue: boolean = true;
let nullValue: null | string = null;
let unKnownValue: any;


console.log(numValue, numValue2.toFixed(), strValue.toUpperCase(), boolValue, nullValue, unKnownValue);

let age = 25;                   // Type inference: number
const name = "John";            // Type inference: string

console.log(age, name);

let storeValue: any;

function func() {
    return "String value";
}

// function may return any type of value

storeValue = func();            // Type inference: any

console.log(storeValue);

let storeValue2: number;

function func2() {
    
    return 10;
}

// in this case the storeValue2 variable they store only 'number' type of values

storeValue2 = func2();

console.log(storeValue2);


export {}