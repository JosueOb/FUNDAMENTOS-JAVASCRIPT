// ASINCRONISMO
// Funciones como parámetros
// En JavaScript las funciones pueden recibir como parámetros otras funciones



class Persona {
    constructor(nombre, apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    
    // métodos de la clase persona
    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        // Se verifica si la función recibida tiene algún valor (si la función existe)
        if(fn){
            fn(nombre,apellido, false)
        }
    }
    soyAlto(){
        return this.altura > 1.70
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido,altura){
        // No se puede acceder al this, hasta no llamar al constructor padre
        // mediante la palabra super
        super(nombre,apellido,altura)
        // después se puede utilizar this
    }

    // métodos
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if(fn){
            fn(nombre,apellido, true)
        }
    }

}


function responderSaludo (nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mirá, no sabía que eres desarrollador/a`)
    }
}


var josue = new Persona('Josué', 'Cando',1.69)
var karol = new Persona('Karol', 'Carcelen',1.60)
var ricardo = new Desarrollador('Ricardo', 'Obaco',1.80)

josue.saludar(responderSaludo)
karol.saludar(responderSaludo)
ricardo.saludar(responderSaludo)