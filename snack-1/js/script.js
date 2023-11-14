// chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande


const firstUserAge = parseInt(prompt('Quanti anni ha Marco?'))
const secondUserAge = parseInt(prompt('Quanti anni ha Viktor?'))

if (firstUserAge > secondUserAge) {
    console.log('Marco è il più grande');
}
else if (secondUserAge > firstUserAge) {
    console.log('Viktor è il più grande');
}
else {
    console.log ('Marco e Viktor hanno la stessa età');
}