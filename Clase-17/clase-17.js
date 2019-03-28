// Introducción a arrays

// Esta estructura de datos nos permite agupar cierto tipo de datos como números, letras, objetos, funciones, entre otros.
// Arreglo es un colección de valores, para después realizar cierta operación sobre dicho arreglo

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
    altura: 1.69
}

// Colección de objetos
var personas = [josue, karol, ricardo]

// Recorrer la colección
for(var i = 0, i ; i< personas.length ; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}