Algoritmo Ejemplo1
	//definiendo variables
	definir edad como entero;
	definir men como texto;
	//inicializamod las variables
	edad=0; men="";
	//capturamos valores
	escribir "Ingresa tu edad:";
	leer edad;
	//condicion
	si (edad>=18)Entonces
		men="Eres mayor de edad";
	SiNo
		men="Eres menor de edad";
	FinSi
	//mostrando resul tados
	escribir "La edad es:",edad;
	escribir men;
FinAlgoritmo
