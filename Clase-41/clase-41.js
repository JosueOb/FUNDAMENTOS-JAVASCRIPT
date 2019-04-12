// Estructuras de datos inmutables

// Nota: Las estructuras de datos inmutables forman parte de los principios de la programación Funcional y 
// nos permite evitar tener efectos colaterales en los datos. En otras palabras, que hayana modificaciones
// en las variables sin nuestro consentimiento, produciendo comportamientos inesperados en el programa
// Un valor inmutable es un valor que no se puede cambiar luego de ser definido, se puede modificar pero debe
// ser en un objeto diferente

const josue = {
    nombre: 'Josué',
    apellido: 'Cando',
    edad: 22
}

// en este caso se esta modificando al atributo edad del objeto
// function cumpleanios(persona){
//     persona.edad++
// }

// const cumpleanios = persona => persona.edad++

const cumpleanios = persona =>({//se desglosa al objeto persona
    ...persona,//se mantiene el nombre y apellido, pisando a la edad
    edad: persona.edad + 1
})
//por lo que este función retorna un nuevo objeto sin modificar al objeto que recibe,
// pero se debe tener una nueva variable que almacene el objeto que retorna esta función
// De esta forma de deshace del efecto de lado, evitando que se modifiquen las variables sin el consentimiento