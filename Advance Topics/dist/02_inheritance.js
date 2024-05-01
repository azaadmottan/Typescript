"use strict";
class UserData {
    constructor(userName, email, city) {
        this.userName = "Default User Name";
        this.email = "Default User Email";
        this.city = "Default City";
        this.name = "User Name";
        this.userEmail = "User Email";
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
    userCity() {
        console.log("userCity");
    }
}
const userData = new UserData("Sachin Kumar", "sachin@gmail.com", "Jammu");
userData.setUserData;
console.log(userData.getUserData);
