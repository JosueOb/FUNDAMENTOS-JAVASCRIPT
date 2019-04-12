// Closures de JavaScript

// Nota: un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada, y conserva
// este estado a través de reiteradas ejecuciones. Un aspecto fundamental de los closures es que son funciones que retornan otras funciones

function crearSaludo(finalDeFrase){//función generadora de  otra función
    return function(nombre){//función anónima, esta fucnión recuerda la variable finalDeFrase
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentivo = crearSaludo('che')
const saludoMexicano = crearSaludo('güey')//al crear este saludo mexicano, no se modifica al saludo argentino
const saludoColombiano = crearSaludo('parce')

saludoArgentivo('Josue')//Hola Josue che
saludoMexicano('Josue')//Hola Josue güey
saludoColombiano('Josue')//Hola Josue parce