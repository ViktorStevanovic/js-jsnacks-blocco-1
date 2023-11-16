// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

const emptyList = []

for (i=0; i < 6; i++){
   let userNumber = prompt('pick a number')
   if(userNumber % 2 === 1){
        emptyList.push(userNumber)

   }
   console.log(userNumber)
}

console.log(emptyList)