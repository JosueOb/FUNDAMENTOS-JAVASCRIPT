// Desestructuración Objetos
var josue = {
    nombre : 'Josue',
    apellido : 'Cando',
    edad : 22
}
var karol = {
    nombre : 'Karol',
    apellido : 'Carcelén',
    edad : 23
}

function imprimirNombreEnMayusculas(persona){
    //var nombre = persona.nombre
    var { nombre }  = persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona){
    // var {nombre} = persona, {edad} = persona;
    var {nombre, edad} = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} anios`);

}
imprimirNombreEnMayusculas(josue)
imprimirNombreEnMayusculas(karol)
imprimirNombreYEdad(josue)
imprimirNombreYEdad(karol)

