// Manejando el orden y asincronismo en JavaScript

const URL_API = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'

// const URL_COMPLETA = `${URL_API}${PEOPLE.replace(':id', 1)}`
const opciones = { crossDomain : true}

// const OnPeopleResponse = function(people){
//     console.log(`Hola, yo soy ${people.name}`)
// }

// function obtenerPersonaje(id){
//     const url = `${URL_API}${PEOPLE.replace(':id', id)}`
//     $.get(url, opciones, OnPeopleResponse)
// }
function obtenerPersonaje(id, callbak){
    const url = `${URL_API}${PEOPLE.replace(':id', id)}`

    
    $.get(url, opciones, function(people){
        console.log(`Hola, yo soy ${people.name}`)

        // Se verifica que se resiva una función para hacer su llamado
        if(callbak){
            callbak()
        }
    })
}

// Múltiples requests en forma secuancial

// se utiliza una funcion para evitar que se llame inmediatamente a la función obtenerPersonaje(2) antes que la funcion
// obtener función obtenerPersonaje(1)
// A lo siguiente se lo conoce como callBackHell (el infierno de los callBacks), 
// como el código comienza a crecer de forma horizontal y no vertical
obtenerPersonaje(1, function(){
    obtenerPersonaje(2,function(){
        obtenerPersonaje(3,function(){
            obtenerPersonaje(4,function(){
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(6,function(){
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})

// obtenerPersonaje(2)
// obtenerPersonaje(3)
// obtenerPersonaje(4)
// obtenerPersonaje(5)

// Nota: Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando
// callbaks, con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callbak se haga a través 
// de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llanada
// CallBackHell