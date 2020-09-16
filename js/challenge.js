
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

    const likeNumber = () => {
        const likesUl = document.querySelector('.likes')

        const currentNumber = document.querySelector('#counter').textContent
        const numberLi = document.createElement('li')
        numberLi.innerText = currentNumber

        if (likes == null) {
            let likes = numberLi.dataset.likes = 1
         }
         else {
             likes = parseInt(likes) + 1 
         }

        likesUl.append(numberLi)

        // let numberOfLikes = 0
        // numberOfLikes++

        // const likesUl = document.querySelector('.likes')
        // const likeLi = document.createElement('li')
        // currentScore has been liked (number of times) time, add conditional for time(s)

    }
    

    setInterval(incrementTime, 1000)

    const likeButton = document.querySelector('#heart')
    const plusButton = document.querySelector('#plus')
    const minusButton = document.querySelector('#minus')

    console.log(plusButton)
    plusButton.addEventListener('click', (e) => {
        incrementTime()
    })

    minusButton.addEventListener('click', (e) => {
        deincrementTime()
    })

    likeButton.addEventListener('click', e =>{
        likeNumber()
    })
    
}

timeControl()

// 3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

