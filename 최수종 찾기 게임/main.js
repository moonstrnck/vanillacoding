let count;
let timer;
let timeOut;
const stage = document.querySelector('.game-stage');
const startBtn = document.querySelector('.button.start');
const timerEl = document.querySelector('.timer');
const countEl = document.querySelector('.count');
const infoEl = document.querySelector('.game-info');



function gameStart(){
    count = 8;
    let t = 25;
    infoEl.style.display = 'block';
    countEl.textContent = `${count} 명`;
    timerEl.textContent =  `${t} 초`;
    stage.innerHTML = "";

    for (let i = 0; i < 16; i++){
        const card = document.createElement('div');
        card.classList.add('card');
        stage.appendChild(card);
    }
    
    const cards = document.querySelectorAll('.card');
    const randomArr = getLandomIndex(cards.length);
    for (let i = 0; i < randomArr.length; i++) {
        let n = i + 1 > 8 ? (i + 1) - 8 : i + 1;

        cards[randomArr[i]].setAttribute('data-id', n);
        cards[randomArr[i]].innerHTML = `
            <img class="front" src="bgs/square-bg.jpg" alt="">
            <img class="back" src="imgs/0${n}.jpg" alt="">
        `;
    }
    
    timer = setInterval(function(){
        t--;
        timerEl.textContent = `${t} 초`;
        if (t === 0 ) clearInterval(timer);
    }, 1000)
    
    timeOut = setTimeout(function(){
        console.log('시간초과');
        gameOver(count);
    }, 25000)
}


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

startBtn.addEventListener('click', function(){
    if (startBtn.innerText === '시작') {
        gameStart();
        startBtn.textContent = '재시작';
    } else {
        stage.innerHTML = `<img src="bgs/bg.png" alt="">`;
        infoEl.style.display = "none";
        startBtn.textContent = '시작';
        clearInterval(timer);
        clearTimeout(timeOut);
        activeCard = [];
    }
})


let activeCard = [];
stage.addEventListener('click', function(event){
    let target = event.target.closest('.card');
    if(!target || target.classList.contains('active')) return;
    cardCompare(target);
})

function cardCompare(target){
    target.classList.add('active');
    activeCard.push(target);
    
    if (activeCard.length === 2) {
        if ( activeCard[0].getAttribute('data-id') === activeCard[1].getAttribute('data-id') ){
            console.log('일치')
            activeCard = [];
            count--;
            countEl.textContent = `${count} 명`;

        } else {
            console.log('불일치')
            setTimeout(function(){
                activeCard[0].classList.remove('active');
                activeCard[1].classList.remove('active');
                activeCard.splice(0, 2);
            }, 400)
        }
    }

    if (count === 0) gameOver(count);
}

function gameOver(count){
    clearInterval(timer);
    clearTimeout(timeOut);
    activeCard = [];

    if (count === 0) {
        console.log('Win!')
        stage.innerHTML = `<img src="bgs/win-bg1.jpg" alt="">`;
    } else {
        console.log('Lose')
        stage.innerHTML = `<img src="bgs/lose-bg1.jpg" alt="">`;
    }
}
