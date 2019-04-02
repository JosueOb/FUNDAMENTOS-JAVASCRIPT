// Haciendo múltiples requests

const URL_API = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'

// const URL_COMPLETA = `${URL_API}${PEOPLE.replace(':id', 1)}`
const opciones = { crossDomain : true}

const OnPeopleResponse = function(people){
    console.log(`Hola, yo soy ${people.name}`)
}

function obtenerPersonaje(id){
    const url = `${URL_API}${PEOPLE.replace(':id', id)}`
    $.get(url, opciones, OnPeopleResponse)
}

// Múltiples requests
// El orden de las respuestas no se basan el orden de las llamadas a la función obtenerPersonaje
// es decir, no se conoce en que orden llegará la respuesta, esto se conoce como Asincronismo de JS
// El orden de ejecución no es igual al orden de respuesta

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
obtenerPersonaje(5)