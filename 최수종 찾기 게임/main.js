let count = 8;
let gameTimer = null;

function gameStart(){
    
    const stage = document.querySelector('.game-stage');
    stage.innerHTML = "";
    for (let i = 0; i < 16; i++){
        const card = document.createElement('div');
        card.classList.add('card');
        stage.appendChild(card);
    }
    
    const cards = document.querySelectorAll('.card');
    let randomArr = getLandomIndex(cards.length);
    for (let i = 0; i < randomArr.length; i++) {
        let n = i + 1 > 8 ? (i + 1) - 8 : i + 1;

        cards[randomArr[i]].setAttribute('data-id', n);
        cards[randomArr[i]].innerHTML = `
            <img class="front" src="bgs/square-bg.jpg" alt="">
            <img class="back" src="imgs/0${n}.jpg" alt="">
        `;
    }

    document.querySelector('.game-info').style.display = 'block';
    
    const gameTimer = document.querySelector('.timer');
    // const gameCount = document.querySelector('.count');
    let t = 25;
    const timer = setInterval(function(){
        t--;
        gameTimer.textContent = `${t}초`;
        if (t === 0 ) clearInterval(timer);
    }, 1000)

    // const timeOut = setTimeout(function(){
    //     gameOver();
    // }, 25000)
}

function gameOver(){

}

gameOver();

function getLandomIndex(length){
    let array = [];
    while (array.length < length) {
        let randomNum = Math.floor(Math.random() * length);
        if (array.indexOf(randomNum) === -1) {
            array.push(randomNum);
        }
    }

    return array;
}

const startBtn = document.querySelector('.button.start');
startBtn.addEventListener('click', function(){
    gameStart();
})
