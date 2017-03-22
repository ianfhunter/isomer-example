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
    grid = get_starting_grid();


    play_frame(grid);
});