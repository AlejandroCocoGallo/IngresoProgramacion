/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var suma =  parseInt(document.getElementById('PrecioUno').value) +
				parseInt(document.getElementById('PrecioDos').value) +
				parseInt(document.getElementById('PrecioTres').value);

	alert(suma);
}
function Promedio () 
{
	var promedio =  parseInt(document.getElementById('PrecioUno').value) +
				parseInt(document.getElementById('PrecioDos').value) +
				parseInt(document.getElementById('PrecioTres').value);

	promedio = promedio / 3;

	alert(promedio);
}
function PrecioFinal () 
{
	var suma =  parseInt(document.getElementById('PrecioUno').value) +
				parseInt(document.getElementById('PrecioDos').value) +
				parseInt(document.getElementById('PrecioTres').value);

	var precio = suma * 1.21;
	alert(precio);

}