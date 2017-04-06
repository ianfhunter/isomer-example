function smelt(a){
    in1 =$( $(a).closest("tr").children("td")[0]).text()
    in2 =$( $(a).closest("tr").children("td")[1]).text()
    in3 =$( $(a).closest("tr").children("td")[2]).text()
    out =$( $(a).closest("tr").children("td")[3]).text()
    console.log("Smelt " + in1 + "+" + in2 + "+" + in3 + "=" + out);

    ingredients_list = [in1, in2, in3];

    while ($.inArray(" ", ingredients_list) > -1) {
        ingredients_list.splice( $.inArray(" ", ingredients_list), 1 );
    }

    if (player.has_items(ingredients_list)){
        console.log("SMELT")
        if (in1 != " ") player.remove_item(in1);
        if (in2 != " ") player.remove_item(in2);
        if (in3 != " ") player.remove_item(in3);        
        player.add_item(out)
    }else{
        console.log("NO SMELT")
    }
}
