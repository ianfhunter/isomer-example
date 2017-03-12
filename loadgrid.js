var game_started = false;

function play_frame(grid){
    display_grid(grid);

    if(!game_started)
        move_player(grid);
    game_started = true;
};

function display_grid(grid){
    /*
      +1Y   +1X

      -1X   -1Y
    */

    console.log("ey.")
    for(i = 0; i != grid.length; i++){
        for(z = 0; z != grid[0].length; z++){

            switch( grid[i][z] ){
                case Tile.INVISIBLE:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ), DEBUG);
                    break;
                case Tile.EMPTY: 
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1, 1) );
                    break;
                case Tile.PLAYER:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1, 1) );
                    // iso.add(Shape.Pyramid(Point(-i, -z, 1)), red);//
                    iso.add(Shape.Cylinder(Point(-i + 0.5, -z + 0.5, 1), 0.25, 10, 1) , red)
                    break;
                case Tile.WALL:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ), DEBUG);
                    iso.add(Shape.Prism(Point(-i, -z, 1), 1, 0.2 ,1 ), black);
                    break;
                case Tile.DOOR:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ), DEBUG);
                    iso.add(Shape.Prism(Point(-i, -z, 1), 1, 0.2 ,1 ), brown);
                    break;
                case Tile.WALLALT:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ), DEBUG);
                    iso.add(Shape.Prism(Point(-i, -z, 1), 0.2, 1 ,1 ), black);
                    break;
                case Tile.DOORALT:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ), DEBUG);
                    iso.add(Shape.Prism(Point(-i, -z, 1), 0.2, 1 ,1 ), brown);
                    break;
                case Tile.WALLCORNER:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1 ,1 ), DEBUG);
                    iso.add(Shape.Prism(Point(-i, -z, 1), 0.2, 0.2 ,1 ), black);
                    break;
                case Tile.BOULDER:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1, 1) );
                    iso.add(Shape.Pyramid(Point(-i, -z, 1)), blue);
                    break;
                case Tile.ANVIL:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1, 1) );

                    // Crappy attempt at a anvil
                    iso.add(Shape.extrude(new Path([    
                      Point(-i+0.3, -z,   1),
                      Point(-i+0.3, -z+0.6, 1),

                      Point(-i+0.5, -z+0.55, 1.15),
                      Point(-i+0.3, -z+0.65, 1.5),
                      
                      Point(-i+0.3, -z+0.6, 1.6),
                      Point(-i+0.3, -z,   1.6),
                      
                      Point(-i+0.3, -z+0.15,   1.4),
                      Point(-i+0.3, -z+0.15,   1.15),
                      // Point(-i+0.5, -z+0.85, 1.3),
                    ]), 0.3, 'x'), lgrey);

                    break;
                case Tile.FIREPLACE:
                    iso.add(Shape.Prism(Point(-i, -z, 0), 1, 1, 1) );
                    iso.add(Shape.Prism(Point(-i, -z, 1)), green);
                    break;
            }
        }
    }
}