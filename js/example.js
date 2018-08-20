var gravity = 0;
var weight;
var selection;
var planet;

weight = prompt("Indica cual es tu peso en kilos");
weight = parseFloat(weight);
selection = prompt("Para saber tu peso indica:\n1) Marte\n2) Júpiter");
selection = parseInt(selection);

switch (selection)
{
    case 1:
        planet="Marte";
        break;
    case 2:
        planet="Júpiter";
        break;   
    default:
        planet="La Tierra";
        break;
}

document.writeln("<h2>Tu peso en "+planet+" es de "+weight+" kilos.</h2>");
console.log("Archivo situado en: "+window.location.toString());