abstract class TakePhoto {//the moment we make this abstract no new object can be created from this class
    constructor(
        public cameraMode: string,
        public filteer: string
    ){}

    abstract getSepia(): void//this is just method no definition

    //eg of abstract class
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}

//in abstract, you can't make the object, it's the responsibility of class
// const vc = new TakePhoto("test", "Test")


class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void{
        console.log("sepia")
    }
}

const vc = new Instagram("test", "Test", 3);//now, this is totally valid
vc.getReelTime()
//we can make abstract classes, abstract classes cannot make object of their own
//they help to define the class who are inheriting them
















