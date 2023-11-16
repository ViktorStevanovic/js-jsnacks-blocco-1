// Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre): moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.

const firstNumber = parseInt(prompt('Scegli un umero a due cifre'))
const secondNumber = parseInt(prompt('Scegli un umero ad almeno quattro cifre'))

console.log(firstNumber)
console.log(secondNumber)
// recuperare il primo numero
// moltiplicarlo x2 FINCHE non arriva ad essere piu grande del secondo numero

let risultato = firstNumber 
console.log(risultato)

for(i = 0; risultato <= secondNumber; i++){
   if(risultato < secondNumber){

      risultato = risultato * 2

   }
   console.log(risultato)

}

