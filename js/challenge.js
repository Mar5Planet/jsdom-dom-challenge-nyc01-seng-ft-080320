
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
        
        const currentItem = document.getElementById(currentNumber)
        
        if (currentItem) {
            currentItem.dataset.likes = parseInt(currentItem.dataset.likes) + 1
            currentItem.innerText = `${currentNumber} has been liked ${currentItem.dataset.likes} times`

        } else {
            const numberLi = document.createElement('li')
            numberLi.id = currentNumber
            numberLi.dataset.likes = 1
            numberLi.innerText = `${currentNumber} has been liked ${numberLi.dataset.likes} time`
            likesUl.append(numberLi)
        }
    }
    

    let interval  = setInterval(incrementTime, 1000)
    
    const likeButton = document.querySelector('#heart')
    const plusButton = document.querySelector('#plus')
    const minusButton = document.querySelector('#minus')
    const pauseButton = document.querySelector('#pause')
    
    plusButton.addEventListener('click', (e) => {
        incrementTime()
    })

    minusButton.addEventListener('click', (e) => {
        deincrementTime()
    })

    likeButton.addEventListener('click', e =>{
        likeNumber()
    })

    let status = 'inactive'
    document.addEventListener('click', e => {
        
        if (e.target.matches('#pause')) {
            
            if (status === 'active') {
                
                pauseButton.innerText = 'pause'
                interval = setInterval(incrementTime, 1000)
                minusButton.disabled = false
                plusButton.disabled = false
                likeButton.disabled = false
                status = 'inactive'


            } else {
                pauseButton.innerText = 'resume'
                clearInterval(interval)
                minusButton.disabled = true
                plusButton.disabled = true
                likeButton.disabled = true
                status = 'active'
            }
            
        }

    })

    document.addEventListener('submit', e => {
        
        if (e.target.matches('#comment-form')) {
            
            const commentForm = document.querySelector('#comment-form')
            const commentInput = document.querySelector('#comment-input').value
            

            const comment = document.createElement('p')
            comment.innerText = commentInput

            const commentDiv = document.querySelector('#list')
            commentDiv.appendChild(comment)
            commentForm.reset()
            e.preventDefault()
            
        }
    })


    
}

timeControl()

