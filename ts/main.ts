/// <reference path="scripts/typings/createjs.d.ts"/>
/// <reference path="scripts/typings/easeljs.d.ts"/>
/// <reference path="scripts/typings/preloadjs.d.ts"/>
/// <reference path="Scripts/typings/soundjs.d.ts"/>

class Main {
    private canvas: HTMLCanvasElement;
    private stage: createjs.Stage;
    private assets: createjs.LoadQueue;

    private message: createjs.Text;

    private level: Level;
    private tiles: Tiles;

    private goldList: Gold[];
    private goldCount: number;


    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.stage = new createjs.Stage(canvas);

        this.message = new createjs.Text("Reproducing assets...", "bold 30px Segoe UI", "#e66000");
        this.message.textAlign = "center";
        this.message.x = canvas.width / 2;
        this.message.y = canvas.height / 2;
        this.stage.addChild(this.message);
        this.stage.update();

        this.assets = new createjs.LoadQueue();
        this.assets.installPlugin(createjs.Sound);
        this.assets.on("complete", (e: createjs.Event) => { this.onAssetsLoaded(e) });

        var manifest =
            [
                { src: "assets/images/tiles.png", id: "tiles" },
                { src: "assets/images/hero.png", id: "hero" },
                { src: "assets/images/monks.png", id: "monk" }
            ];

        this.assets.loadManifest(manifest);
    }

    private onAssetsLoaded(e: createjs.Event) {
        this.stage.removeChild(this.message);

        this.tiles = new Tiles(<HTMLImageElement>this.assets.getResult("tiles"));

        // start at level 1 please
        this.gotoLevel(1);
    }

    private gotoLevel(levelnumber: number) {
        var levels: string[] = originalLevels;
        var levelString = levels[levelnumber - 1];

        this.level = new Level(this.tiles, levelString);
        this.level.initializeStage(this.stage);

        this.goldList = this.level.goldList;
        this.goldCount = this.goldList.length;

        // render the gold on screen
        for (var i in this.goldList)
            this.stage.addChild(this.goldList[i].getBitmap());

        this.stage.update();
    }
}



window.onload = () => {
    var canvas = <HTMLCanvasElement> document.getElementById('gameCanvas');
    canvas.style.background = '#000';

    var main = new Main(canvas);
};
