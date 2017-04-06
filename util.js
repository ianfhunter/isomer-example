CanvasRenderingContext2D.prototype.clear = 
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
      this.restore();
    }           
};

function tableHeader(where, arr_of_tags){
    var str = "<tr>"
    for( x in arr_of_tags){
        str += "<th>"+arr_of_tags[x]+"</th>"
    }
    str += "</tr>"
    $(where).append(str); 
}