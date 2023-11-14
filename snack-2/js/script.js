// Scrivo in pagina i primi 6 numeri, scrivendo i numeri pari verdi. BN: numeri dispari gialli


const wrapperElement = document.querySelector('div.wrapper')


for (let counter = 0; counter <= 6; counter++) {
    wrapperElement.innerHTML += '<p>'+ counter +'</p>'
}