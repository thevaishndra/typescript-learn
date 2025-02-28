"use strict";
// console.log("typescript is here");
//tsc -w -> run this in terminal, it's watch mode, it will keepe running and check if there is any change
// console.log("typescript is amazing");
//we changed typescript config file on outDir
//class and constructor
// class User {
//     public email: string
//     private name: string//we can also use #name 
//     private readonly city: string = ""//no issue even if we are not passing
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }//everything you don't mark is public
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; //this will be accessible in this class and its inherited class 
        this.city = "Delhi";
    }
    //private methods
    deleteToken() {
        console.log("Token deleted");
    }
    //getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
//inheritance -> when you want to add some functionality to child class
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
} //the thing we marked protected, we can inherit in this class
const vaishnavi = new User("v@v.com", "vaish");
// vaishnavi.city = "Delhi";
// vaishnavi.deleteToken()//private property can be accessible only in class
