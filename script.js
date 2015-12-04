var interval = 0
window.addEventListener('load',
  function()
  {
    // prendo il nodi con tag box sotto forma di array
    var boxes = document.getElementsByClassName("box");
    var env = document.getElementById("scatola")
    var i;
    for(i = 0; i < boxes.length; i++){
      var b = boxes[i];
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
    function AABBcollision(posA,posB){
      return posA.x > posB.x || posA.y > posB.y 
    }
    function updateDir(el){
      var posEnv = getPos(env)
      var pos = getPos(el)
      if (AABBcollision(pos,posEnv)){
        // risoluzione collisione
        
          
      }else{
        //no collisione
          pos.x += el.dx
          pos.y += el.dy
      }
      
          b.style.left = pos.x+'px'
          b.style.top = pos.y+'px'
    }
    
    interval = setInterval(function(){
        for(var i = 0; i<boxes.length; i++){
          var b = boxes[i]
          updateDir(boxes,env)
        }
    },30);
  })
// function stopAnimate(){
//   clearInterval(interval)
// }
