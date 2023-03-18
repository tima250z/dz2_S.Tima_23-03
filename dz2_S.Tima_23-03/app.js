const container = document.getElementById('container');
const small = document.getElementById('small');

function moveSmallBlock(horizontalPosition, verticalPosition) {
    small.style.left = horizontalPosition + 'px';
    small.style.top = verticalPosition + 'px';

    if (horizontalPosition < container.offsetWidth - small.offsetWidth && verticalPosition === 0) {
        setTimeout(() => {
            moveSmallBlock(horizontalPosition + 10, verticalPosition);
        }, 50);
    } else if (horizontalPosition === container.offsetWidth - small.offsetWidth && verticalPosition < container.offsetHeight - small.offsetHeight) {
        setTimeout(() => {
            moveSmallBlock(horizontalPosition, verticalPosition + 10);
        }, 50);
    } else if (horizontalPosition > 0 && verticalPosition === container.offsetHeight - small.offsetHeight) {
        setTimeout(() => {
            moveSmallBlock(horizontalPosition - 10, verticalPosition);
        }, 50);
    } else if (horizontalPosition === 0 && verticalPosition > 0) {
        setTimeout(() => {
            moveSmallBlock(horizontalPosition, verticalPosition - 10);
        }, 50);
    }
}

moveSmallBlock(0, 0);




const counter = document.getElementById('counter');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
let count = 0;
let intervalId = null;

function incrementCounter() {
    count++;
    counter.textContent = count;
}

startBtn.addEventListener('click', () => {
    intervalId = setInterval(incrementCounter, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
});



