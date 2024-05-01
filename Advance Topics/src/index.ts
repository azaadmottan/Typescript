class User {
    userName: string = "Default User Name";
    email: string = "Default User Email";
    private city: string = "Default City";

    constructor(userName: string, email: string, city: string) {
        this.userName = userName;
        this.email = email;
        this.city = city;
    }

    set setUserData(city: string) {
        this.city = "Chandigarh";
    }

    get getUserData(): Array<string> {
        return [
            this.userName,
            this.email,
            this.city
        ]
    }
}

const user = new User("Sachin Kumar", "sachin@gmail.com", "Jammu");

user.setUserData;

console.log(user.getUserData);