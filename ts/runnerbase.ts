class RunnerBase {
    private x: number;
    private y: number;

    private xOffset: number;
    private yOffset: number;

    private runnerImage: HTMLImageElement;

    constructor(runnerImage: HTMLImageElement, x: number, y: number) {
        this.runnerImage = runnerImage;
        this.x = x;
        this.y = y;
    }

    private createSpriteSheet(): createjs.SpriteSheet {
        return new createjs.SpriteSheet({

            images: this.runnerImage,

            frames: { height: Globals.TILE_HEIGHT, width: Globals.TILE_WIDTH, regX: 0, regY: 0 },

            animations: {
                stand: 0,
                runLeft:  [12, 23, "runLeft", Globals.RUNNER_SPEED],
                runRight: [24, 35, "runRight", Globals.RUNNER_SPEED],
                barLeft:  [36, 47, "barLeft", Globals.RUNNER_SPEED],
                barRight: [48, 59, "barRight", Globals.RUNNER_SPEED],
                fall: 60,
                climb:    [72, 83, "climb", Globals.RUNNER_SPEED],
                digLeft:  [84, 85, 86, 87, 88, 89],
                digRight: [90, 91, 92, 93, 94, 95]
            }
        });
    }

} 