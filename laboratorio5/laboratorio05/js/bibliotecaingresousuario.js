//declarando variables para los controles

var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnIngresar=document.getElementById("btnIngresar");

function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus="";
}



//creamos un procedimiento para validar el usuario

function ValidarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese su contraseña");
        txtCor.focus();
    }else{
        //capturando valores
        var cor= txtCor.value;
        var con= txtCon.value;
        auth.signInWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    alert("Bienvenidos al Sistema");
    window.location="pagina11.html";
  })
  .catch((error) => {
    alert("Usuario o Contraseña no válida")
    Limpiar();
  });

    }
}

//llamamos al procedimiento en el boton

btnIngresar.addEventListener("click", ValidarUsuario);