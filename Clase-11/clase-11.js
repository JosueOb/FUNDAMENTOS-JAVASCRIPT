// Funciones que retornan valores
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

function imprimirProfesiones(persona){
    // los caracteres `${}` se conocen como template string, permitiendo intepolar variables
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es Ingeniero')
    }
    if(persona.cantante){
        console.log('Cantante')
    }
    if(persona.tecnico){
        console.log('Técnico')
    }
    if(persona.dj){
        console.log('Dj')
    }
    if(persona.programador){
        console.log('Programador')
    }
}

imprimirProfesiones(josue)

// Para indicar que una variable es constante se utiliza const
// Es una buena practica nombrarla con mayúsculas y separados mediante un guion bajo
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}
function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(josue)
imprimirSiEsMayorDeEdad(juan)