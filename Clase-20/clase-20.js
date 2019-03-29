// Reducir un array a un valor
// La función reduce() va a reducir un array a un valor único
// Objetos
var josue = {
    nombre: 'Josué',
    apellido: 'Cando',
    altura: 1.69,
    cantidadDeLibros: 20
}
var karol = {
    nombre:'Karol',
    apellido:'Carcelén',
    altura: 1.60,
    cantidadDeLibros: 50
}
var ricardo = {
    nombre:'Ricardo',
    apellido:'Obaco',
    altura: 1.62,
    cantidadDeLibros: 15
}
var laura = {
    nombre:'Laura',
    apellido:'Jiménez',
    altura: 1.50,
    cantidadDeLibros: 80
}
var alexander = {
    nombre:'Alexander',
    apellido:'Pumisacho',
    altura: 1.80,
    cantidadDeLibros: 100
}
var mishel = {
    nombre:'Mishel',
    apellido:'Centeno',
    altura: 1.75,
    cantidadDeLibros: 7
}

// Colección
var personas = [josue,karol,laura,ricardo,alexander,mishel]

// // Acumulador
// var totalLibros = 0

// for(var i = 0; i < personas.length; i++ ){
//     // totalLibros = totalLibros + personas[i].cantidadDeLibros
//     totalLibros += personas[i].cantidadDeLibros
// }


const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

// Se puede realizar lo anterior de una manera más prolija utilizando la
// función map
// como parámetros la función reduce recibe una función, y el valor inicial
// del acumulador
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)