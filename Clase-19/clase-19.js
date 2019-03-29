// Transformar un array
// La función map devuelve un nuevo array transformando los elementos de otro array

// Objetos
var josue = {
    nombre: 'Josué',
    apellido: 'Cando',
    altura: 1.69
}
var karol = {
    nombre:'Karol',
    apellido:'Carcelén',
    altura: 1.60
}
var ricardo = {
    nombre:'Ricardo',
    apellido:'Obaco',
    altura: 1.62
}
var laura = {
    nombre:'Laura',
    apellido:'Jiménez',
    altura: 1.50
}
var alexander = {
    nombre:'Alexander',
    apellido:'Pumisacho',
    altura: 1.80
}
var mishel = {
    nombre:'Mishel',
    apellido:'Centeno',
    altura: 1.75
}

// Arrow functions

const esAlta = ({altura}) => altura > 1.70

// Colección
var personas = [josue,karol,laura,ricardo,alexander,mishel]

// Se filtra las personas altas

var personasAltas = personas.filter(esAlta)

// const pasarAlturaACms = persona => {
//     // persona.altura = persona.altura * 100
//     // también se lo puede expresar de la siguiente manera
//     // pero se esta modificando la altura del arreglo original
//     // persona.altura *= 100
//     // para evitar esto, se retorna un nuevo objeto desglosando
//     // return persona
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// } 
// En caso de returnar un objeto, como es en este caso, a través de una arrow functions, debe 
// estar entre paréntesis
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

// Se transforma al altuda de metros a centímetros
// la función map recibe como parámetro una condición (función)
var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)
// Nota: la función map devuelve un nuevo array transformando los elementos de un determinado array
// sin modificar al array original, pero si se modifica cada uno de los elementos, esta pedurará en los
// elementos del array original