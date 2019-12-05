function Bird() {
    this.gravity = 0.05;
    this.gravitySpeed = 1.5;
    this.x = 250;
    this.y = 110;
    this.speedX = 1;
    this.speedY = 0.2;
    this.width = 34;
    this.height = 24;
    var that = this;

    this.init = function() {
        var flappy = new Image();
        flappy.src = 'images/redbird-midflap.png';
        this.flappy = flappy;
        ctx.scale(0.5, 0.5);
        return this;
    }

    this.drawBird = function() {
        ctx.drawImage(this.flappy, this.x, this.y);
    }

    this.newPos = function() {
        // this.gravitySpeed += this.gravity;
        // this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
    }

    this.checkGroundCollision = function() {
        if (Math.floor(this.y) >= 275) {

            return true;
        }

    }

    this.up = function() {
        this.y -= 5;

    }
    this.checkPipeCollision = function() {
        for (var i = 0; i < pipe.length; i++) {


            if ((this.x + this.width >= pipe[i].x &&
                    this.x <= pipe[i].x + pipeUpWidth) &&
                (this.y <= pipe[i].y + pipeUpHeight ||
                    this.y + this.height >= pipe[i].y + distance ||
                    this.y + this.height >= canvasHeight - baseHeight)) {
                return true;
                // location.reload(); // reload the page

            }
            if (pipe[i].x == 201) {
                score++;

            }
            if (pipe[i].x == -37) {
                pipe.splice(0, 1); //remove index 0 element
                console.log(pipe);
            }

        }
    }
}