var score = 0;
var scoreCanvas = document.getElementById('score-wrap');
var ctxt = scoreCanvas.getContext('2d');

function Score() {
    this.init = function() {
        // this.scoreCanvas = document.getElementById('score-wrap');
        // this.ctxt = this.scoreCanvas.getContext('2d');
        canvasWidth = 1000;
        canvasHeight = 429;
        ctxt.font = '24px Calibri';
        this.highScore = 0;
        this.updateScore();

        if (localStorage.getItem('scoreVal') != null) {
            this.highScore = localStorage.getItem('scoreVal');

        } else {
            localStorage.setItem('scoreVal', this.highScore);

        }

        return this;
    }
    this.updateScore = function() {
        ctxt.clearRect(0, 0, canvasWidth, canvasHeight);
        ctxt.fillText(score, 500, 50);
    }

    this.updateHighScore = function() {
        ctxt.clearRect(0, 0, canvasWidth, canvasHeight);

        if (score > this.highScore) {
            localStorage.setItem('scoreVal', score);
            this.highScore = score;
        }
        ctxt.fillText(this.highScore, 500, 50);
    }
}

function playScreen() {
    this.lastScreen = null;

    this.init = function() {
        var firstScreen = document.createElement('img');
        firstScreen.classList.add('screen');
        firstScreen.id = 'screen';
        firstScreen.src = '../images/play.png';
        main.appendChild(firstScreen);
        return this;
    }

    this.restart = function() {
        var lastScreen = document.createElement('img');
        this.lastScreen = lastScreen;
        lastScreen.classList.add('screen');
        lastScreen.id = 'restart-screen';
        lastScreen.src = '../images/restart.png';
        console.log(lastScreen);
        main.appendChild(lastScreen);


    }


}