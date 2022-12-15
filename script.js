function createHearts(){
    const heart = document.createElement('div')
    heart.classList.add('heart')

    heart.innerText = '😍'
    document.body.appendChild(heart)

    heart.style.animationDuration = Math.random()* 2 + 3 + '5'

    heart.style.left = Math.random() * 100 + 'vw';

    setTimeout(function(){
        heart.remove();
    }, 5000
    
    )
}

setInterval(createHearts, 1000)