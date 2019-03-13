// Condicionales
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

// Desafío
function imprimirSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.edad >= 18){
        console.log('Es mayor de edad')
    }else{
        console.log('Es menor de edad')
    }
}

imprimirSiEsMayorDeEdad(josue)