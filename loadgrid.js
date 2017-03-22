var game_started = false;

function play_frame(grid){
    clear_grid(grid);
    display_grid(grid);

    if(!game_started)
        move_player(grid);
    game_started = true;
};


function clear_grid(grid){
    var canvas = document.getElementById('art');
    var context = canvas.getContext('2d');
    context.clear();

}

function display_grid(grid){
    /*
      +1Y   +1X

      -1X   -1Y
    */

    console.log("ey.")
    for(i = 0; i != grid.length; i++){
        for(z = 0; z != grid[0].length; z++){

            console.log("Indexing...",  grid[i][z].tile)
            switch( grid[i][z].tile ){
                case TileEnum.INVISIBLE:
                    if(Debug_Enable)
                        iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ), DEBUG);
                    break;
                case TileEnum.EMPTY: 
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1, 1) );
                    break;
                case TileEnum.PLAYER:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1, 1) );
                    // iso.add(Shape.Pyramid(Point(-i, -z, 1)), red);//
                    iso.add(Shape.Cylinder(Point(-i + 0.5, -z + 0.5, 1), 0.25, 10, 1) , yellow)
                    break;
                case TileEnum.WALL:
                    if(Debug_Enable)
                        iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ), DEBUG);
                    iso.add(Shape.Prism(Point(-i, -z, 1), 1, 0.2 ,1 ), black);
                    break;
                case TileEnum.DOOR:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ));
                    iso.add(Shape.Prism(Point(-i, -z, 1), 1, 0.2 ,1 ), brown);
                    break;
                case TileEnum.WALLALT:
                    if(Debug_Enable)
                        iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ), DEBUG);
                    iso.add(Shape.Prism(Point(-i, -z, 1), 0.2, 1 ,1 ), black);
                    break;
                case TileEnum.DOORALT:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ));
                    iso.add(Shape.Prism(Point(-i, -z, 1), 0.2, 1 ,1 ), brown);
                    break;
                case TileEnum.WALLCORNER:
                    if(Debug_Enable)
                        iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ), DEBUG);
                    iso.add(Shape.Prism(Point(-i, -z, 1), 0.2, 0.2 ,1 ), black);
                    break;
                case TileEnum.BOULDER:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1, 1) );
                    iso.add(Shape.Pyramid(Point(-i+0.4, -z +0.4, 1), 0.4, 0.4, 0.4), brown);
                    iso.add(Shape.Pyramid(Point(-i-0, -z +0.4, 1), 0.4, 0.4, 0.4), green);
                    iso.add(Shape.Pyramid(Point(-i+0.4, -z +0, 1), 0.4, 0.4, 0.4), red);
                    iso.add(Shape.Pyramid(Point(-i, -z, 1), 0.4, 0.4, 0.4), blue);
                    break;
                case TileEnum.ANVIL:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1, 1) );
                    iso.add(Anvil(), lgrey);
                    break;
                case TileEnum.FIREPLACE:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1, 1) );
                    iso.add(Shape.Pyramid(Point(-i, -z, 1), 1), orange);
                    break;
                default:
                    console.log("Unhandled Terrain: ", grid[i][z])
            }
        }
    }
}