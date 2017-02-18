function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sumaPositivos=0;
	var sumaNegativos=0;
	var cantPositivos=0;
	var cantNegativos=0;
	var cantCeros = 0;
	var cantPares = 0;


	
	var respuesta="";

	while (respuesta.toUpperCase() != "FIN")
	{
		var respuesta="";
		ingreso = prompt("Ingrese un Numero o Fin para Finalizar");

		if(!isNaN(ingreso))
		{
			numero = parseInt(ingreso);
			if(numero > 0)
			{
				sumaPositivos += numero;
				cantPositivos++;
			}
			if(numero < 0)
			{
				sumaNegativos += numero;
				cantNegativos++;
			}
			if(numero == 0)
			{
				cantCeros++;
			}
			if(numero % 2 == 0)
			{
				cantPares++;
			}

		}
		else
		{
			respuesta = ingreso;

		}
	
	}
	var promPos = (sumaPositivos/cantPositivos);
	var promNeg = (sumaNegativos/cantNegativos);
	var diferencia = (sumaPositivos + sumaNegativos);

	document.write("1-Suma de los negativos: " + sumaNegativos
				+"</br>2-Suma de los positivos: " + sumaPositivos 
				+"</br>3-Cantidad de positivos: " + cantPositivos
				+"</br>4-Cantidad de negativos: " + cantNegativos
				+"</br>5-Cantidad de ceros: " + cantCeros
				+"</br>6-Cantidad de números pares: " + cantPares
				+"</br>7-Promedio de positivos: " + promPos
				+"</br>8-Promedios de negativos: " + promNeg
				+"</br>9-Diferencia entre positivos y negativos, (positvos-negativos): " + diferencia
		);



}//FIN DE LA FUNCIÓN