// Estructuras repetitivas: While
var josue = {
    nombre: 'Josué',
    apellido: 'Cando',
    edad: 22,
    peso: 68
}

console.log(`Al inicio del anio ${josue.nombre} pesa ${josue.peso} kg`)

// Constantes
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365
const META = josue.peso - 3

var dias = 0

// funciones arrow functions
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

while(josue.peso > META){

    // Nos permite determinar algún bug en el programa
    debugger 

    if(comeMucho()){
        aumentarDePeso(josue)
    }
    if(realizaDeporte()){
        adelgazar(josue)
    }
    dias += 1 
}

console.log(`Pasaron ${dias} días hasta que ${josue.nombre} adelgazó 3kg`)