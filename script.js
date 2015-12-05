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
    
    function getInfo(el){
      var x = (el.style.top == "") ? 0 : parseInt(el.style.top)
      var y = (el.style.left == "")  ? 0 : parseInt(el.style.left)
      var w = (el.style.width  == "") ? 0 : parseInt(el.style.width)
      var h = (el.style.height == "")  ? 0 : parseInt(el.style.height)
      return {'x':x, 'y':y, 'width':w, 'height':h }

    }

    function AABBcollision(a,b){
      var rect1 = getInfo(b)
      var rect2 = getInfo(a)
      console.log('rect1',rect1,'rect2',rect2)
      
      if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
          // collision detected!
        return true
      }
      return false
    }
    
    function updateDir(el){
      var pos = getPos(el)

      if (!AABBcollision(el,env)){
        // risoluzione collisione
        if (el.style.background == "black")
          el.style.background = "red"
        else
          el.style.background = "black"
        //$('#box').color("black");  
      }
      if (el.style.background == "black"){
        //no collisione
        pos.x -= el.dx
        pos.y -= el.dy
      }
      else{
        pos.x += el.dx
        pos.y += el.dy
      }   
      
      b.style.left = pos.x+'px'
      b.style.top = pos.y+'px'
      
    }
    interval = setInterval(function(){
        for(var i = 0; i<boxes.length; i++){
          var b = boxes[i]
          updateDir(b)
        }
    },30);
  })

function stopAnimate(){
  clearInterval(interval)
}
// function startAnimate(){
//   setInterval(interval,30)
// }
