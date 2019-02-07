// Parámetros como referencia o como valor
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
// esta función recibe como parámetro una referencia a un objeto
// aumentando en uno su edad y modificando el valor del atributo edad
// function cumpleanios(persona){
//     persona.edad += 1
// }

//Como solución se retorna un nuevo objeto con dicho aumento
function cumpleanios(persona){
    //se crea un nuevo objeto, desglosando los atributos del objeto persona
    //y se cambia el atributo de edad del mismo
    return {
        ...persona,
        edad: persona.edad + 1
    }
}