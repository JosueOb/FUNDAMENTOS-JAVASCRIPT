// Manejo de errores con callBaks

const URL_API = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
const opciones = { crossDomain : true}

function obtenerPersonaje(id, callback){
    const url = `${URL_API}${PEOPLE.replace(':id', id)}`

    // se tiene dos callBacks uno dentro de get y la otra que se ejecuta
    // una vez verificado que exista callBack
    // $.get(url, opciones, function(people){
    //     // console.log(`Hola, yo soy ${people.name}`)

    //     // // Se verifica que se resiva una función para hacer su llamado
    //     // if(callbak){
    //     //     callbak()
    //     // }
    // })

    // la función fail() que recibe un callback ye se ejecutará si se presenta un error en la ejecución del request
    // Ahora si se presenta un error en la cadena de callbacks, se rompe y por lo cual, cancela la ejecución de los demás
    // callbaks anidados
    // $
    // .get(url, opciones, callback)
    // .fail(function(){
    //     console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    // })

    // utilizando arrow functions
    $
    .get(url, opciones, callback)
    .fail(()=>{
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`) 
    })
}

// Múltiples requests en forma secuancial

obtenerPersonaje(1, function(personaje){
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2,function(personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3,function(personaje){
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4,function(personaje){
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function(personaje){
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6,function(personaje){
                        console.log(`Hola, yo soy ${personaje.name}`)
                        
                        obtenerPersonaje(7,function(personaje){
                            console.log(`Hola, yo soy ${personaje.name}`)
                        })
                        
                    })
                })
            })
        })
    })
})



// Nota: Para solucionar el problema de quedarnos sin conexión, u otro erros similar,
// en medio de una sucesión de callbacks utilizamos el método fail()