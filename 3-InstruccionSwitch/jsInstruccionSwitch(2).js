function Mostrar()
{

/*
</br>si estamos en Invierno: "Abrigate que hace frio."
</br>si a&uacute;n no llego el Invierno: "Falta para el invierno."
</br>si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
</br>ACLARAcI&Oacute;N: tomamos a Julio y Agosto como los meses de Invierno.
*/
	var mesDelAnio = document.getElementById('mes').value;

	switch(mesDelAnio)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert('Falta para el invierno.');
		break;			
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert('Ya pasamos el frio, ahora calor!!!.');
		break;
		case 'Julio': 
		case 'Agosto':
			alert('Abrigate que hace frio.');
		break;

	}




}//FIN DE LA FUNCIÓN