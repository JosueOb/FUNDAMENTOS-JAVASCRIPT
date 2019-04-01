// La verdad oculta sobre las clases en JavaScript
// Herencia sobre los prototipos de JS
// JavaScript no soporta la herencia porque no soporta la clase
// sino prototipos y lo que existe es la herencia prototipal

// Para realizar la herencia prototipal, se necesitaba crear una función
function heredaDe(prototipoHijo, prototipoPadre){
    // Se asigna un prototipo al prototipo hijo, se define una función vacía, anónima y
    // asignandola a una variable llamada fn o noop (que no realiza nada)
    var fn = function(){}
    // al prototipo fn se le asigna el prototipo del padre
    // Nota: esta función herdaDe recibe como parámetros otras funciones, por lo cual, toda
    // función tiene el atributo prototype
    fn.prototype = prototipoPadre.prototype
    // al prototipo hijo va a ser un nuevo objeto fn, se realiza para no pisar el 
    // prototipe del padre
    prototipoHijo.prototype = new fn
    // se asigna la función constructora de la clase hija, esto se realiza para evitar 
    // llamar al constructor del prototipo padre
    prototipoHijo.prototype.constructor = prototipoPadre


}

function Persona(nombre, apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.soyAlto = function(){
    return this.altura > 1.70
}
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}


function Desarrollador (nombre, apellido){
    this.nombre = nombre
    this. apellido = apellido
}

// Se llama a la función para que el prototipo hijo herede del prototipo padre
// la llamada de la función herdaDe debe estar antes de las funciones del prototipo hijo
// debido a que al heredar padre, se sobre escribe la función saludar. Si se la ubica al final
// no se sobreescribe la función y se mantiene el del padre
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar= function(){
    console.log(`Hola me llamo ${this.nombre} ${this.nombre} y soy desarrollador/ra`)
}



// var josue = new Persona('Josué', 'Cando',1.69)
// var karol = new Persona('Karol', 'Carcelen',1.60)
// var ricardo = new Persona('Ricardo', 'Obaco',1.80)



// Nota: los objetos en JavaScript son "contenedores" dinámicos de propiedades.
// Estos objetos poseen un enlace al prototipo a un objeto prototipo.
// El prototipo padre o base de cada función, o hasta donde termina la cadena de herencia
// es de object