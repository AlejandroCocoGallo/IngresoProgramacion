function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero=0;
	var respuesta="";

	while (respuesta.toUpperCase() != "FIN")
	{
		var respuesta="";
		ingreso = prompt("Ingrese un Numero o Fin para Finalizar");
		if(!isNaN(ingreso))
		{
			numero = parseInt(ingreso);

			if(ingreso >= 0)
			{
				positivo = positivo + numero;
			}
			else
			{
				negativo = negativo * numero;
			}
		}		
		else
		{
			respuesta = ingreso;

		}
		

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN