// Promesas encadenadas
// Los request se realizan en serie no en paralelo

var URL_API = 'https://swapi.co/api/'
var PEOPLE = 'people/:id'
var opciones = { crossDomain: true}

function obtenerPersonaje(id){
    return new Promise(function(resolve, reject){
        const url = `${URL_API}${PEOPLE.replace(':id',id)}`
        $
        .get(url, opciones, function(data){
            resolve(data)
        })
        .fail(()=>{reject(id)})
    })
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(personaje1 => {
        console.log(`El personaje 1 es ${personaje1.name}`)
        // Para devolver una nueva promesa, se utiliza un return dentro de una arrow function
        return obtenerPersonaje(2)
    })
    .then(personaje2 => {
        console.log(`El personaje 2 es ${personaje2.name}`)
        return obtenerPersonaje(3)
        
    }) //se obtiene el resultado de la segunda promesa
    .then(personaje3 => {
        console.log(`El personaje 3 es ${personaje3.name}`)
        return obtenerPersonaje(4)
        
    })
    .then(personaje4 => {
        console.log(`El personaje 4 es ${personaje4.name}`)
        return obtenerPersonaje(5)
        
    })
    .then(personaje5 => {
        console.log(`El personaje 5 es ${personaje5.name}`)
        return obtenerPersonaje(6)
        
    })
    .then(personaje6 => {
        console.log(`El personaje 6 es ${personaje6.name}`)
        return obtenerPersonaje(7)
        
    })
    .then(personaje7 => {
        console.log(`El personaje 7 es ${personaje7.name}`)
        
    })
    .catch(onError)//en caso de un error este catch sirve las todos los then
    //recibe el id que recibe el fail de la promesa