class Gold {

    private x: number;
    private y: number;

    private isCarried: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.isCarried = false;
    }

    public getBitmap(): createjs.Bitmap {
        return Globals.createTileBitmap(TileType.Gold, this.x, this.y);
    }
} 