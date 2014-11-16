enum TileType {
    Empty,
    Brick,
    Solid,
    Ladder,
    Bar,
    Trap,
    EscapeLadder,
    Gold
}

class Globals {
    public static UI_MARGIN_LEFT: number = 24;
    public static UI_MARGIN_TOP: number = 24;

    public static LEVELSIZE_X: number = 28;
    public static LEVELSIZE_Y: number = 16;
    public static TILE_WIDTH: number = 24;
    public static TILE_HEIGHT: number = 24;

    public static RUNNER_SPEED: number = 0.65;

    public static assets: createjs.LoadQueue;

    // global helper functions
    public static createTileBitmap(tileType: TileType, x: number, y: number): createjs.Bitmap {
        var xtile: number = 0;
        var ytile: number = 1;

        switch (tileType) {
            case TileType.Brick: xtile = 2; break;
            case TileType.Solid: xtile = 3; break;
            case TileType.Ladder: xtile = 4; break;
            case TileType.Bar: xtile = 5; break;
            case TileType.Trap: xtile = 2; break;
            case TileType.Gold: xtile = 8; break;
            default:
                console.log("Unexpected tiletype: " + tileType);
                return;
        }

        return Globals.createTileBitmapFromGrid(xtile, ytile, x, y);
    }

    private static createTileBitmapFromGrid(xtile: number, ytile: number, x: number, y: number): createjs.Bitmap {
        var rectangle = new createjs.Rectangle((xtile - 1) * Globals.TILE_WIDTH, (ytile - 1) * Globals.TILE_HEIGHT, Globals.TILE_WIDTH, Globals.TILE_HEIGHT);
        var tilesImage = <HTMLImageElement>Globals.assets.getResult("tiles");

        var bitmap = new createjs.Bitmap(tilesImage);
        bitmap.sourceRect = rectangle;
        bitmap.setTransform(Globals.UI_MARGIN_LEFT + (x * Globals.TILE_WIDTH), Globals.UI_MARGIN_TOP + (y * Globals.TILE_HEIGHT));

        return bitmap;
    }
} 
