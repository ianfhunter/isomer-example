var able_to_mine = false;
var mining_material = ""
var mining_timeout = 0

function mine(a){
    able_to_mine = true;
    name = $(a).closest("tr").children("td")[0].innerHTML
    progress = $(a).closest("tr").children("td")[1]
    console.log(progress);
    progress = $(progress).children("div")[0]
    console.log(progress);
    progress =$( progress).children("div")[0]
    console.log("Mining " + name);
    console.log(progress);
    mining_material = name

    do_mine(name, progress)


}

function do_mine(name, progress) {
    mining_timeout = setTimeout(function () {
        // Do Something Here
        // Then recall the parent function to
        // create a recursive loop.

        console.log(able_to_mine)
        if (able_to_mine == false){
            clearInterval(timer);
        }

        new_pc = parseInt($(progress).text())+10;
        if (new_pc <= 100){
            $(progress).attr("aria-valuenow",new_pc)
            $(progress).css("width",new_pc+ "%")   // Use Text as the css is returned in px.
            $(progress).text(new_pc+ "%")
        }else{
            //Get Item.
            new_pc = new_pc - 100;
            $(progress).attr("aria-valuenow",new_pc)
            $(progress).css("width",new_pc+ "%")   // Use Text as the css is returned in px.
            $(progress).text(new_pc+ "%")
        }

        do_mine(name, progress);
    }, 1000);
}