Algoritmo Ejemplo1
	//definiendo variables
	definir est como entero;
	definir men como texto;
	//inicializamos variables
	est=0; men="";
	//capturando valores
	escribir "Ingrese el numero de estacion 1 o 2 o 3 o 4:"
	leer est;
	//condicion
	si(est=1) Entonces
		men="Verano";
	SiNo
		si(est=2) Entonces
			men="Otoño";
		SiNo
			si(est=3) Entonces
				men="Invierno";
			SINo
				si(est=4) Entonces
					men="Primavera";
				siNo
					men="No es un numero valido"
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir "La estacion es: ",men;
FinAlgoritmo
