interface UserProfile {
    name: string;
    userEmail: string;
}

interface UserAddress {
    userCity(): void;
}

class UserData implements UserProfile, UserAddress {
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

    name: string = "User Name";
    userEmail: string = "User Email";
    userCity(): void {
        console.log("userCity");
    }
}

const userData = new UserData("Sachin Kumar", "sachin@gmail.com", "Jammu");

userData.setUserData;

console.log(userData.getUserData);