var element2;
var draw;
var width;
drawingLines = document.getElementById("drawingLines");
txtQtyLines = document.getElementById("txtQtyLines");
btnSendQtyLines = document.getElementById("btnSendQtyLines");

drawContext = drawingLines.getContext("2d");
width = drawingLines.width;
btnSendQtyLines.addEventListener("click", drawLinesAfterClick);

function drawLine(color, x_initial, y_initial, x_final, y_final)
{
    drawContext.beginPath();
    drawContext.strokeStyle = color;
    drawContext.moveTo(x_initial, y_initial);
    drawContext.lineTo(x_final, y_final);
    drawContext.stroke();
    drawContext.closePath();   
}

function drawLinesAfterClick()
{    
    var lines = parseInt(txtQtyLines.value);
    var yi, xf;
    var color = "#FAA";
    var space = width / lines;

    for(var i = 0; i<lines; i++)
    {
        yi = space * i;
        xf = space * (i + 1);
        drawLine(color, 0, yi, xf, width);
    }

    drawLine(color, 1, 1, 1, width-1);
    drawLine(color, 1, width-1, width-1, width-1);
}