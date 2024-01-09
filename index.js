const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'
const quoteElement = document.getElementById('quote')
const inputElement = document.getElementById('inputText')
const timerElement = document.getElementById('timer')
const btn = document.getElementById('again')
const wpmElement = document.getElementById('wpm')

const getRandomQuote = ()=>{
    return fetch(RANDOM_QUOTE_API_URL).then(response => response.json())
    .then(data => data.content)
}

inputElement.addEventListener('input', () => {
    const arrayQuote = quoteElement.querySelectorAll('span')
    const arrayValue = inputElement.value.split('')
  
    let correct = true
    arrayQuote.forEach((characterSpan, index) => {
      const character = arrayValue[index]
      if (character == null) {
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct = false
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
      } else {
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correct = false
      }
    })
     if(correct){
        stopTimer()
        
     }
  })

  
const getQuote = async () => {
    const quote = await getRandomQuote()
    let len
    len = quote.length
    quoteElement.innerHTML = ''
    quote.split('').forEach(character => {
        const characterspan = document.createElement('span')
        characterspan.innerText = character
        quoteElement.appendChild(characterspan)
    });
    inputElement.value=null
    startTimer()
    console.log(quote)
}
btn.addEventListener("click", myfunc=()=>{
    getQuote()
})

let startTime
let timerInterval
const startTimer = () =>{
    timerElement.innerText = 0
    startTime = new Date();
    timerInterval = setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

function stopTimer() {
    // timer.innerText = 0
    // wpmElement.innerText = Math.floor((len/timer.innerText)*60)
    quoteElement.innerText= 'Click start to go again'
    clearInterval(timerInterval)
}
  

// getQuote()
