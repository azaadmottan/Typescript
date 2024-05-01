const user: string[] = [];

const newUser: Array<string> = [];

user.push("John");
newUser.push("Sachin Kumar", "Rohit Kumar");

type User = {
    name: string;
    phone: number;
}

const allUsers: Array<User> = [];           // Array of objects

allUsers.push(
    {
        name: "Sachin",
        phone: 1234567890
    },
    {
        name: "Rohit",
        phone: 8340934123
    }
);

console.log(allUsers);

export {}