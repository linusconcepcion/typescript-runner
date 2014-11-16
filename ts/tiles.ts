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
        var rectangle = new createjs.Rectangle((xtile - 1) * Globals.TileWidth, (ytile - 1) * Globals.TileHeight, Globals.TileWidth, Globals.TileHeight);

        var bitmap = new createjs.Bitmap(this.tilesImage);
        bitmap.sourceRect = rectangle;
        bitmap.setTransform(Globals.XOffset + (x * Globals.TileWidth), Globals.YOffset + (y * Globals.TileHeight));

        return bitmap;
    }
} 