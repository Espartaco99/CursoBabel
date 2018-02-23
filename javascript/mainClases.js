
//Las clases no se elevan como las funciones, asi que hay ponerlas al inicio del documento
class Main{

    constructor(){
        this.user ="";
        document.addEventListener("DOMContentLoaded", () => this.definirListeners(), false);
        //usamos el bind para que el this que se pasa sea el mismo que el this de esta funcion, sino sera otro y no funciona
        //document.addEventListener("DOMContentLoaded", this.definirListeners.bind(this), false);
    }
    /*
    constructor(){
        console.log("Documento Cargado");
        document.querySelector("#btnSaludar").addEventListener("click", this.saludar, false);
        document.querySelector("#btnReg").addEventListener("click", this.registrar, false);
        document.querySelector("#btnGoogle").addEventListener("click", this.google, false)
    }
    */
   definirListeners(){
        console.log("Documento Cargado");
        document.querySelector("#btnSaludar").addEventListener("click", this.saludar, false);
        document.querySelector("#btnReg").addEventListener("click", this.registrar, false);
        document.querySelector("#btnGoogle").addEventListener("click", this.google, false)
   }
    saludar(){
        alert("Hola a todos")
    }
    registrar(){
        let nombre;
        //Mensaje, valor por defecto
        /* nombre = prompt("Dime tu nombre", "Segismundo")
        alert("Hola " + nombre + " pasa un buen dia") */
    }
    google(){
        console.log(location.href);
        location.href = "https://google.com"
    }
}

/*
//Se pone el ()(), la primera para la funcion y la despues para ejecutarla inmediatamente,
//Seria como poner function a{...} y luego a() debajo
(function () {
    document.addEventListener("DOMContentLoaded", () => new Main(), false);
    //window.addEventListener("load", funInicio, false);
})();
*/