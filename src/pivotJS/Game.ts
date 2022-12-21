class Game {
    canvasID?: string;
    canvas?: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;

    constructor(canvasID: string) {
        this.canvasID = canvasID
        this.canvas = document.getElementById(canvasID) as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d")
        
    }
}

export default Game;