// Filtrar un array
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
// const esAlta = persona => persona.altura > 1.70
// en caso de desglosar un objeto
const esAlta = ({altura}) => altura > 1.70

// Colección
var personas = [josue,karol,laura,ricardo,alexander,mishel]

// Se filtra las personas altas
// esta función filter lleva como parámetro una condición (en este caso es una función)
// además esta función va a iterar sobre el arreglo indicado
// filter devuelve un nuevo array
var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(function (persona){
//     return persona.altura > 1.80
// })

// RETO
// const esBaja = ({altura}) => altura < 1.70
const esBaja = ({altura}) => !esAlta({altura})

var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)