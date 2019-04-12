// Diferencias entre var, let y const
//  Nota: 'var' es la manera más antigua de declarar varibles. No es muy estricta en cuanto al alcance, ya que al declarar
// variables de esta forma, dichas variables podrán ser accedidas, e incluso modificadas, tanto dentro como fuera de los bloques
// internos en una función
// Con 'let' por otra parte, el alcance se reduce al bloque (las llaves) en el cual la variable fue declarada. Fuera de este bloque
// la variable no existe. Una vez declarada la variable con let, no se puede volver a declarar en ninguna otrs función.
// Con 'const' al igual que 'let' se define en el contexto o alcance de un bloque, a diferencia de let y var, las variables definidas
// como constantes (const), ya no podrán ser modificadas ni declaradas nuevamente, en ninguna otra parte de la función o el contexto 
// en el que ya existen.
// La recomendación es reducir al mínimo el alcance de nuestras variables, por lo que se debe usar let en lugar de var mientras que sea posible

var josue = {
    nombe: 'Josué',
    apellido: 'Cando',
    edad: 22
}

function esMayorDeEdad(persona){
    let mensaje//e declara que el alcance de la variable let es dentro de esta función, y despues se le asigna un valor
    const MAYORIA_DE_EDAD = 18 //const se comporta similar a let (en su alcance), excepto que no se puede easignar una variable constante
    // lo que se puede realizar con una variable var, en caso de que tengan un array, es modificar su contenido del array pero no reasignar un otro valor
    if(persona.edad > 18){
        mensaje = 'Es mayor de edad'//si se utiliza let, se limitaria solo al bloque if.
    }else{
        mensaje = 'Es menor de edad'
        // var mensaje2 = 'Este es otro mensaje'
    }
    console.log(mensaje)
    // console.log(mensaje2)//existe JS lo pone en contexto global si se utiliza var
    // console.log(mensaje3)//no existe
}

// esMayorDeEdad(josue)

for(let i = 0 ; i < 10 ; i++){
    console.log(i)
}

console.log(`Termino el for, el valor de i es ${i}`)// el valor de i llega hasta 10, si i se lo define con var, se lo puede acceder fuera del for