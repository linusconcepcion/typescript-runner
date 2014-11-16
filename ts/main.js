/// <reference path="scripts/typings/createjs.d.ts"/>
/// <reference path="scripts/typings/easeljs.d.ts"/>
/// <reference path="scripts/typings/preloadjs.d.ts"/>
/// <reference path="Scripts/typings/soundjs.d.ts"/>
var Main = (function () {
    function Main(canvas) {
        var _this = this;
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
        this.assets.on("complete", function (e) {
            _this.onAssetsLoaded(e);
        });

        var manifest = [
            { src: "assets/images/tiles.png", id: "tiles" },
            { src: "assets/images/hero.png", id: "hero" },
            { src: "assets/images/monks.png", id: "monk" }
        ];

        this.assets.loadManifest(manifest);
    }
    Main.prototype.onAssetsLoaded = function (e) {
        this.stage.removeChild(this.message);

        this.tiles = new Tiles(this.assets.getResult("tiles"));

        // start at level 1 please
        this.gotoLevel(1);
    };

    Main.prototype.gotoLevel = function (levelnumber) {
        var levels = originalLevels;
        var levelString = levels[levelnumber - 1];

        this.level = new Level(this.tiles, levelString);
        this.level.initializeStage(this.stage);

        this.goldList = this.level.goldList;
        this.goldCount = this.goldList.length;

        for (var i in this.goldList)
            this.stage.addChild(this.goldList[i].getBitmap());

        this.stage.update();
    };
    return Main;
})();

window.onload = function () {
    var canvas = document.getElementById('gameCanvas');
    canvas.style.background = '#000';

    var main = new Main(canvas);
};
//# sourceMappingURL=main.js.map
