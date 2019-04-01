// Cómo funciona el tiempo en JavaScript


// console.log('a')

// la función setTimeout que recibe dos parámetros que es una función y un tiempo para su ejecución
// setTimeout(function(){
//     console.log('b')
// },2000)
// puede recibir una función o arrow functions
// esta función se agrega en la cola de tareas, pero JS sigue con su ejecucion de la cola de ejecución
// al finalizar con esta cola pasa a la cola de tareas
// setTimeout(()=>console.log('b'), 0)

// console.log('c')



setTimeout(()=> console.log('d'),2000)
// Ojo: pero esta función setTimeOut no garantiza que en ese tiempo establecido se ejecute, ya que JS
// tomo como prioridad la cola de ejecución del programa principal, al terminar con dicha cola
// pasa a la ejecución de la cola de tareas, en donde se encuentra la función setTimeOut
for(var i = 0; i < 10000000000; i++){

}


// Nota: En principio, cualquier tarea que se haya delegado al navegador a través de un callback, deberá
// esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. Por esta razón
// el tiempo de espera definido en funciones como setTimeout, no garantiza que el callback se ejecute 
// en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas
// se haya vaciado