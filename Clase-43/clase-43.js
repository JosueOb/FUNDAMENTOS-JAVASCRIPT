// Cuando hace falta poner el punto y coma al final de la línea?

// El punto y coma es opcional en JavaScript, excepto en algunos casos:
// * cuando usamos varias instrucciones en una misma línea
// * al comenzar la próxima línea con un array
// * al comenzar la próxima línea con un template string

// alert('Hola')
// var nombre = 'Josue'
// // const saludarAJosue = function(){...}//declaracion y asignación
// function saludar(){
//     console.log('Hola')
// }
// for(let i = 0; i < 10 ; i++){
//     console.log(i)
// }

// en este caso se tiene dos sentencias, por los cuales deben estar separadas por un punto y coma
// console.log('Hola mi nombre es Josué');
// [1,2,3].forEach(element => console.log(element))

// al utilizar un template string (``), también debe estar separado por un ;
const nombre = 'Josué'
console.log('Hola mi nombre es Josué');
`${nombre} es un desarrollador`

// otro caso es, 
function calcularDoble(numero){
 return { //al realizar un enter despues del return, JavaScript lo entiende como un punto y coma es decir como return (enter, lo entenderá como ;) {objeto}
     original: numero, doble: numero * 2
    }
}