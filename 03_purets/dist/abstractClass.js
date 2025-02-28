"use strict";
class TakePhoto {
    constructor(cameraMode, filteer) {
        this.cameraMode = cameraMode;
        this.filteer = filteer;
    }
    //eg of abstract class
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
//in abstract, you can't make the object, it's the responsibility of class
// const vc = new TakePhoto("test", "Test")
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const vc = new Instagram("test", "Test", 3); //now, this is totally valid
vc.getReelTime();
//we can make abstract classes, abstract classes cannot make object of their own
//they help to define the class who are inheriting them
