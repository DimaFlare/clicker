
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
				alert('Поздравляю! Недо-игра пройдена!');
      let answer = confirm("Нажмите ОК если игра вам понравилась!");
            if (answer) {
                alert("Ну тыж лапуля!.");
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
    // Получаем элемент монетки
    var coin = document.getElementById('coin');

    // Добавляем обработчик события клика
    coin.addEventListener('click', function () {
        // Добавляем класс анимации
        coin.classList.add('animate');

        // Задержка перед удалением класса анимации, чтобы можно было снова кликнуть
        setTimeout(function () {
            coin.classList.remove('animate');
        }, 50); // 0.5 секунды - время анимации
    });
});
