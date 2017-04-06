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
  { "name": "Copper", "Speed": 3 },
  { "name": "Iron Ore", "Speed": 2 },
  { "name": "Tin", "Speed": 3 },
  { "name": "Coal", "Speed": 2 },
  { "name": "Silver", "Speed": 1 },
];

var SmeltTable = [
    { "name": "Bronze", "Ingredients":["Copper","Tin"]},
    { "name": "Pewter", "Ingredients":["Copper","Tin","Tin"]},
    { "name": "Iron", "Ingredients":["Iron Ore"]},
    { "name": "Cupronickel", "Ingredients":["Copper","Nickel"]},
]

function init_tables() {
    // TODO: Create Table functions.
    tableHeader("#oretable", ["Ore", "Progress", "Select"])


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
    tableHeader("#smelttable", ["Ingredient #1","Ingredient #2","Ingredient #3", "Result", "Smelt"]);

    for (s in SmeltTable){
        $("#smelttable").append(
          "<tr> \
            <td>"+standardize(SmeltTable[s]["Ingredients"][0])+"</td> \
            <td>"+standardize(SmeltTable[s]["Ingredients"][1])+"</td> \
            <td>"+standardize(SmeltTable[s]["Ingredients"][2])+"</td> \
            <td>"+ SmeltTable[s]["name"]+"</td> \
            <td><button onclick=smelt(this)>Go!</button></td> \
          </tr>"
       );
    }

}

function standardize(input){
    if (!input){
        return " "
    }else{
        return input;
    }
}
