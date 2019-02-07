// Objetos
var josue = {
    nombre : 'Josue',
    apellido : 'Cando',
    edad : 22
}
var karol = {
    nombre : 'Karol',
    apellido : 'Carcelén',
    edad : 22
}
// function imprimirNombreEnMayusculas(persona){
//     console.log(persona.nombre.toUpperCase())
// }
//Se puede desglosar a un objeto a través de {} y el nombre del atributo del objeto
function imprimirNombreEnMayusculas({nombre}){
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(josue)
imprimirNombreEnMayusculas(karol)
imprimirNombreEnMayusculas({nombre : 'Ricardo'})
imprimirNombreEnMayusculas()
imprimirNombreEnMayusculas({apellido : 'Obaco'})