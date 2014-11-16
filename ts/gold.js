var Gold = (function () {
    function Gold(tiles, x, y) {
        this.tiles = tiles;

        this.x = x;
        this.y = y;
        this.isCarried = false;
    }
    Gold.prototype.getBitmap = function () {
        return this.tiles.createTileBitmap(7 /* Gold */, this.x, this.y);
    };
    return Gold;
})();
//# sourceMappingURL=gold.js.map
