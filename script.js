window.addEventListener()
{
  // prendo il nodi con tag box sotto forma di array
  var boxes = document.getElementsByClassName('box');
  console.log(boxes.length)
  // TODO: non va dentro il for
  // FIXME: boxes.length sempre 0
  for(var i = 0; i<boxes.length; i++){ 
    var b = boxes[i]
    //inserisce una velocita
    b.dx=i+1;
    b.dy=1;
  }
  // restituisce la posizione di una pallina
  function getPos(el){
    var x = (el.style.top == "") ? 0 : parseInt(el.style.top)
    var y = (el.style.left == "")  ? 0 : parseInt(el.style.left)
    return {'x':x, 'y':y}
  }
  var interval = setInterval(
    (function()
    {
      for(var i = 0; i<boxes.length; i++){
        var b = boxes[i]
        var pos = getPos(b)
        //console.log(pos)
        pos.x += b.dx
        pos.y += b.dy
        b.style.left = pos.x+'px'
        b.style.top = pos.y+'px'
        console.log(pos)
      }
    }()),2);
}
