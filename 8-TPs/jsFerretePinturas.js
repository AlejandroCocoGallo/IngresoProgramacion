/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var grados = parseInt(document.getElementById('Temperatura').value);
	var centigrados = grados + 32;
	alert(grados + ' grados Fº, son ' + centigrados + 'Cº');
}

function CentigradosFahrenheit () 
{
	var grados = parseInt(document.getElementById('Temperatura').value);
	var faren = grados - 32;
	alert(grados + ' grados Cº, son ' + faren + 'Fº');	
}
