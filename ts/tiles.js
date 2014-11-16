var TileType;
(function (TileType) {
    TileType[TileType["Empty"] = 0] = "Empty";
    TileType[TileType["Brick"] = 1] = "Brick";
    TileType[TileType["Solid"] = 2] = "Solid";
    TileType[TileType["Ladder"] = 3] = "Ladder";
    TileType[TileType["Bar"] = 4] = "Bar";
    TileType[TileType["Trap"] = 5] = "Trap";
    TileType[TileType["EscapeLadder"] = 6] = "EscapeLadder";
    TileType[TileType["Gold"] = 7] = "Gold";
})(TileType || (TileType = {}));

var Tiles = (function () {
    function Tiles(tilesImage) {
        this.tilesImage = tilesImage;
    }
    Tiles.prototype.createTileBitmap = function (tileType, x, y) {
        var xtile = 0;
        var ytile = 1;

        switch (tileType) {
            case 1 /* Brick */:
                xtile = 2;
                break;
            case 2 /* Solid */:
                xtile = 3;
                break;
            case 3 /* Ladder */:
                xtile = 4;
                break;
            case 4 /* Bar */:
                xtile = 5;
                break;
            case 5 /* Trap */:
                xtile = 2;
                break;
            case 7 /* Gold */:
                xtile = 8;
                break;
            default:
                console.log("Unexpected tiletype: " + tileType);
                return;
        }

        return this.createTileBitmapFromGrid(xtile, ytile, x, y);
    };

    Tiles.prototype.createTileBitmapFromGrid = function (xtile, ytile, x, y) {
        var rectangle = new createjs.Rectangle((xtile - 1) * Globals.TILE_WIDTH, (ytile - 1) * Globals.TILE_HEIGHT, Globals.TILE_WIDTH, Globals.TILE_HEIGHT);

        var bitmap = new createjs.Bitmap(this.tilesImage);
        bitmap.sourceRect = rectangle;
        bitmap.setTransform(Globals.UI_MARGIN_LEFT + (x * Globals.TILE_WIDTH), Globals.UI_MARGIN_TOP + (y * Globals.TILE_HEIGHT));

        return bitmap;
    };
    return Tiles;
})();
//# sourceMappingURL=tiles.js.map
