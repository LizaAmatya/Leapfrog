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
var screen;
var bcg;

function draw() {

    bird.drawBird();
    checkPipe = bird.checkPipeCollision();
    if (checkPipe) {
        window.cancelAnimationFrame(step);

        // scoring.updateHighScore();
        // screen.restart();
        // screen.lastScreen.addEventListener('click', function() {
        //     resetGame();
        // })

    }
    check = bird.checkGroundCollision();
    if (check) {
        window.cancelAnimationFrame(step);
        scoring.updateHighScore();

        // screen.restart();
        // screen.lastScreen.addEventListener('click', function() {
        //     resetGame();
        // })
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

function playGame() {
    // console.log('bsjbdj')
    step = window.requestAnimationFrame(loop);
    play.style.display = 'none';


}

// function finalStart() {

//     bcg = new Background().init();
//     generateBase();
//     bird = new Bird().init();
//     obstacle = new Pipe().init();
//     scoring = new Score().init();
//     playGame();
// }

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

// function resetGame() {

//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//     ctxt.clearRect(0, 0, canvasWidth, canvasHeight);
//     bird = null;
//     obstacle = null;
//     scoring = null;

//     ctx.scale(0, 0);
//     finalStart();

// }


var lastRender = 0;

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
var play;

function StartGame() {
    bcg = new Background().init();
    generateBase();
    bird = new Bird().init();
    obstacle = new Pipe().init();
    scoring = new Score().init();


}


StartGame();

screen = new playScreen().init();
play = document.getElementById('screen');
play.addEventListener('click', playGame);