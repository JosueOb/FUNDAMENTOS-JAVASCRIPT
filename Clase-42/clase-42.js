// Cambiando de contexto al llamar a una función

// El contexto (o alcance) de una función es por lo general, window. Así que en ciertos casos, cuando intentamos referirnos a this
// en alguna parte del codigo, es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos

// existen al menos tres maneras de cambiar el contexto de una función
// * usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.
// * usando el método .call, ejecutamos inmediatamente la función con el contexto indicado
// usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores

const josue = {
    nombre: 'Josué',
    apellido: 'Cando'
}
const karol = {
    nombre: 'Karol',
    apellido: 'Chávez'
}

function saludar(saludo = 'Hola'){//en caso de que no se envie un saludo, se asigne por defecto 'Hola'
    console.log(`${saludo}, mi nombre es ${this.nombre}`)//en este caso this es window, ya que window es quién ejecuta este función saludar()
}

// const saludarAJosue = saludar.bind(josue, 'Hola parce')//de este manera, bind devuelve una nueva función, atando el parámeteo pasado al this de la función
// const saludarAKarol = saludar.bind(karol)

// setTimeout(saludar.bind(josue,'Hola che'),1000)//se devuelve una nueva función atado al objeto josue, no se ata josue siempre a la función saludar
// en el bind se puede modificar el parámetro que recibe la función saludar(), este debe ubicarse despues de especificar al objeto o al contexto que debe ser atada la función

// la función bind no ejecuta la función, solo retorna una nueva función con el contexto cambiado

// call y applay ejecutan la función en ese momento
// saludar.call(josue)//ejecuta inmediatamente, si se cambia el call con bind, no va a ejecutar a la funcion
// saludar.call(karol, 'Hola che')//de igualmanera, los parametros de especifican despues del contexto y separados por comas en caso de más parámetros

saludar.apply(josue,['Hola che'])//es similar a call, pero como segundo parametro de applay() recibe un array con todos los parametros que recibe la funcion saludar()

// Es importante manejar quien es this dentro de una función , es algo que no podemos perder de vista cuando se escribe código asincrona
// ya que al ejecutar una función asincrona, el this va a cambiar, por tal motivo, debemos estar seguros quien queremos que sea this.