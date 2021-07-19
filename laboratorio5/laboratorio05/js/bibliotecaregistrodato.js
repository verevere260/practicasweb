//variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

//Creamos un procedimiento para buscar 
function Buscar(codigo){
    //Seleccionamos la tabla que se quiere buscar
    var db=database.ref().child("alumno");
    db.once("value",function (snapshot){
        snapshot.forEach(function(data){
            //Declaramos una variable para obtener el ID(KEY)



            //Declaramosvaraiables para caprurar los datos
            
        })
    })
}


//Creamos un procedimiento para mostrar los datos de las tabla
function Mostrar(){
    // Declaramos una variable para contar el numero de filas
    var i=0;
    // Selecciono el tbody de la tabla donde voy a mostrar la información
    var tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    //Seleccionamos la tabla que se quiere mostrar
    var db=database.ref().child("registro");
    db.once("value", function(snapshot){
        if (snapshot.exists()){
            snapshot.forEach(function (data) {
                var cod=data.key;
                var nom = data.val().nombre;
                var ape=data.val().apellido;
                var cor=data.val().correo;
                //Declaramo una variable para la fila
                //Declarando una variable para las filas
                var fila=tbody.insertRow(i);
                // Declaramos variables para los titulos
                var titulonom=fila.insertCell(0);
                var tituloape=fila.insertCell(1);
                var titulocor=fila.insertCell(2);
                var tituloact=fila.insertCell(3);
                var titulobor=fila.insertCell(4);
                //Agregamos valores
                titulonom.innerHTML=nom;
                tituloape.innerHTML=ape;
                titulocor.innerHTML=cor;
                tituloact.innerHTML =
                    "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
                titulobor.innerHTML = "<a href='#'>Seleccionar</a>";
                tbody.appendChild(fila);
                i++;
            });
        }
    });
}
//Creamos un procedimiento para limpiar
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}
//Creamos un procedimiento para registrar
function Registrar(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingrese sus nombres");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingrese sus apellidos");
        txtApe.focus();
    }else if(txtCor.Value=="" || txtCor.value==null){
        alert("Ingrese el correo");
        txtCor.focus();
    }else{
        //caprturando valores
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;
        //Llamando a la función para registrar del firebase
        //Creamos la tabla si no existiera y la seleccionamos
        var db=database.ref("registro");
        //Asignamos los valores a la tabla que ha ido creada
        var registros=db.push();
        //Le paso los campos y los valores que tendra la tabla
        registros.set({
            nombre: nom,
            apellido: ape,
            correo: cor,
        });
        alert("Se registró el dato");
        //Llamamos a la funcion limpiar
        Limpiar();
        //Llamamos al procedimiento mostrar
        Mostrar();
    }
}
//Creamos un procedimiento para actualizar 
function Actualizar(){
    //Capturando valores
    var cod=txtCod.value;
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    //Seleccionamos la tabla que queremos actualizar con el código del registro
    var db=database.ref("registro/"+cod);
    //Le asignamos los valores que se van actualizar
    db.update({
            nombre:nom,
            apellido:ape,
            correo:cor,
        });
    alert("Se actualizó el dato");
    // Llamamos al procedimiento Limpiar
    Limpiar();
    // Llamamos al procedimiento mostrar
    Mostrar();
}
//Creamos un procedimiento para eliminar 
function Eliminar(codigo){
    //Preguntamos si se quiere eliminar el registro
    var result= confirm("Estas deguro que quieres eliminar el registro?")
    //Evaluamos la respuesta
    if(result){
        //Creamos una variable para el codigo
        var cod=codigo;
        //Seleccionamos la tabla con el código a borrar y la borramos
        var db=database.ref("Registro/"+cod).remove();
        alert("Se eliminó el dato");
        //Llamamos al procedimiento limpiar
        Limpiar();
        //Llamamos al procedimiento mostrar
        Mostrar();
    }
}
//Asignamos el procedimiento al boton
btnRegistrar.addEventListener("click", Registrar);
btnActualizar.addEventListener("click", Actualizar);