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


class Tiles {
    private tilesImage: HTMLImageElement;

    constructor(tilesImage: HTMLImageElement) {
        this.tilesImage = tilesImage;
    }

    public createTileBitmap(tileType: TileType, x: number, y: number): createjs.Bitmap {
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

        return this.createTileBitmapFromGrid(xtile, ytile, x, y);
    }

    private createTileBitmapFromGrid(xtile: number, ytile: number, x: number, y: number): createjs.Bitmap {
        var rectangle = new createjs.Rectangle((xtile - 1) * Globals.TILE_WIDTH, (ytile - 1) * Globals.TILE_HEIGHT, Globals.TILE_WIDTH, Globals.TILE_HEIGHT);

        var bitmap = new createjs.Bitmap(this.tilesImage);
        bitmap.sourceRect = rectangle;
        bitmap.setTransform(Globals.UI_MARGIN_LEFT + (x * Globals.TILE_WIDTH), Globals.UI_MARGIN_TOP + (y * Globals.TILE_HEIGHT));

        return bitmap;
    }
} 