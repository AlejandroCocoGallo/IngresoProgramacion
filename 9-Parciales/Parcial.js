/*Parciales*/

//Ejercicio 1
function perimetro()
{
	var base = document.getElementById('campo').value;
	alert(base * 4);
}


function importeMasIVA()
{
	var nro = prompt('Ingrese el Importe');
	var importeFinal = parseInt(nro) * 1.21;
	
	alert('El valor mas Iva es:' + importeFinal);
}


