class Gold {

    private x: number;
    private y: number;

    private tiles: Tiles;

    private isCarried: boolean;

    constructor(tiles: Tiles, x: number, y: number) {
        this.tiles = tiles;

        this.x = x;
        this.y = y;
        this.isCarried = false;
    }

    public getBitmap(): createjs.Bitmap {
        return this.tiles.createTileBitmap(TileType.Gold, this.x, this.y);
    }
} 