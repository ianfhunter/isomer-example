function findTile(tile, grid){
    for(i=0; i!= grid.length; i++)
        for(j=0; j!= grid[0].length; j++)
            if(grid[i][j] == tile)
                return {x:i,y:j}
    return false
}