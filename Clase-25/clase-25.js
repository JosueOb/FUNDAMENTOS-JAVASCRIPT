// Clases en JavaScript

// A partir del anio 2005 Js se ha ido actualizando, por lo que las clases
// de JavaScript son introducidad en el ECMAScript 2015, con mejora en la sintaxis
// sobre la herencia basada en prototipos de JavaScript
// ECMAScript es el estándar en el cual se basa JS para conformarse como lenguaje,es decir, 
// son todas las funcionalidades que trae el lenguaje

class Persona {
    constructor(nombre, apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    
    // métodos de la clase persona
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return this.altura > 1.70
    }
}

// function Persona(nombre, apellido,altura){
//     this.nombre = nombre
//     this.apellido = apellido
//     this.altura = altura
// }
// Persona.prototype.soyAlto = function(){
//     return this.altura > 1.70
// }
// Persona.prototype.saludar = function(){
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }

// Para heredar de una clase padre se utiliza la palabra extends (extensión)
// despues del nombre de la clase y con el nombre del padre
class Desarrollador extends Persona {
    constructor(nombre, apellido,altura){
        // No se puede acceder al this, hasta no llamar al constructor padre
        // mediante la palabra super
        super(nombre,apellido,altura)
        // después se puede utilizar this
    }

    // métodos
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/ra`)
    }

}
// function Desarrollador (nombre, apellido){
//     this.nombre = nombre
//     this. apellido = apellido
// }
// Desarrollador.prototype.saludar= function(){
//     console.log(`Hola me llamo ${this.nombre} ${this.nombre} y soy desarrollador/ra`)
// }



// var josue = new Persona('Josué', 'Cando',1.69)
// var karol = new Persona('Karol', 'Carcelen',1.60)
// var ricardo = new Persona('Ricardo', 'Obaco',1.80)




// Nota: La palabra extends se usa en declaraciones de clases o expresiones de clase
// para crear una clase que es hija de otra clase
// El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase