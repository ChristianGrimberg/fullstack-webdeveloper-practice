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

function repeaterLines(color, x_initial, y_final)
{
    var yi, xf;

    for(var i=0; i<lines; i++)
    {
        yi = space * i;
        xf = space * (i + 1);
        drawLine(color, x_initial, yi, xf, y_final);
    }
}

function drawLinesAfterClick()
{
    clearCanvas();
    lines = parseInt(txtQtyLines.value);
    space = width/lines;   

    if(lines<width)
    {
        repeaterLines("#AFF", 0, width);
        repeaterLines("#AFF", width, 0);
    }    

    drawLine("#FAA", 1, 1, 1, height-1);
    drawLine("#FAA", 1, 1, height-1, 1);
    drawLine("#FAA", 1, width-1, height-1, height-1);
    drawLine("#FAA", width-1, width-1, height-1, 1);
}