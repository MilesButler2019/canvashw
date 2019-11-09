function resizecanvas() {
  var canvs = document.querySelector("#myCanvas");
  canvs.width = window.innerWidth * .80;
  canvs.height = window.innerHeight * .80;
}
resizecanvas()
var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");
var color = 'red'
var draw_allow = true


function draw(posX,posY){
  if (draw_allow == true){
  ctx.fillStyle = color
  console.log("Drawing")
  ctx.beginPath();
  ctx.arc(posX,posY,10,0,2 * Math.PI);
  ctx.fill();
}}

canvas.addEventListener(
    'mousemove',
    function (e){
    draw(e.x - canvas.offsetLeft,e.y  - canvas.offsetTop);
    }
)
window.addEventListener(
    'keydown',function(e){
    console.log(e);
    if (e.key == 'b'){
        color = 'blue';
    }
    if (e.key == 'r'){
        color = 'red';
    }
    if (e.key == 'g'){
        color = 'green';
    }
    if (e.key == 'y'){
        color = 'yellow';
    }
    if (e.keyCode == 32){
    ctx.beginPath();
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }
    if (e.keyCode == 40){
      draw_allow = true;
    }
    if (e.keyCode == 38){
    draw_allow = false;
}})
window.addEventListener( "change", function(e){
    color = picker.value;
    ctx.fillStyle = color;
})
