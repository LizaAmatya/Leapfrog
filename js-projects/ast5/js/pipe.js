var gap = 100;
var distance;
var pipe = [];
var pipeUpWidth = 36;
var pipeUpHeight = 168;

function Pipe() {

    pipe[0] = {
        x: canvasWidth - 200,
        y: 0
    };



    this.init = function() {
        var pipeUp = new Image();
        pipeUp.src = '../images/pipe-up.png';
        this.pipeUp = pipeUp;
        this.pipeUp.height = pipeUpHeight;

        var pipeDown = new Image();
        pipeDown.src = '../images/pipe-down.png';
        this.pipeDown = pipeDown;

        return this;
    }

    this.drawPipe = function() {
        distance = this.pipeUp.height + gap;


        for (var i = 0; i < pipe.length; i++) {
            ctx.drawImage(this.pipeUp, pipe[i].x, pipe[i].y);
            ctx.drawImage(this.pipeDown, pipe[i].x, pipe[i].y + distance);

            pipe[i].x--;

            if (pipe[i].x == 225) {
                pipe.push({
                    x: canvasWidth - 200,
                    y: Math.floor(Math.random() * this.pipeUp.height) - this.pipeUp.height
                });
            }
        }

    }


}