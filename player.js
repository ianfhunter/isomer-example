var movement_locked = false;


function Player(){
   this.inventory = [];
}
Player.prototype.add_item = function(item){
    this.inventory.push(item)
};

var player = new Player();

function do_movement(oldX, newX, oldY, newY, grid) {
    if (can_move(newX , newY, grid)){
        grid[oldX ][ oldY] = new Tile(TileEnum.EMPTY);
        grid[newX ][ newY] = new Tile(TileEnum.PLAYER);
        play_frame(grid);
    }else{
        backup_grid = grid
        grid = interact(newX , newY, grid)
        if (backup_grid != grid){
            console.log("teleport.")
            play_frame(grid);
        }else{
            console.log("blocked.")
        }
    }
    return grid
}

function move_player(grid){

    $(document).keydown(function(e) {

        if (movement_locked){
            return grid;
        }

        coord = findTile(TileEnum.PLAYER, grid);

        switch(e.keyCode){
            case 38: //uparrow
            case 87: //w
                console.log("Up");
                grid = do_movement(coord.x, coord.x - 1 , coord.y, coord.y, grid)
                break;
            case 40: //downarrow
            case 83: //s
                console.log("Down");
                grid = do_movement(coord.x, coord.x + 1 , coord.y, coord.y, grid)
                break;
            case 37: //leftarrow
            case 65: //a
                console.log("Left");
                grid = do_movement(coord.x, coord.x , coord.y, coord.y - 1, grid)
                break;
            case 39: //rightarrow
            case 68: //d
                console.log("Right");
                grid = do_movement(coord.x, coord.x , coord.y, coord.y + 1, grid)
                break;
            default:
                console.log("Code: ", e.keyCode)

        }
    });
    return grid
}

function can_move(x,y, grid){
    // console.log(x, y, grid, "can move")
    if (grid && grid.length > x && grid[x].length > y && grid[x][y].tile == TileEnum.EMPTY){
        return true
    }
    else{
        return false
    }
}

function interact(x,y, grid) {
    console.log(x, y, grid)
    switch(grid[x][y].tile){
        case TileEnum.EMPTY:
            console.log("?");
            break;
        case TileEnum.WALL:
        case TileEnum.WALLALT:
        case TileEnum.WALLCORNER:
            console.log("Blocked");
            break;

        case TileEnum.FURNACE:
            console.log("FURNACE")
            $("#furnaceTrigger").click();
            $(".close-furnaceModal").click(function(){
                 movement_locked = false; 
            });
            movement_locked = true; 
            break;

        case TileEnum.BOULDER:
            console.log("MINE")
            $("#mineTrigger").click();
            $(".close-mineModal").click(function(){
                 movement_locked = false; 
            });
            movement_locked = true; 
            break;

        case TileEnum.ANVIL:
            console.log("SMITH")
            $("#smithTrigger").click();
            $(".close-animatedModal").click(function(){
                 movement_locked = false; 
            });
            movement_locked = true; 
            break;
        case TileEnum.DOOR:
        case TileEnum.DOORALT:
            console.log("DOOR")
            grid = move_room(grid[x][y].portal);
            break;
        default:
            console.log("No action yet.")
    }
    return grid;
}