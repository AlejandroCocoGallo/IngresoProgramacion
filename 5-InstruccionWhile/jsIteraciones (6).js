function Mostrar()
{

	var contador=0;
	var acumulador=0;

	while (contador < 5)
	{
		contador++;
		acumulador = acumulador + parseInt(prompt("Ingrese el "+ contador+"° Numero"));
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
	

}//FIN DE LA FUNCIÓN