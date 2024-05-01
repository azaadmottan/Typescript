var User = {
    name: "John",
    age: 25,
    email: "jhon@gmail.com"
};
console.log(User);
function newUser(_a) {
    var string = _a.name, number = _a.age;
    return { name: "name", age: 20 };
}
console.log(newUser({ name: "sachin", age: 22 }));
