// const User = {
//     name: "vaish",
//     email: "vaish@v.com",
//     isActive: true
// }

// function createUser({name: string, isPaid:boolean}){}

// createUser({name: "vaish", isPaid: false})//we can't directly call function and to avoid error we need to pass an object
// createUser({ name: "vaish", isPaid: false, email: "vaish@v.com" });//this is not allowed as we didn't defined it in function that email is also needed
// let newUser = { name: "vaish", isPaid: false, email: "vaish@v.com" };
// createUser(newUser)//now this time we can call createUser, even if emai was not defined

// function createCourse():{name: string, price: number}{
//     return {name: "typescript", price: 500}
// }


//type aliases - using same type more than once
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }
// function createUser(user: User): User{
//     return { name: "", email: "", isActive: true };
// }
// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string//no one can manipulate this now
    name : string
    email : string
    isActive: boolean
    credcardDetails?: number//? -> optional, even if we dont provide this
}
let myUser: User = {
    _id: "1245",
    name: "h",
    email: "v@v.com",
    isActive: false,
}

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "v@vais.com"
// myUser._id = "asa"//we should not be doing this


export{}