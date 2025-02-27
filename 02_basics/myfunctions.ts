 function addTwo(num: number):number{//fix by writing : number
    // num.toUpperCase()//i shouldn't be allowed to do this as it's not a string
    return num + 2
    // return "hello"//instead of returning no we can return string, so we specify more in outside :number
 }

function getUpper(val: string){//fix : string
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean ){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};//we added a false default value to boolean

 let myValue = addTwo(5)//we can also pass "5" as string but we shouldn't
//  getUpper(4)//we shouldn't pass this as we are supposed  to pass string
getUpper('vaishnavi')

signUpUser('Vaishnavi', 'vaish@mail.com', false)
loginUser("v", "v@v.com")//so, even if we are passing just 2 values, we will not get any error
 
//in functions we need to add : and specify them

// function getValue(myVal: number):boolean{
//     if (myVal > 5){
//         return true
//     }
//     return "200 OK"
// } //to handle these situation 

const getHello = (s:string):string => {
    return ""
}

const flowers = ["lotus", "rose", "lily"]
// const flowers = [1, 2, 3]//typescript automatically knows if we are passing numbers or strings

flowers.map((flower):string => {
    return `flower is ${flower}`
    //return 1 // if instead of string we return 1 it will not allow as we have wrote :string
})

function consoleError(errmsg: string): void{
    console.log(errmsg);//explicitly add that it will return void
}

function handleError(errmsg: string): never{//error more robust and handling part so it should not return a value by writing never
    throw new Error(errmsg);
}

export {}
