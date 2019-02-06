// Variables: Números
var edad = 22

//Incremento en uno
// edad = edad + 1
edad += 1

var peso = 75
// Decremento en dos
// peso = peso - 2 
peso -= 2

var sandwich =  1

// peso = peso + sandwich
peso += sandwich

var jugarAlFutbol = 3

// peso = peso - jugarAlFutbol
peso -= jugarAlFutbol

//Decimales
var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3 ) / 100
//la función toFixed obtiene la cantidad decimales a conciderar
//lo que devuelve es un string
var totalStr = total.toFixed(3)
//parseFloat convierte un string a un número decimal(punto flotante)
var total2 = parseFloat(totalStr)

var pizza = 8
var personas = 2
var cantidadDePorcionesPersona = pizza / personas