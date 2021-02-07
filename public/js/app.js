const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value
    messageOne.textContent = 'Searching for weather report'
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
        response.json().then(data => {
            if(data.error){
                messageOne.textContent = data.error
            }else{
                    messageOne.textContent = ''
                messageTwo.textContent = `Forecast is ${data.forecast} for ${data.location}`
            }
        })
    })
})