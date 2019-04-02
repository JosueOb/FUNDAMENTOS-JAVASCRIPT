// Promesas

// Nota: Las promesas son valores que aun no conocemos.
// Las promesas tienen tres estados:
// pending: estado incial de una promesa
// fullfilled: cuando la promesa se resuelve exitosamente
// rejected: si sucede algún error
// Observar el material: https://static.platzi.com/media/public/uploads/promesas_e7100aa0-540e-4d37-83fc-113b890c350e.pdf
// Las promesas pueden resolverse de forma asincróna o sincróna
// La promesa es un objeto de JavaScript, que recibe una función, la cual
// lleva dos parametros (resolve, reject), estas son dos son funciones que se deben llamar si la promesa se resuelve
// exitosamente se llama a resolve pasandole el valor que se espera o si se presenta un error se llama a reject 
// pasandole el error
// Se puede tener promesas encadenadas, dentro del estado fullfilled
// Las promesas se invocan de la siguiente forma:

// new Promise( ( resolve, reject ) => {
//   // --- llamado asíncrono
//   if( todoOK ) {
//      // -- se ejecutó el llamado exitosamente
//      resolve()
//   } else {
//      // -- hubo un error en el llamado
//      reject()
//   }
// } )

const URL_API = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opciones = { crossDomain : true}

// function obtenerPersonaje(id, callback){
//     const url = `${URL_API}${PEOPLE.replace(':id', id)}`

//     // utilizando arrow functions
//     $
//     .get(url, opciones, callback)
//     .fail(()=>{
    //         console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`) 
    //     })
    // }
    
    // Se modifica la función obtenerPersonaje() para que en vez de que reciba un callback
    // retorne una promesa
    
    function obtenerPersonaje(id){
        return new Promise(function(resolve, reject){
            const url = `${URL_API}${PEOPLE.replace(':id', id)}`
            $
            .get(url, opciones, function(data){//si se ejecuta exitosamente
                resolve(data)
            })
            .fail(()=>reject(id))//si se presenta algún error
            
    })

}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

// Múltiples requests en forma secuancial
obtenerPersonaje(1)
    .then(function(personaje){ //el personaje hace refenecia al data que recibe resolve()
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError) //se hace referencia a la función que se esta utilizando
    // .catch(function(id){//hace referencia al id que recibe el reject()
    //     onError(id)
    // })

// obtenerPersonaje(1, function(personaje){
//     console.log(`Hola, yo soy ${personaje.name}`)
// })