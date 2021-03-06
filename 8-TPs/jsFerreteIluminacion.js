/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o 
	“FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
	si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
	en informar del impuesto con el siguiente mensaje:
 	”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad = parseInt(document.getElementById('Cantidad').value);
 	var marca = document.getElementById('Marca').value;
 	var precio = 35;
 	var total = 0;
 	var porcentajeDto = 0;
 	var iibb = 0;

 	switch (cantidad)
 	{
 		case 5:
 			if(marca == 'ArgentinaLuz')
 			{
 				porcentajeDto = 0.40;
 			}
 			else
 			{
 				porcentajeDto = 0.30;
 			}
 			break;
 		 case 4:
 			if(marca == 'ArgentinaLuz' || marca == 'FelipeLamparas')
 			{
 				porcentajeDto = 0.25;
 			}
 			else
 			{
 				porcentajeDto = 0.20;
 			}
 			break;
 		 case 3:
 			if(marca == 'ArgentinaLuz')
 			{
 				porcentajeDto = 0.15;
 			}
 			else 
 			{
 				if (marca == 'FelipeLamparas')
 				{
 					porcentajeDto = 0.10;
 			    }
 			    else
 			    {
 			    	porcentajeDto = 0.05;	
 			    }
 			}
 			break; 	
 		default:
 			if(cantidad >= 6)
 			{
 				porcentajeDto = 0.50;
 			}		
 	}

 	total = precio * cantidad * (1-porcentajeDto);

 	if(total > 120)
 	{ 
 		iibb = total * 0.10;
 		alert('Usted pago ' + iibb + ' de IIBB.');
 	}

 	document.getElementById('precioDescuento').value = total + iibb;

}
