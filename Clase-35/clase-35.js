// Async-await - Lo último en ascincronismo

// Nota: Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del 
// programa hasta que todos las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes 
// de la definición de la función, y encerrar el llamado de la Promise.all() dentro de un bloque try y catch.

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

async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try{
        // Se guardan todos los personajes en una variables
        // cuando todas las promesas se resuelvam, se almacene el resultado en la variable personaje
        // la palabra claves awair detiene la ejecución de esta función hasta que todas las promesas
        // sean resueltas, además se debe utiliza async antes de la definición de la función
        // debe estas dentro de un bloque try y catch
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }catch(id){//en caso de error
        onError(id)
    }
    
    // // Para obtener el valor de las promesas se utiliza los siguiente método
    // Promise
    //     .all(promesas)//se le pasa un array de promesas
    //     .then(personajes => console.log(personajes))//se obtien un array con cada una de las promesas
    //     .catch(onError)//en caso de que suceda un error
}

obtenerPersonajes()

// No todos los navegadore soportan async-await, en caso de que no lo soporte se debe utilizar un 
// polifills