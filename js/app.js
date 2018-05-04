/*
 * Archivo principal de funcionalidad de JS
 */

 /** para abrir el modal */

const modal = document.getElementById("myModal");
const img = document.getElementById("imgModal");
const modalimg= document.getElementsByClassName('img01');

 /** creo la variable para el boton cerrar del modal */

 const btnCerrar = document.getElementById("close");

 /**Listeners */

 /**Funcion para poder mostrar el modal al hacer click */
img.onclick = function(){
    modal.style.display = "block";
    modalimg.src = this.src;
}

 /**Funcion que me cierre el modal */

 btnCerrar.onclick = function() {
   modal.style.display = "none";
 };