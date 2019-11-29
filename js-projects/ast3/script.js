;
(function() {
    function Ball(parentElement) {
        this.x = 10;
        this.y = 10;
        this.posSpeed = 2;
        this.negSpeed = -2;
        this.width = 20;
        this.height = 20;
        this.radius = this.width / 2;
        // this.ball = null;
        this.MAX_WIDTH = 500;
        this.MAX_HEIGHT = 500;
        var that = this;
        this.parentElement = parentElement;
        this.init = function() {
            var ball = document.createElement('div');
            ball.classList.add('ball');
            this.parentElement.appendChild(ball);
            this.ball = ball;
            var ant = document.createElement('img');
            ant.src = './ant.gif';
            ant.style.width = 20 + 'px';
            ant.style.height = 20 + 'px';
            this.ball.appendChild(ant);
            this.ant = ant;
            this.antClicked();
            this.draw();

            return this;
        }

        this.antClicked = function() {
            that.ant.addEventListener('click', function() {
                that.ant.style.display = 'none';
                console.log('ant crushed');
            })
        }
        this.draw = function() {
            this.ball.style.height = this.height + 'px';
            this.ball.style.width = this.width + 'px';
            this.ball.style.borderRadius = this.radius + 'px';
            this.ball.style.left = this.x + 'px';
            this.ball.style.top = this.y + 'px';


            // this.ball.style.backgroundImage = 'url("ant.gif")';
        }

        this.setPostion = function(x, y) {
            this.x = x;
            this.y = y;
        }


        this.move = function() {
            var PI = Math.PI;
            var angle = Math.random(0, 2 * PI);
            this.directionX = Math.cos(angle);
            this.directionY = Math.sin(angle);
            this.x += this.posSpeed * this.directionX;
            this.y += this.posSpeed * this.directionY;
            if (this.x + this.posSpeed > this.MAX_WIDTH - this.width || this.x + this.posSpeed < 0) {
                this.posSpeed = -this.posSpeed;

                this.move();
                // console.log('angle', angle);
                // console.log('direction', directionX, 'and', directionY);
            }
            if (this.y + this.negSpeed < 0 || this.y + this.negSpeed > this.MAX_HEIGHT - this.height) {
                this.negSpeed = -this.negSpeed;

                this.move();
                // console.log('angle', angle);
                // console.log('direction', directionX, 'and', directionY);
            }
        }

    }




    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function Game(parentElement, ballCount) {
        this.ballCount = ballCount || 10;

        var balls = [];
        this.MAX_WIDTH = 500;
        this.MAX_HEIGHT = 500;

        this.parentElement = parentElement;

        var that = this;

        this.createBalls = function() {
            // console.log('entered create balls');
            for (var i = 0; i < this.ballCount; i++) {
                var ball;

                do {
                    ball = new Ball(parentElement).init();
                    ball.setPostion(
                        getRandomArbitrary(0, this.MAX_WIDTH - ball.width),
                        getRandomArbitrary(0, this.MAX_HEIGHT - ball.height)
                    );
                } while (this.checkOverlap(ball, balls));
                // ball.draw();
                balls.push(ball);
            }
            setInterval(this.moveBalls.bind(this), 10);

        }
        this.moveBalls = function() {
            for (var i = 0; i < this.ballCount; i++) {
                balls[i].move();
                this.checkCollision(balls);
                balls[i].draw();
            }

        }


        this.checkOverlap = function(ball, balls) {
            for (var i = 0; i < balls.length; i++) {
                var x1 = balls[i].x;
                var y1 = balls[i].y;
                // console.log('ball position', balls[i].x, ' ', balls[i].y);
                var x2 = ball.x;
                var y2 = ball.y;

                var dx = x2 - x1;
                var dy = y2 - y1;

                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance <= balls[i].radius + ball.radius) {
                    return true;
                }
            }
        }



        this.checkCollision = function(balls) {
            for (var i = 0; i < balls.length; i++) {
                for (var j = i + 1; j < balls.length; j++) {
                    var x1 = balls[i].x;
                    var y1 = balls[i].y;
                    // console.log('ball position', balls[i].x, ' ', balls[i].y);
                    var x2 = balls[j].x;
                    var y2 = balls[j].y;

                    var dx = x2 - x1;
                    var dy = y2 - y1;

                    var distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < balls[i].radius + balls[j].radius) {
                        // collision detected!
                        console.log('collision detected');
                        balls[i].move();
                        balls[j].move();

                    }
                }
            }
        }


    }

    var parentElement = document.getElementById('boundary');
    var game = new Game(parentElement, 10).createBalls();


})();