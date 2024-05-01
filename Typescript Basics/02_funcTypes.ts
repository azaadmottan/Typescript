// different `types` to specify different the parameter list , method return type of the functions.

function addNumber(num1: number, num2: number) {
    return num1 + num2;
}

let result = addNumber(10, 20);

function convertToUpperCase(str: string) {
    return str.toUpperCase();
}

function signUp (userName: string, email: string, password: string) {}

const logIn = (userName: string, email: string, password: string, isAuthorized: boolean = false) => {}

function name(params: string[] = ["Parameters List"]) {         // this method accepts only parameter of string type 'array'
    return params;
}

console.log(name(["First Parameter", "Second Parameter", "Third Parameter"]));

const funct = (name: string, age: number): string => {          // this method returns only string type of values
    if(age < 0) {
        return "Invalid Age";
    }
    return `${name} is ${age} years old`;
}

console.log(funct("Rohit Kumar", 12));

const funct2 = (age: number): string | number => {              // this method may return string or number type of value

    if (age < 0) {
        return "Invalid Age";
    }

    return age;
}

console.log(funct2(-20));

export {}