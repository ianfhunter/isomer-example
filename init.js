var iso;
var Color;
var Shape;
var Point;
var Path;
var Debug_Enable = false;



$(function(){

    // Modal Windows
    $("#mineTrigger").animatedModal({
        modalTarget:'mineModal'
    });
    $("#smithTrigger").animatedModal();
    $("#furnaceTrigger").animatedModal({
        modalTarget:'furnaceModal'
    });
    // Isomer
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
    init_rooms();
    init_tables();
    grid = get_starting_grid();


    play_frame(grid);
});

var Ore = [
  { "name": "Copper", "Speed": 1 },
  { "name": "Iron", "Speed": 1 },
  { "name": "Tin", "Speed": 1 },
  { "name": "Coal", "Speed": 1 },
  { "name": "Silver", "Speed": 2 },
];

function init_tables() {
    // TODO: Create Table functions.
    $("#oretable").append( 
        "<tr><th>Ore</th>\
         <th>Progress</th>\
         <th>Select</th>\
        </tr>" );

    for (o in Ore){
        $("#oretable").append(
          "<tr> \
            <td>"+Ore[o]["name"]+"</td> \
            <td> \
                <div class='progress'> \
                  <div class='progress-bar progress-bar-striped active' role='progressbar' \
                  aria-valuenow='0' aria-valuemin='0' aria-valuemax='100' style='width:0%' timeout='"+Ore[o]["Speed"]+"'> \
                    0% \
                  </div> \
                </div> \
            </td>  \
            <td><button onclick=mine(this)>Go!</button></td> \
          </tr>"
       );
    }
}