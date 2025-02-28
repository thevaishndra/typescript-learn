interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value:number): number
}

//this is called reopening of interface
interface User {
    githubToken: string
}
//differences between interface and type -> read docs
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const vaishnavi: Admin = {dbId: 22, email: "v@v.com", 
    userId: 2211,
    role: "admin",
    githubToken: "github",//we get the entire functionality from the variable declared up
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "vaishnavi30", off: 10) => {
        return 10
    }
}
vaishnavi.email = "v@vc.com"
//interface -> we click and something hapens but we don't know bts 