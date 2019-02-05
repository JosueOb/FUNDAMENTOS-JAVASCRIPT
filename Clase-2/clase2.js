// Variables tipo string
var nombre = 'Josué', apellido = 'Cando'

//Convertir el nombre en mayúsculas
var nombreEnMayusculas = nombre.toUpperCase()

//Convertir el apellido en minúsculas
var apellidoEnMinusculas = apellido.toLowerCase()

//Seleccionar el primer carácter de un string
//chatAt significa el carácter en la posición
var primerLetraDeNombre = nombre.charAt(0);

//La cantidad de caracteres que tiene un string
//para ello se utiliza un atributo y no una función
var cantidadDeLetrasDelNombre = nombre.length

// Concatenar texto
var nombreCompleto = nombre + ' ' + apellido

//interpolación de texto
//se utiliza la comilla invertida
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`

// Acceder a un substring
// var str = nombre.charAt(1) + nombre.charAt(2)
var str = nombre.substr(1,2)

