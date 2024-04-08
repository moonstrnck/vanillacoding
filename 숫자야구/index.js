console.log("hello, vanilla.");

let count = 0;
let randomNum = []; 
const startBtn = document.querySelector('.button-start');

startBtn.addEventListener('click', function(){  // 게임 시작 버튼 클릭 이벤트
    document.querySelector('.stage').style.display = "block";
    randomNum = getThreeDigits();
    console.log(randomNum);
});

function getThreeDigits(){  // 중복되지 않는 세 자리 랜덤 숫자 생성
    
    for (let i = 0; i < 3; i++) {
        if (i === 0){
            randomNum.push(getRandom(1, 9));
        } else {
            let x = getRandom(0, 9);
            while (checkDuplic(x)) { // 중복되지 않은 숫자가 나올 때 까지 반복
                x = getRandom(0, 9);
            }
            randomNum.push(x);
        }
    }

    function checkDuplic(x){
        for (let i = 0; i < randomNum.length; i++){
            if (randomNum[i] === x) {
                return true;
            }
        }
        return false;
    }

    return randomNum.join('');
}

function getRandom(min, max){   // min ~ max 범위 내의 랜덤 숫자 생성  
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const input = document.querySelector('.input');
const gameOver = document.querySelector('.result');
const answerSheet = document.querySelector(".answer-sheet");
input.addEventListener('keyup', function(event){
    if (event.keyCode === 13) { // Enter key 클릭 이벤트 
        let answer = input.value;

        if ( isNaN(answer) || answer.length !== 3) {
            alert("세 자리 숫자를 입력해주세요.");
            input.value = "";
        } else {
            count ++;
            const strike = checkStrike(answer);
            const ball = checkBall(answer, strike);
        
            if ( strike === 3 ) {
                document.querySelector('.result-box').style.visibility = "visible";
                gameOver.innerHTML = `<img src="./images/homerun.gif" alt=""> <br> ☄️홈런!!!`
                randomNum = [];
            } else if ( count > 10 ) {
                document.querySelector('.result-box').style.visibility = "visible";
                gameOver.innerHTML = `정답은 ${randomNum}! <br> 정답을 맞추지 못했습니다.`
                randomNum = [];
            } else if (strike > 0 || ball > 0) {
                const row = document.createElement("div");
                row.classList.add('row');
                row.innerHTML = `<div class="row">
                    <p class="try">${count}</p>
                    <p>Answer: <span class="answer">${answer}</span></p>
                    <p>Strike: <span class="strike">${strike}</span></p>
                    <p>Ball: <span class="ball">${ball}</span></p>
                </div>`
                answerSheet.appendChild(row);
            } else {
                const row = document.createElement("div");
                row.classList.add('row');
                row.innerHTML = `<div class="row">
                    <p class="try">${count}</p>
                    <p>Answer: <span class="answer">${answer}</span></p>
                    <p class="out">Out</p>
                </div>`
                answerSheet.appendChild(row);
            }
            
        }
    }
});

function checkStrike(answer){ // 스트라이크 갯수 확인
    let n = 0;
    for (let i = 0; i < answer.length; i++) {
        if(randomNum[i] === answer[i]){
            n++;
        }
    }
    return n;
}

function checkBall(answer, s){  // 볼 갯수 확인
    let n = 0;
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < randomNum.length; j++){
            if (randomNum[j] === answer[i]) {
                n++;
            }
        }
    }
    return n - s;
}

// 다시 하기
const restartBtn = document.querySelector('.button-restart');
restartBtn.addEventListener('click', function(){
    // 초기화
    document.querySelector('.result-box').style.visibility = "hidden";
    randomNum = getThreeDigits();
    console.log(randomNum);
    count = 0;
    answerSheet.innerHTML = "";
    input.value = "";
});
