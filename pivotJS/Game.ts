class Game {
    canvasID?: string;
    canvas?: any;

    constructor(canvasID: string) {
        this.canvasID = canvasID
        console.log(typeof document.getElementById(canvasID))
    }
}