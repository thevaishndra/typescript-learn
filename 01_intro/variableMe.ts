let greetings : string = "Hello Hitesh";

let mynum = 6;

greetings.toLowerCase()
console.log(greetings);

//type inference
// number
let userId: number = 334455.3;
// userId = 334455.5;
//typescript is smart enough to get all the values, we don't need to add colon here and there
userId.toFixed()

//boolean
let isLoggedIn: boolean = false;

//any -> it's basically turn off typecheck
let hero;//please infer the value as string
//let hero: string
function getHero(){
    return "thor"
}
hero = getHero()


export{}