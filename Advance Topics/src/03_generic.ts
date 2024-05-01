function userprofile<Type> (params: Type): Type {
    return params;
}

console.log(userprofile("Sachin Kumar"));
console.log(userprofile(2000));

interface Profile {
    name: string;
}

function profile<Profile>(name: Profile[]): Profile {
    return name[2];
}

const getProduct = <T>(params: Array<T>): T => {
    return params[1];
}