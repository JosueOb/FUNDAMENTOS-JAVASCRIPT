// Estructuras repetitivas FOR
var josue = {
    nombre: 'Josué',
    apellido: 'Cando',
    edad: 22,
    peso: 68
}

console.log(`Al inicio del anio ${josue.nombre} pesa ${josue.peso} kg`)

// Constantes
const INCREMENTO_PESO = 0.2 
const DIAS_DEL_ANIO = 365

// funciones arrow functions
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for(var i = 1; i <= DIAS_DEL_ANIO; i++){
    // Número random entre 0 y 1
    var random = Math.random()

    if(random < 0.25){

        aumentarDePeso(josue)

    }else if(random < 0.50){

        adelgazar(josue)

    }
}

console.log(`Al final del anio ${josue.nombre} pesa ${josue.peso.toFixed(1)} kg`)