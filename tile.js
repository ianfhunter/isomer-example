class Tile {
    constructor(tile) {
        this.tile = tile;
    }
}

class Portal extends Tile{
    constructor(tile, portal) {
        super(tile)
        this.portal = portal
    }
}