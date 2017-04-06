function populate_smith(){
    var str = ""
    for (var i = player.inventory.length - 1; i >= 0; i--) {
     str += "<option>"+player.inventory[i]+"</option>"
    }
    console.log(str)
    $("#smith_materials").html(str)
}