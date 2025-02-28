//generic
const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}

function identityThree<Type>(val: Type): Type {//the type we are passing it gets locked
    return val
}

// identityThree(3)//the type we are returning that will get locked here also

function identityFour<T>(val: T): T {//shortcut but it needs to refer same letter
    return val
}

interface Bottle{
    brand: string,
    type: number
}

// identityFour<Bottle>({})//if we are trying to create our own datatype


function getSearchProducts<T>(products: T[]): T {
    //do some db operations
    const myIndex = 3
    return products[3]
}

//instead of T we can pass number string boolean anything and in return we have to give the same
const getMoreSearchProducts = <T,>(products: T[]): T => {
    //db op
    const myIndex = 4
    return products[myIndex]
}//basic definition of generics in arrow function - the comma here is just to tell it's generic by looking

interface Database {
    connection: string,
    username: string,
    password: string
}

//instead of number we can now write database
function anotherFunction<T, U extends number>(valOne:T, valTwo:U):object {
    return {//when we did extends number
        valOne,
        valTwo,
    }
}

anotherFunction(3, 4)//now, we cannot pass string in place U val
//and now we need to pass database here

interface Quiz{
    name: string,
    type: string
}

interface Course {
  name: string,
  author: string,
  subject: string
}

class Syllable<T>{
    public cart: T[] = []
    addToCart(Products: T){
        this.cart.push(Products)
    }
}
