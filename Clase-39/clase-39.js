// Memorización: ahorrando cómputo

// Nota: la memorización es un técnica de preogramación que nos permite ahorrar cómputo o procesamiento en JavaScript
// al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones
// de nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usuar memoria cache

/*
    factorial
    !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
    !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6
 */

 function factorial (numero){
    // se pregunta si existe cache, cada funcion puede tener atributos internos
    if(!this.cache){
        this.cache = {}//un objeto vacío
    }

    debugger
    if(this.cache[numero]){//se verifica si ya fue calculado para solo devolverlo sin volver a realizar el calculo
        return this.cache[numero]
    }

     if(numero === 1){//caso base
        return 1
     }
    //  al objeto se le puede asignar atributos
    //esto se realiza si no existe el calculo ya calculado. es decir, si se ejecuta por primera vez un factorial
    this.cache[numero] =  numero * factorial(numero - 1)//llamados recursivos
    debugger//para ver como se comporta la función
    return this.cache[numero]
    
        // 6 * 5 * 4 * 3 * 2 * factorial(1)
 }