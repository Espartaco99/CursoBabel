class Main{

    constructor(){
        this.user = {
            nombre: ""
        },
        this.tarea = "",
        this.listaTareas =[],
        this.vista = {
            reg: document.querySelector("#btnReg"),
            input:document.querySelector("#nombre"),
            resultado: document.querySelector("#resultado"),
            inTarea: document.querySelector("#tarea"),
            add: document.querySelector("#add"),
            tareas:  document.querySelector("#tareas")
        }
        this.vista.reg.addEventListener("click", () => this.registrar(), false)
        this.vista.add.addEventListener("click", () => this.add(), false)
    }
    
    registrar(){
        this.user.nombre = this.vista.input.value
        //Como el append de jquery
        console.log(this.vista)
        this.vista.resultado.innerHTML = `<p>Hola ${this.user.nombre}</p>`
        //Mensaje, valor por defecto
        /* nombre = prompt("Dime tu nombre", "Segismundo")
        alert("Hola " + nombre + " pasa un buen dia") */
    }

    add(){

        this.tarea = this.vista.inTarea.value
        this.listaTareas.push(this.tarea)
        let lista = "<ul>"
        this.listaTareas.forEach(tarea => {lista+=`<li>${tarea}</li>`; })
        lista +="</ul>"
        console.log(lista)
        this.vista.tareas.innerHTML = lista
    }
}

(()=>{
    document.addEventListener("DOMContentLoaded", () => new Main(), false)
})()