function move_player(grid){

    $(document).keydown(function(e) {

        coord = findTile(Tile.PLAYER, grid);
        console.log(coord);

        switch(e.keyCode){
            case 38: //uparrow
            case 87: //w
                console.log("Up");
                if (can_move(coord.x - 1 , coord.y, grid)){
                    grid[coord.x ][ coord.y] = Tile.EMPTY;
                    grid[coord.x - 1 ][ coord.y] = Tile.PLAYER;
                    play_frame(grid);
                }else{
                    interact(coord.x - 1 , coord.y, grid)
                    console.log("blocked.")
                }
                break;
            case 40: //downarrow
            case 83: //s
                console.log("Down");
                if (can_move(coord.x + 1 , coord.y, grid)){
                    grid[coord.x ][ coord.y] = Tile.EMPTY;
                    grid[coord.x + 1 ][ coord.y] = Tile.PLAYER;
                    play_frame(grid);
                }else{
                    interact(coord.x + 1 , coord.y, grid)
                    console.log("blocked.")
                }
                break;
            case 37: //leftarrow
            case 65: //a
                console.log("Left");
                if (can_move(coord.x, coord.y - 1, grid)){
                    grid[coord.x ][ coord.y] = Tile.EMPTY;
                    grid[coord.x ][ coord.y - 1] = Tile.PLAYER;
                    play_frame(grid);
                }else{
                    interact(coord.x, coord.y - 1, grid)
                    console.log("blocked.")
                }
                break;
            case 39: //rightarrow
            case 68: //d
                console.log("Right");
                if (can_move(coord.x , coord.y + 1, grid)){
                    grid[coord.x ][ coord.y] = Tile.EMPTY;
                    grid[coord.x ][ coord.y + 1] = Tile.PLAYER;
                    play_frame(grid);
                }else{
                    interact(coord.x , coord.y + 1, grid)
                    console.log("blocked.")
                }
                break;
            default:
                console.log("Code: ", e.keyCode)

        }
    });
    return grid
}

function can_move(x,y, grid){
    if (grid && grid.length > x && grid[x].length > y && grid[x][y] == Tile.EMPTY){
        return true
    }
    else{
        return false
    }
}

function interact(x,y, grid) {
    switch(grid[x][y]){
        case Tile.EMPTY:
            console.log("?");
            break;
        case Tile.WALL:
        case Tile.WALLALT:
        case Tile.WALLCORNER:
            console.log("Blocked");
            break;
        case Tile.ANVIL:
            console.log("SMITH")
            $("#smithTrigger").click();

        default:
            console.log("No action yet.")

    }
}