// Condicional múltiple : Switch
// la función prompt permite tomar datos al usuario
var signo = prompt('Cuál es tu signo?')

switch(signo){
    case 'acuario':
        console.log('Seguramente en este día tendrá que hacer frente a las diferentes situaciones que son completamente nuevas para su vida. No se reprima y siga adelante.')
        break
    case 'piscis':
        console.log('Sepa que si sigue mostrándose impulsivo e impaciente, no logrará resolver todos los temas en un solo día. Baje los niveles de ansiedad y todo se acomodará.')
        break
    // Se puede tener dos o más casos ante una compración donde se diferencian solo por una tilde
    case 'cáncer':
    case 'cancer':
        console.log('Durante esta jornada, deberá mantener su autoestima alta, procure no claudicar. Sepa que esto lo ayudará a obtener sus logros tan deseados en la vida.')
        break
    // El default se ejecuta en caso de que no se cumplan los cosas (valga la redundancia) del switch
    default:
        console.log('No es un signo zodiacal válido')
        break
}