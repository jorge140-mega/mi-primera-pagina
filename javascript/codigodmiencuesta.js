/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function encuesta(){
    var mensjase = 'BIENVENIDO A MI FORMULARIO';
    document.getElementById("biesa1").innerHTML=mensjase;
}

function mandar(){
    if(document.form1.campo1.value===""){
        alert('debe agregar un nombre');
        document.getElementById('nombre1').focus();
}else{
    document.form1.submit();
}
 if(document.form1.campo1.value===""){
        alert('debe agregar una direccion');
        document.getElementById('apellido12').focus();
}else{
    document.form1.submit();
}
 if(document.form1.campo1.value===""){
        alert('debe agregar un correo');
        document.getElementById('apellido13').focus();
}else{
    document.form1.submit();
}
}
document.addEventListener("DOMContentLoaded", encuesta, false);
