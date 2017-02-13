function Mostrar()
{
/*
						</br>si es Enero: "que comiences bien el año!!!."
						</br>si es Marzo: "a clases!!!."
						</br>si es Julio: "se vienen las vacaciones!!!."
						</br>si es Diciembre: "Felices fiesta!!!."
*/

var mesDelAnio = document.getElementById('mes').value;

switch(mesDelAnio)
{
	case 'Enero':
		alert('que comiences bien el año!!!.');
		break;
	case 'Marzo':
		alert('a clases!!!..');
		break;
	case 'Julio':
		alert('se vienen las vacaciones!!!.');
		break;		
	case 'Diciembre':
		alert('Felices fiesta!!!.');
		break;		
	default:
		alert('Un mes  cualquiera...');
		break;
}


}//FIN DE LA FUNCIÓN