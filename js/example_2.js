var element2;
var draw;

element2 = document.getElementById("example_2");
draw = element2.getContext("2d");

console.log(draw);

draw.beginPath();
draw.strokeStyle = "red";
draw.moveTo(100, 100);
draw.lineTo(200, 200);
draw.stroke();
draw.closePath();

draw.beginPath();
draw.strokeStyle = " blue";
draw.moveTo(200, 100);
draw.lineTo(100, 200);
draw.stroke();
draw.closePath();