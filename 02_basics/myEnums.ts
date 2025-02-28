// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2

// if(seat === 0){

// }

enum SeatChoice {
    AISLE = 10,//this is 10 now next value will be 10++
    MIDDLE,//but we can also put a strict number
    WINDOW,
    FOURTH = "fourth"//we can also put string
}
//we want to have more options
const vcSeat = SeatChoice.AISLE