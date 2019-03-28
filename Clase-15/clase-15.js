// Estructuras repetitivas: do-while
// A diferencia del while, el do-while se ejecuta una vez

var contador = 0

const llueve = () => Math.random() < 0.25

do{
    contador++
}while(!llueve())

var frecuencia = contador > 1 ? 'veces': 'vez';


console.log(`Fui a ver si llovía ${contador} ${contador > 1 ? 'veces':'vez'}`)
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`)