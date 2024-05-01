"use strict";
class User {
    constructor(userName, email, city) {
        this.userName = "Default User Name";
        this.email = "Default User Email";
        this.city = "Default City";
        this.userName = userName;
        this.email = email;
        this.city = city;
    }
    set setUserData(city) {
        this.city = "Chandigarh";
    }
    get getUserData() {
        return [
            this.userName,
            this.email,
            this.city
        ];
    }
}
const user = new User("Sachin Kumar", "sachin@gmail.com", "Jammu");
user.setUserData;
console.log(user.getUserData);
