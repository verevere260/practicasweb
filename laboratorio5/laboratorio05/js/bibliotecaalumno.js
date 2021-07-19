// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");
var btnLimpiar=document.getElementById("btnLimpiar");

// Creamos un procedimineto para mostrar
function MostrarAlumno(){
    // Declaramos una variable para guardar los datos
    var listaalumno=Mostrar();
    // Selecciono el tbody de la tabla donde voy a mostrar la información
    var tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    // Agregamos al tbody las filas que se registren
    for(var i=0;i<listaalumno.length;i++){
        //Declarando una variable para las filas
        var fila=tbody.insertRow(i);
        // Declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocur=fila.insertCell(3);
        var titulotur=fila.insertCell(4);
        var tituloest=fila.insertCell(5);
        //Agregamos valores
        titulonom.innerHTML=listaalumno[i].nombre;
        tituloape.innerHTML=listaalumno[i].apellido;
        titulodni.innerHTML=listaalumno[i].dni;
        titulocur.innerHTML=listaalumno[i].curso;
        titulotur.innerHTML=listaalumno[i].turno;
        tituloest.innerHTML=listaalumno[i].estado;
        tbody.appendChild(fila);
    }
}

// Creamos un procedimineto para registrar los datos
function RegistrarAlumno(){
    //Validacion de datos
    // Capturado valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    var cur="";
    var indice=cboCurso.selectedIndex;
    switch(indice){
        case 1:
            cur="Diseño Web";
            break;
        case 2:
            cur="Base de Datos";
            break;
        case 3:
            cur="Programación Java";
            break;
        default:
            cur="";
            break;
    } 
    var tur="";
    if(rbM.checked){
        tur="Mañana";
    }else if(rbT.checked){
        tur="Tarde";
    }else if(rbN.checked){
        tur="Noche";
    }
    var est="";
    if(chkEst.checked){
        est="Habilitado";
    }else{
        est="Deshabilitado";
    }
    // Llamamos al procedimineto registrar
    Registrar(nom, ape, dni, cur, tur, est);
    // Llamamos al procedmiento para mostrar
    MostrarAlumno();
}

//Llamamosa al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click", RegistrarAlumno);