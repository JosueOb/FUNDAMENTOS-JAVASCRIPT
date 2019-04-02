// Callbacks

// JQuery CDN (Content Delivery Network ) que es un servidor que contiene el archivo a utilizar, localizando al más cercano
// Se utiliza JQuery para poder realizar request(peticiones) a una API (SWAPI Star Wars API) 

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

// para realizar un request con JQuery se utiliza el signo de dólar $.get()
// acepta varios parametros, como la url completa, e indicarle que el request se realiza a otra página y no en la misma (archivo actual)
// esto se realiza utilizando {crossDomain: true}

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
// objeto
const opts = { crossDomain: true}

const onPeopleResponse = function(persona){
    console.log(`Hola soy ${persona.name}`)
}

// se realiza el request
// Por último se define el callback, siendo una función que se ejecuta en un futuro, es decir, al terminar el request
// .get() se encargará de llamar al callback al terminar el request
// los parámetros que regresa JQuery en caso de que se ejecuto exitosamente son la data (objeto), es estado de respuesta, y un objeto request de JS
// la función dentro del get() se ejecutará si el request es exitoso
// $.get(lukeUrl, opts, function(){
//     // Arguments es una variable que tiene todas las funciones en forma de una array, que recibe la función
//     console.log(arguments)
// })
$.get(lukeUrl, opts, onPeopleResponse)


// Nota: un callback es una función que se pasa a otra como un argumento. Esta función se invoca, después,
// dentro de la función externa para complear alguna acción 