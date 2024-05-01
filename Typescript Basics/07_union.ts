type User = {
    userName: string;
    email: string;
    password: string;
}

type Admin = {
    adminName: string;
    email: string;
    password: string;
}

const createUser: User | Admin = {
    userName: "Sachin Kumar",
    email: "saching@gmail.com",
    password: "password"
}

const createAdmin: User | Admin = {
    adminName: "Sachin Kumar",
    email: "saching@gmail.com",
    password: "password"
}

// const user: (string | number | boolean)[] = []

const user: Array<(string | number | boolean)> = [
    "Sachin Kumar",
    10,
    true
]

console.log(user);