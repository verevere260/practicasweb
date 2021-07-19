//creamos una función para cuando cargue el documento
function Cargar(url,titulo,ancho,alto){
    //declaramos variable para calcular ancho y alto de la pantalla
    var anc=screen.width;
    var alt=screen.height;
    //declaramos variable para la posición 
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    window.open(url,titulo,"width=" + ancho +", height=" + alto +", left=" + x +",top=" + y +" scrollbars=No");
}

//llamamos a la funcion cargar
window.onload=Cargar("pagina4.html","Ventana Emergente", 400, 400);