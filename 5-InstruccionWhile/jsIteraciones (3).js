function Mostrar()
{
	var clave = "";
	var contador = 0;

	while (clave != "utn750" && contador < 3)
	{
		var clave = prompt("ingrese el número clave.");
		contador++;
	}
	if(clave!="utn750")
	{
		alert(contador + " Ingresos Erroneos")
	}
	
}//FIN DE LA FUNCIÓN
