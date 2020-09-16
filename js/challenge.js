
const timeControl = () => {
    

    const incrementTime = num => {
        const counter = document.querySelector('#counter').innerText
        const counterHeader = document.querySelector('#counter')
        const currentNum = parseInt(counter)
        const newScore = currentNum + num
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
    

    let interval  = setInterval(() => {incrementTime(1)}, 1000)
    
    
    let status = 'inactive'
    document.addEventListener('click', e => {
        
        if (e.target.matches('#pause')) {
            pauseButton = document.querySelector('#pause')
            if (status === 'active') {
                
                pauseButton.innerText = 'pause'
                interval  = setInterval(() => {incrementTime(1)}, 1000)
                document.querySelector('#heart').disabled = false
                document.querySelector('#plus').disabled = false
                document.querySelector('#minus').disabled = false
                document.querySelector('#submit').disabled = false
                status = 'inactive'



            } else {
                pauseButton.innerText = 'resume'
                clearInterval(interval)
                document.querySelector('#heart').disabled = true
                document.querySelector('#plus').disabled = true
                document.querySelector('#minus').disabled = true
                document.querySelector('#submit').disabled = true
                status = 'active'
            }
            
        } else if (e.target.matches('#plus')) {
            incrementTime(1)
        } else if (e.target.matches('#minus')) {
            incrementTime(-1)
        } else if (e.target.matches('#heart')) {
            likeNumber()
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

