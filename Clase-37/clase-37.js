// Hace cuántos días naciste?

// Nota: Con variables de tipo Date, se puede realizar operaciones de suma y resta similares a las que se realizan con números
// El resultado que se obtiene está en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales para
// llevarlos a días, meses o anios según queramos. También aplica para horas, minutos, segundos y milisegundos

function diasEntreFechas(fecha1, fecha2){
    const unDia = 1000 * 60 * 60 * 24//se obtiene los milisegundos en un día
    const diferencia = Math.abs(fecha1 - fecha2)//absoluto comvierte un negativo a positivo, la difernecia esta en milisegundos
    return Math.floor(diferencia / unDia)
}
const hoy = new Date()//se obtiene la fecha actual por defecto
const nacimiento = new Date(1997,1,18)//el constructor de new Date recibe el anio, el mes (comienza en cero, por lo que enero es 0) y el día

// también existen métodos para obtener un valor de la fecha en específico. Estos métodos son:
// getFullYear()
// getMonth()
// getDate()
// getHours()
// getMinutes()
// getSeconds()
// getMiliseconds()
// getDay()
// Date.now()
