function Mostrar()
{

	var contador=0;
	var maximo=0;
	var minimo=0;
	var numero=0;
	var respuesta="";

	while (respuesta.toUpperCase() != "FIN")
	{
		var respuesta="";
		ingreso = prompt("Ingrese un Numero o Fin para Finalizar");
		if(!isNaN(ingreso))
		{
			numero = parseInt(ingreso);

			if(numero >= maximo)
			{
				maximo = numero;
			}
			if(numero <= minimo)
			{
				minimo = numero;
			}

		}		
		else
		{
			respuesta = ingreso;

		}
		

	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN