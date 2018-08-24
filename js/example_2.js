var element2;
var draw;
drawingLines = document.getElementById("drawingLines");
txtQtyLines = document.getElementById("txtQtyLines");
btnSendQtyLines = document.getElementById("btnSendQtyLines");

drawContext = drawingLines.getContext("2d");
btnSendQtyLines.addEventListener("click", drawLineAfterClick);

function drawLine(color, x_initial, y_initial, x_final, y_final)
{
    drawContext.beginPath();
    drawContext.strokeStyle = color;
    drawContext.moveTo(x_initial, y_initial);
    drawContext.lineTo(x_final, y_final);
    drawContext.stroke();
    drawContext.closePath();   
}

function drawLineAfterClick()
{    
    /**< Dibujo de lineas en canvas con el id correspondiente */
    drawLine("red", 100, 100, 200, 200);
    drawLine("blue", 200, 100, 100, 200);
    drawLine("yellow", 100, 150, 200, 150);
    drawLine("pink", 150, 100, 150, 200);
}