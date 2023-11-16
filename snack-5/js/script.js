// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt('Inserisci la prima parola')
const secondWord = prompt('Inserisci la seconda parola')

firstWordLength = firstWord.length
secondWordLength = secondWord.length

console.log(firstWordLength)
console.log(secondWordLength)

if (firstWordLength > secondWordLength){
    console.log(secondWord)
    console.log(firstWord)
    
}
else if (firstWordLength < secondWordLength){
    console.log(firstWord)
    console.log(secondWord)
}
else {
    console.log('The lenght of the words is even')
}