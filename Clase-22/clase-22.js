// Modificando un prototipo

function Persona(nombre, apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

// Persona.prototype.saludar = function() {
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }


// Es muy imporntante la ubicación de las funciones de un prototipo
// ya que deben estar siempre juntas (agrupadas) antes de definir un objeto con dicho prototipo
// Se debe definir el prototipo y sus funciones al principio, para poder se llamddos 
// al crear un objeto y esten al alcance para su creación
// Persona.prototype.soyAlto = function(){
//     console.log(`Soy ${this.nombre} y soy ${this.altura > 1.70 ? 'alto':'bajo'} porque mido ${this.altura}`)
// }



// Se define la misma funciones anteriores pero utilizando arrow functions
Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
// En este caso,al utilizar arrow function, se retorna que todas las personas con bajas,
// ya que devuelve en todos los objetos definidos un false, siendo uno mayor a la altura establecida
Persona.prototype.soyAlto = () => this.altura > 1.80

var josue = new Persona('Josué', 'Cando',1.69)
var karol = new Persona('Karol', 'Carcelen',1.60)
var ricardo = new Persona('Ricardo', 'Obaco',1.80)

// Nota: JavaScript funciona como una estructura orientada a objetos y cada objeto tiene una
// propiedad privada que mantiene un enlace a otro objeto llamado prototipo.
