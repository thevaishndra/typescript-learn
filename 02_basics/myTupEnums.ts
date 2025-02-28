// const user: (string | number)[] = [1, "vc"]
let tUser: [string, number, boolean]

tUser = ["vc", 131, true]
//even the order of array really matters in tuples

let rgb: [number, number, number] = [255, 121, 80]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "vc.com"
// newUser.push(true)

 export{}