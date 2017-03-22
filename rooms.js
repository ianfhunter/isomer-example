/*
 Contain Hardcoded maps here.

 TODO: Automatically wrap maps in Invisible elements.

*/
var rooms;

function init_rooms(){
    rooms = [
        [
            [new Tile(TileEnum.WALLCORNER),  new Tile(TileEnum.WALLALT), new Portal(TileEnum.DOORALT, 2) ,    new Tile(TileEnum.WALLALT),new Tile(TileEnum.WALLALT), new Tile(TileEnum.WALLALT), new Tile(TileEnum.WALLALT),new Tile(TileEnum.INVISIBLE)],
            [new Tile(TileEnum.WALL),        0,              0,               0,              0,              0,              0,new Tile(TileEnum.INVISIBLE)],
            [new Tile(TileEnum.WALL),        0,              0,               new Tile(TileEnum.PLAYER),    0,              0,             new Tile(TileEnum.BOULDER),new Tile(TileEnum.INVISIBLE)],
            [new Tile(TileEnum.WALL),        new Tile(TileEnum.FURNACE), 0,               0,              0,              0,              new Tile(TileEnum.ANVIL),new Tile(TileEnum.INVISIBLE)],
            [new Portal(TileEnum.DOOR, 1),        0,              0,               0,              0,              0,              new Tile(TileEnum.BOULDER),new Tile(TileEnum.INVISIBLE)],
            [new Tile(TileEnum.WALL),        0,              0,               new Tile(TileEnum.BOULDER),   0,              0,              0,new Tile(TileEnum.INVISIBLE)],
            [new Tile(TileEnum.INVISIBLE),     new Tile(TileEnum.INVISIBLE),new Tile(TileEnum.INVISIBLE),new Tile(TileEnum.INVISIBLE),new Tile(TileEnum.INVISIBLE),new Tile(TileEnum.INVISIBLE),new Tile(TileEnum.INVISIBLE),new Tile(TileEnum.INVISIBLE)]
        ],
        [
            [new Tile(TileEnum.WALLCORNER),  new Tile(TileEnum.WALLALT),    new Tile(TileEnum.WALLALT), new Tile(TileEnum.WALLALT), new Tile(TileEnum.WALLALT), new Tile(TileEnum.WALLALT),   new Tile(TileEnum.WALLALT)],
            [new Portal(TileEnum.DOOR, 1),   0,                             0,                          0,                          0,                          new Tile(TileEnum.PLAYER),    new Portal(TileEnum.DOOR, 0)],
            [new Tile(TileEnum.WALL),        0,                             0,                          new Tile(TileEnum.BOULDER), 0,                          0,                            0]
        ],
        [
            [new Tile(TileEnum.WALLCORNER),new Tile(TileEnum.WALLALT),new Tile(TileEnum.WALLALT),new Tile(TileEnum.WALLALT),new Tile(TileEnum.WALLALT),new Tile(TileEnum.WALLALT),new Tile(TileEnum.WALLALT),],
            [new Tile(TileEnum.WALL),        0,              0,               0,              0,              0,              0],
            [new Tile(TileEnum.WALL),        0,              0,               0,              0,              0,              0],
            [new Tile(TileEnum.WALL),        0,              0,               0,              0,              0,              0],
            [new Tile(TileEnum.WALL),        0,              0,               0,              0,              0,              0],
            [new Tile(TileEnum.WALL),        0,              0,               0,              0,              0,              0],
            [new Tile(TileEnum.WALL),        0,              0,               0,              0,              0,              0],
            [new Tile(TileEnum.WALL),        0,              0,               0,              0,              0,              0],
            [new Tile(TileEnum.WALL),        0,              new Tile(TileEnum.PLAYER),               0,              0,              0,              0],
            [new Tile(TileEnum.WALL),        0,              new Portal(TileEnum.DOORALT, 0),              new Tile(TileEnum.BOULDER),   0,              0,              0]
        ],
    ];

    for(x in rooms){
        for (y in rooms[x]){
            for(z in rooms[x][y])
                rooms[x][y][z] = rooms[x][y][z] == 0? new Tile(TileEnum.EMPTY): rooms[x][y][z];
        }
    }
    console.log(rooms)

}

function get_starting_grid(){
    return rooms[0];
}

function move_room(room_no){
    console.log(rooms[room_no])
    return rooms[room_no];
}
