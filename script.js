var interval = 0

window.addEventListener('load',
  function()
  {
    // prendo il nodi con tag box sotto forma di array
    var boxes = new Array()
    var env = document.getElementById("scatola")
    var box = document.getElementsByClassName("box");
    var i;
    for(i = 0; i < box.length; i++){
      var b = box[i];
      //inserisce una velocita
      b.dx=i+1;
      b.dy=1;
      boxes.push(b)
    }
    // restituisce la posizione di una pallina
    function getPos(el){
      var x = (el.style.top == "") ? 0 : parseInt(el.style.top)
      var y = (el.style.left == "")  ? 0 : parseInt(el.style.left)
      return {'x':x, 'y':y}
    }
    
    function getInfo(el){
      var x = (el.style.top == "") ? 0 : parseInt(el.style.top)
      var y = (el.style.left == "")  ? 0 : parseInt(el.style.left)
      var w = (el.style.width  == "") ? 0 : parseInt(el.style.width)
      var h = (el.style.height == "")  ? 0 : parseInt(el.style.height)
      return {'x':x, 'y':y, 'w':w, 'h':h }
    }
       
    
    interval = setInterval(function(){
        for(var i = 0; i<boxes.length; i++){
          var bb = boxes[i]
          //updateDir(b)
              
        // TODO: gestione collisioni
          var b = getInfo(bb)
          if (b.x + b.w + bb.dx > bb.parentNode.offsetWidth-4 || b.x + bb.dx +2 <= 0) bb.dx *= -1;
          if (b.y + b.h + bb.dy > bb.parentNode.offsetHeight-4 || b.y + bb.dy +2 <= 0) bb.dy *= -1;
          b.x += bb.dx;
          b.y += bb.dy;
          bb.style.left = b.x+'px'
          bb.style.top = b.y+'px'
        }
    },30);
    // TODO: collision dt per le altre palline
    env.addEventListener('mouseup', function(e){
      var p = document.createElement('div')
      p.className = 'box';
      //cambiare la posizion
      // p.style.left=e.x - p.offsetLeft +'px'
      // p.style.top=e.y - p.offsetTop +'px'
      p.dx=1;
      p.dy=1;
      env.appendChild(p)
      boxes.push(p)
      
    })
  })
  
function stopAnimate(){
  clearInterval(interval)
}
// function startAnimate(){
//   setInterval(interval,30)
// }
