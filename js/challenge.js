
const timeControl = () => {

    const incrementTime = () => {
        const counter = document.querySelector('#counter').innerText
        const counterHeader = document.querySelector('#counter')
        const currentNum = parseInt(counter)
        const newScore = currentNum + 1
        counterHeader.textContent = newScore
    }

    const deincrementTime = () => {
        const counter = document.querySelector('#counter').innerText
        const counterHeader = document.querySelector('#counter')
        const currentNum = parseInt(counter)
        const newScore = currentNum - 1
        counterHeader.textContent = newScore
    }

    setInterval(incrementTime, 1000)

    const plusButton = document.querySelector('#plus')
    const minusButton = document.querySelector('#minus')

    console.log(plusButton)
    plusButton.addEventListener('click', (e) => {
        incrementTime()
    })

    minusButton.addEventListener('click', (e) => {
        deincrementTime()
    })
    


}

timeControl()


