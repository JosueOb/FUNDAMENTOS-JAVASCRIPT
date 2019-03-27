// Arrow functions, es asignarle a una variables una función, evitando utilizar la palabra
//reservada function y utilizar los siguientes caracteres => .
var josue = {
    nombre : 'Josué',
    apellido : 'Cando',
    edad: 22,
    ingeniero: false,
    cantante : true,
    tecnico : true,
    dj : false,
    programador : true
}
var juan = {
    nombre : 'Juan',
    apellido :'Gomez',
    edad : 17
}

// Para indicar que una variable es constante se utiliza const
// Es una buena practica nombrarla con mayúsculas y separados mediante un guion bajo
const MAYORIA_DE_EDAD = 18

//al estar una función comprendida dentro de una varibles, se la concidera como anónima, a la cual
// se la invoca mediante el nombre de la variable, como si se tratara de una función.
//Para entender de que se trata de una función se utiliza const en vez de var

// const esMayorDeEdad = function (persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

// si solo se tiene un solo parámetro, se puede omitir los paréntesis
// también se puede omitir las llaves y el return, ya que el arrow functions
// hará la comparación y devolvera true o false, utilizando implícitamente un return
// permitiendonos definir la misma funcionalidad en una línea de código
// para desesctructurar un objeto debe estar comprendido entre paréntesis, llaves y el nombre del atributo del objetos

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(josue)
imprimirSiEsMayorDeEdad(juan)

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('Acceso denegado')
    }
}

// Desafío
// es menor de edad como arrow function y retorne la negacion de la llamada es mayor de edad
const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad})