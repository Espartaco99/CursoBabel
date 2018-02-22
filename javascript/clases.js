//Por detras del codigo funciona como un objeto con prototipos,
//exactamente como en practica.js
//Solo puede haber un constructor en cada clase, no hay sobrecarga
//de metodos como en java
class User{
    constructor(nombre, apellidos, edad, genero){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.genero = genero;
    }

    saludar () {console.log(`Hola, soy ${this.nombre}`)}
}

class Alumno extends User{
    constructor(nombre, apellidos, edad, genero, curso){
        super(nombre,apellidos, edad, genero)
        this.curso = curso
    }

    saludar(){console.log(`Hola, soy ${this.nombre} y curso ${this.curso}`)}
}

user = new User("Juan", "Perez", 45, "D")
user.saludar();

alumno2 = new Alumno("Pedro", "Perez", 45, "D", "Angular");
alumno2.saludar();