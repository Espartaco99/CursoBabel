// Eventos al cargar la pagina
//document -> DOMContentLoaded
//window -> load

(function () {
    document.addEventListener("DOMContentLoaded", funInicio, false);
    //window.addEventListener("load", funInicio, false);
})();

//Acceso al dom
function funInicio() {
    console.log("Documento Cargado");
    //Forma antigua en deshuso, mejor utilizar la de abajo
    //document.getElementById("art1");
    //Funcion al estilo de jquery, coge la primera cosa que concuerde con el selector
    //document.querySelector("#btnSaludar")
    //Como la anterior pero coge todas las cosas que concuerde
    //document.querySelectorAll("#btnReg")

    document.querySelector("#btnSaludar").addEventListener("click", saludar, false);
    document.querySelector("#btnReg").addEventListener("click", registrar, false);
    document.querySelector("#btnGoogle").addEventListener("click", google, false)
}

function saludar() {
    /* BOM - Browser object model (window)
    Se puede usar el acceso al BOM sin poner window. delante, solo para redimensionar la ventana es necesario
    window.alert("Hola a todos") */
    alert("Hola a todos")
}

function registrar() {
    let nombre;
    //Mensaje, valor por defecto
    nombre = prompt("Dime tu nombre", "Segismundo")
    alert("Hola " + nombre + " pasa un buen dia")
}

function google() {
    console.log(location.href);
    location.href = "https://google.com"
    //location.reload(true) Para recargar la pagina
}