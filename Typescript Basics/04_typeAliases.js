var signUp = function (user) {
    return { userName: user.userName, email: user.email, password: user.password, isAuthorized: user.isAuthorized };
};
console.log(signUp({ userName: 'John', email: 'jhon@gmail.com', password: 'jhon1234', isAuthorized: false }));
