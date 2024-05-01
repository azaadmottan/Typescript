const User = {
    name: "John",
    age: 25,
    email: "jhon@gmail.com"
}

console.log(User);

function newUser({name: string, age: number}): {name: string, age: number} {
    return {name: `name`, age: 20};
}

console.log(newUser({name: "sachin", age: 22}));