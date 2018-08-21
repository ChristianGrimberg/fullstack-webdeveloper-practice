var element2;
var draw;

function drawLine(color, x_initial, y_initial, x_final, y_final)
{
    draw.beginPath();
    draw.strokeStyle = color;
    draw.moveTo(x_initial, y_initial);
    draw.lineTo(x_final, y_final);
    draw.stroke();
    draw.closePath();   
}

element2 = document.getElementById("example_2");
draw = element2.getContext("2d");

console.log(draw);

drawLine("red", 100, 100, 200, 200);
drawLine("blue", 200, 100, 100, 200);
drawLine("yellow", 100, 150, 200, 150);
drawLine("pink", 150, 100, 150, 200);