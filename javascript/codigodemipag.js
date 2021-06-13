/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var colornuevo = function(){
      var img1= document.getElementById('fondo');
    img1.style.color="#a8fd13";
};
var colornuevo2 = function(){
      var img2= document.getElementById('fondo2');
    img2.style.color="#ff873b";
};
var colornuvo= function(){
    var eso = document.getElementById('fondo3');
    eso.style.padding="30px";
};
function load(){
    var imagen11 = document.getElementById('boton2');
    imagen11.addEventListener("mousemove",colornuevo2,false);
      var imagen1 = document.getElementById('boton1');
    imagen1.addEventListener("mousemove",colornuevo,false);
    var imagen13 = document.getElementById('boton3');
    imagen13.addEventListener("mousemove",colornuvo,false);
    
}

document.addEventListener("DOMContentLoaded", load, false);
document.addEventListener("DOMContentLoaded", mostrar, false);
function mostrar(mensaje){
   
    var forma = confirm("preciona en Aceptar o Cancelar");
    if(forma === true){
        alert("Bienvenido a mi pagina");
    }else{
        alert("Hasta luego :)");
    };

}
