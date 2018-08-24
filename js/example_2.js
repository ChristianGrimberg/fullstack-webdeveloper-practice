var lines;
var space;
var txtQtyLines = document.getElementById("txtQtyLines");
var drawingLines = document.getElementById("drawingLines");
var drawContext = drawingLines.getContext("2d");
var width = drawingLines.width;
var height = drawingLines.height;
var btnSendQtyLines = document.getElementById("btnSendQtyLines");
btnSendQtyLines.addEventListener("click", drawLinesAfterClick);

function clearCanvas()
{
    drawContext.clearRect(0, 0, width, height);
}

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
    var yi, xf;
    var color = "#FAA";

    clearCanvas();
    lines = parseInt(txtQtyLines.value);
    space = width/lines;   

    if(lines<width)
    {
        for(var i = 0; i<lines; i++)
        {
            yi = space * i;
            xf = space * (i + 1);
            drawLine(color, 0, yi, xf, width);
        }
    }    

    drawLine(color, 1, 1, 1, height-1);
    drawLine(color, 1, width-1, width-1, width-1);
}