"use strict"

const user = {
    nombre: "Yo",
    apellidos: "tu"
}

const mostrar = data =>{
    data.sexo ="M"
    console.log(data)
}
//Clono el objeto para evitar que en la funcion mostrar a user se le
//añada el atributo sexo, pues los objetos pasan las referencias a la
//funcion
let nuevo = Object.assign({}, user)
mostrar(nuevo);

console.log(user);

function main(m){
    m(user.apellidos)
}

main((pDato = "No se tu nombre") => {
    console.log(pDato.toUpperCase())
    
})

//Cambiando this.x por user2.x funciona como funcion, sino hay que
function user2(nombre, apellidos, edad, genero){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.genero = genero;
    //Para referirnos al prototype no podemos usar this
    ++user2.prototype.numUsers
}
//Esto no funciona porque this no existe si no se hace un new
//console.log (user2("a", "b", 2, 3));

user2.prototype.numUsers = 0;

let usuario = new user2("a", "b", 2, 3);


//NO se puede usar la funcion flecha (=>) en una funcion contructora o prototipo
//Utilizamos la funcion prototipo para evitarnos crear la funcion dentro de la 
//declaracion de user2 y que haya N funciones, como N news, de esta forma la 
//funcion esta creada para todos los objetos
user2.prototype.saludar = function() {console.log(`Hola, soy ${this.nombre}, y somos ${this.numUsers}`)}

//Tambien se puede meter atributos, que tendran el mismo valor para todos los
//objetos creados, pero si un objeto lo cambia, tambien lo cambia para todos
user2.prototype.pais ="Tabarnia";

console.log (usuario);
usuario.saludar()
