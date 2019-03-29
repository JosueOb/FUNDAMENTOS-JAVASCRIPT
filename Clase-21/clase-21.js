// Cómo funcionan las clase en JavaScript
// Las clases en JavaScript no son igualas a las clases que se conocen
// en otros lenguajes de programación, no se tiene la herencia
// Las clases en JS terminan siendo prototipos

// Para definir un prototipo solo se necesita definir una función
function Persona(nombre, apellido,altura){
    // this hace refenrecia al objeto que se acaba de construir
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 20 //todos los objetos que se creen tendra 20 años
    this.altura = altura
    // return this se encuentra implícito dentro de esta función
}

// se indica que dentro del prototipo persona se encuentra un atributo
// saludar que es una función
Persona.prototype.saludar = function() {
    // this hace referencia a los valores guardados en el objeto
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
// RETO
Persona.prototype.soyAlto = function(){
    // if(this.altura > 1.70){
    //     console.log('Soy alto')
    // }else{
    //     console.log('Soy bajo')
    // }
    // se utiliza un operador condicinal (ternario)
    // sintaxis condición ? expresión1 : expresión2
    // en caso de que la condición es verdaderas se devuelve la primera expresión
    // caso contrario la segunda expresión
    console.log(`Soy ${this.nombre} y soy ${this.altura > 1.70 ? 'alto':'bajo'} porque mido ${this.altura}`)
    // return this.altura > 1.80 ? 'Soy alto': 'Soy bajo'
}


// Se puede crear un objeto dado un prototipo, llamandolo a través
// de la palabra reservada new
var josue = new Persona('Josué', 'Cando',1.69)
var karol = new Persona('Karol', 'Carcelen',1.60)
var ricardo = new Persona('Ricardo', 'Obaco',1.80)

// Nota: Las clases sons funciones cuya sintaxis tiene dos componentes:
// expresiones y declaraciones
