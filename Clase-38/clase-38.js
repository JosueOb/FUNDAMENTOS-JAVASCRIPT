// Funciones recursivas

// Nota: la recursividad es un concepto muy importante en cualquier lenguaje de programación. Una función recursiva es básicamente
// aquella que se llama (o se ejecuta) a sí misma de forma controlada, hasta que sucede una condición base.

/*
    13 / 4 = 
    13 - 4 = 9        1 (cuenta)
    9 - 4 = 5         1 (cuenta)
    5 - 4 = 1         1 (cuenta)
    1 - 4 = -3       caso especial, ya que 1 no se puede dividir entre 4, entonces la división entera entre 13 / 4  es 3 (cuentas)
*/

function divisionEntera(dividendo, divisor){
    // la recursividad necesita de un caso base y un caso recursivo
    // caso base: el dividendo es menor que el divisor
    // caso recursivo: la resta 
    if(dividendo < divisor){
        return 0
    }else{
        return 1 + divisionEntera(dividendo - divisor, divisor)//se llama a la misma función (recursividad)
    }

}
console.log(divisionEntera(13,4))