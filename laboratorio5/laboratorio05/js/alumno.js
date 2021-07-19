// Crea un vector que contenga la información dl registro
var alumno=[];
// Creamos un procedimiento para poder registrar
function Registrar(nom,ape,dni,cur,tur,est){
    var NuevoAlumno={
        nombre:nom,
        apellido:ape,
        dni:dni,
        curso:cur,
        turno:tur,
        estado:est
    };
    alumno.push(NuevoAlumno);
}

// Creamos una función para mostrar la información del registro
function Mostrar(){
    return alumno;
}