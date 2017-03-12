var iso;
var Color;
var Shape;
var Point;
var Path;

$(function(){
    canvas = document.getElementById("art");
    options = {
        originY: canvas.height /2
    }
    iso = new Isomer(canvas, options);

    Shape = Isomer.Shape;
    Point = Isomer.Point;
    Color = Isomer.Color;  
    Path = Isomer.Path;   

    init_colors();
    init_enums();

    grid = [
        [Tile.WALLCORNER,  Tile.WALLALT,   Tile.DOORALT,    Tile.WALLALT,   Tile.WALLALT,   Tile.WALLALT,   Tile.WALLALT],
        [Tile.WALL,        0,              0,               0,              0,              0,              0],
        [Tile.WALL,        0,              0,               Tile.PLAYER,    0,              0,              Tile.BOULDER],
        [Tile.WALL,        Tile.FIREPLACE, 0,               0,              0,              0,              Tile.ANVIL],
        [Tile.DOOR,        0,              0,               0,              0,              0,              Tile.BOULDER],
        [Tile.WALL,        0,              0,               Tile.BOULDER,   0,              0,              0]
    ]  

    play_frame(grid);
});