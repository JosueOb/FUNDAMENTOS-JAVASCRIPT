// Contexto de las funciones : quién es this

function Persona(nombre, apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}



// Se define la misma funciones anteriores pero utilizando arrow functions
// Persona.prototype.saludar = () => {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }

// en las arrow functions this apunta al this que este afuera de la función y no al objeto que se crea
// y this en el espacio global es window

// para hacer referencia al mismo objeto creado, se utiliza las funciones, donde
// this referencia al objeto creado, evitando el problema que se tiene con las arrow functions
Persona.prototype.soyAlto = function(){
    // debugger
    return this.altura > 1.70
}
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var josue = new Persona('Josué', 'Cando',1.69)
var karol = new Persona('Karol', 'Carcelen',1.60)
var ricardo = new Persona('Ricardo', 'Obaco',1.80)


// Nota: el error del contexto de this en JavaScript es uno de los errores más comunes
// ya que dentro de la arrow function, this está haciendo referencia al espacio global, a window.del navegador