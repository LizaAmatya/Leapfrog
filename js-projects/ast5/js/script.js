var main = document.getElementById('main');

var canvas = document.getElementById('canvas');
canvasWidth = 1000;
canvasHeight = 429;
var ctx = canvas.getContext('2d');

var bird;
var check;
var step;
var pressedkey = false;
var obstacle;
var scoring;

function StartGame() {
    var bcg = new Background().init();
    obstacle = new Pipe().init();
    generateBase();
    bird = new Bird().init();
    scoring = new Score().init();

}

function update(progress) {
    // Update the state of the world for the elapsed time since last render
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    if (pressedkey == true) {
        bird.up();
    } else {
        bird.newPos()
    };
    obstacle.drawPipe();
    scoring.updateScore();
}

function draw() {

    bird.drawBird();
    bird.checkPipeCollision();
    check = bird.checkGroundCollision();
    if (check) {
        window.cancelAnimationFrame(step);

    }

    // Draw the state of the world

}

function loop(timestamp) {
    var progress = timestamp - lastRender;
    animateBase();
    update(progress);

    lastRender = timestamp;
    step = window.requestAnimationFrame(loop);
    draw();
}
var lastRender = 0;
StartGame();
window.requestAnimationFrame(loop);

document.addEventListener('keydown', jump);
document.addEventListener('keyup', release);

function jump(event) {
    if (event.keyCode == 38) {
        pressedkey = true;
    }
}

function release(event) {
    if (event.keyCode == 38) {
        pressedkey = false;
    }
}