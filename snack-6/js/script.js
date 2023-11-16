// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (createlo voi con almeno 5 nomi), chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const eventList = ['mirko','silvia','marco','giulia','amet']

console.log(eventList)
const userName = prompt('Inserisci il tuo nome')

let userState = false

for (i=0; i < eventList.length; i++){
    if (userName === eventList[i]){
        userState = true
    }
    else{

    }
}

if (userState == true){
    console.log(userName + ' puoi partecipare alla festa')
}
else {
    console.log('Non puoi entrare')
}