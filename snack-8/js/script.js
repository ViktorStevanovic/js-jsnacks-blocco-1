// Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

// 1234567

// 1+2+3+4+5+6+7=

const userNumber = prompt('Pick a 7 figure number')
console.log(userNumber)

let myArray = userNumber.split('')

let sum = 0

for (i=0; i < myArray.length; i++){
   myArray[i] = parseInt(myArray[i])
   sum += myArray[i];
}

console.log(myArray)
console.log(sum)
