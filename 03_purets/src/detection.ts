function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
} //type guard

function provideId(id: string | null){//cautionary tale
    if(!id){
        console.log("Please provide Id");
        return
    }
    id.toLowerCase
}

 //don't do this
 function printAll(strs: string | string[] | null){//here we are not checking for empty string which could be truthy and falsy values
    if(strs) {
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }
        } else if (typeof strs === "string"){
            console.log(strs);
        }
    }
 }


 interface User{
    name: string,
    email:string
 }

 interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
 }

 //in statement
 function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
 }

 //instance of
function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

//type predicates
type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}

//discriminated unions
interface Circle {
    kind: "circle",
    radius: number
}
interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle//after adding rectangle

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side//this will not work
}

//exhaustive check
function getArea(shape: Shape){//it could be used in payment gateway
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        
        case "square":
            return shape.side * shape.side

        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshapes: never = shape//the never type
            return _defaultforshapes
    }
}

//typescript -> chance of errors get minimized




















