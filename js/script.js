var canvas=document.getElementById("canvas")
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
canvas.style.width=canvas.width+'px'
canvas.style.height=canvas.height+'px'

var ctx = canvas.getContext("2d")
ctx.mozImageSmoothingEnabled = false;	//better graphics for pixel art
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

//red,green,blue,alpha
var green = new Color(0,255,0,1);
var greenLight = new Color(0,255,0,0.5);

var blue = new Color(0,0,255,1)
var blueLight = new Color(0,0,255,0.5);

var red = new Color(255,0,0,1)
var redLight = new Color(255,0,0,0.5)

var rect = new Rectangle(15,15,50,50,red)
var rect2 = new Rectangle(400,15,50,50,blue)
var moviment = 1

var anim = new Animation(16,16,0,0,8,
"img/mario.png",33,4,2)
anim.position.Set(50,50)

setInterval(function()
{	
	anim.Update()
	
},20)

 
setInterval(function()
{
	ctx.clearRect(0,0,canvas.width,canvas.height)
	
	anim.Draw(ctx)
	
},60)

setInterval(function () 
{
	if(input.d)
		anim.SetRow(0)
	else if (input.a)
		anim.SetRow(2)

	if (input.a)
		anim.position.Move(new Vector2(-1,0))
	else if(input.d)
		anim.position.Move(new Vector2(1,0))
	else if(input.w)
		anim.position.Move(new Vector2(0,-1))
	else if(input.s)
		anim.position.Move(new Vector2(0,1))
	else
		anim.Update()

}, 2)
