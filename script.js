
let balance = 0;
const coin = document.getElementById('coin');
const balanceDisplay = document.getElementById('balance');
const clicksDisplay = document.getElementById('clicks');
const progressBar = document.getElementById('progressBar');
var played = false;


coin.addEventListener('click', () => {
	if (played == true) return;
	balance++;	
	balanceDisplay.textContent = `${balance}`;
    animateCoin();
	var tapSound = new Audio('tap.mp3');
	tapSound.play();
    if (balance == 100) {
	endGame();
    }
});

function endGame() {
	var winSound = new Audio('win.mp3');
     	winSound.play();
	played = true;
		
   setTimeout(() => {
   alert('Congratulations! You won the game!!');
   let answer = confirm("Press OK button if you liked this game!");
            if (answer) {
                alert("thanks!.");
            } else {
                alert(":(");
            }
    }, 200);
			
}

function animateCoin() {
    coin.classList.add('animate');
    setTimeout(() => {
        coin.classList.remove('animate');
    }, 50);
}

document.addEventListener('DOMContentLoaded', function () {
    var coin = document.getElementById('coin');
    coin.addEventListener('click', function () {
        coin.classList.add('animate');
        setTimeout(function () {
            coin.classList.remove('animate');
        }, 50);
    });
});
