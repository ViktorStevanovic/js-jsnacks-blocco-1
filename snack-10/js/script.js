// Inserisci un <h1> al centro della pagina con un numero randomico all'interno e un bottone sotto. Ad ogni click del bottone aumento il numero nell'h1 di 3 e lo aggiorno in pagina.  

const wrapperElement = document.querySelector('section.wrapper')
const titleElement = document.createElement('h1')
const buttonElement = document.createElement('button')
wrapperElement.appendChild(titleElement)
wrapperElement.appendChild(buttonElement)

wrapperElement.classList.add('flex')

buttonElement.innerHTML = 'GO!'

let randomNumber = Math.floor(Math.random() * 99) + 1;

titleElement.innerHTML = randomNumber


buttonElement.addEventListener('click', function(){
   randomNumber = randomNumber + 3
   titleElement.innerHTML = randomNumber

})

