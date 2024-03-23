let rn;
let score = 0;
let timer = 60;
let totalHeart = 4;
function makeBubble() {
    let clutter = "";
    for (let i = 1; i<=152; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector('#pbtm').innerHTML = clutter;
} 
function getNewHit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector('#hitInt').textContent = rn;
}
function runtimer() {
    const interval = setInterval(function(){
        if (timer >0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }
        else {
            clearInterval(interval);
            document.getElementById('pbtm').innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function updateScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function updateLife() {
    totalHeart--;
    document.getElementById('life').textContent = totalHeart;
    if (totalHeart === 0) {
        document.getElementById('pbtm').innerHTML = `<h1>Game Over</h1>`;
    }
}

document.getElementById('pbtm').addEventListener('click', function(details){
    let clickedNumber = Number(details.target.textContent);
    if (rn === clickedNumber) {
        updateScore();
        makeBubble();
        getNewHit();
    }
    else{
        updateLife();
    }
})
function startGame() {
    makeBubble();
    runtimer();
    getNewHit();
}
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', ()=>{
    startButton.innerHTML = "";
    startGame();
})