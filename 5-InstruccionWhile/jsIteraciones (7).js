function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='';
	var ingreso;

	while (toUpperCase(respuesta) != "FIN")
	{
		
		ingreso = prompt("Ingrese un Numero o Fin para Finalizar");
		if(!isNaN(ingreso))
		{
			acumulador += parseInt(ingreso);
			contador++;	

		}		
		else
		{
			respuesta = ingreso;

		}
		

	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN