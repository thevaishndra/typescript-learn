let score: number | string = 33//it can be both string or number
score = 44
score="55"

type User = {
    name : string;
    id: number
}
type Admin = {
  username: string;
  id: number;
};

let vaishnavi: User | Admin = {name: "vaishnavi", id:123}
vaishnavi = {username: "vc", id:123}


// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
  //making some API calls
  //id.toLowerCase()//really need to check
  if(typeof id === "string"){
    id.toLowerCase()
  }
}

//array
// const data: number[] = [1,2,3,"4"]//not allowed
// const data: string[] = [1, 2, "3", "4"]//not allowed
const data: string[] | number[] = ["1", "2", "3"]//either be all numbers or all string
const data2: (string | number) [] = ["1", "2", "3"];

let pi:3.14 = 3.14
// pi = 3.145//not allowed

//real life eg
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew";//not allowed