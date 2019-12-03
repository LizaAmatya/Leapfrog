var container = document.getElementById('road-wrapper');
var roads = [];

function Road(top) {
    this.speed = 5;
    this.top = top;
    this.height = 830;

    this.init = function() {
        var roadImg = document.createElement('img');
        roadImg.id = 'road';
        roadImg.className = 'road';
        roadImg.src = './images/road.png';
        container.appendChild(roadImg);
        this.element = roadImg;

        this.drawRoad();
        return this;
    }

    //draw the road
    this.drawRoad = function() {
        this.element.style.top = this.top + 'px';
    }

    this.moveRoad = function() {
        this.drawRoad();
        this.top += this.speed;
    }

}

// generate the roads
function generateRoads() {
    for (var r = 0; r < 2; r++) {
        var a_road = new Road(r * 830).init();
        roads.push(a_road);
    }
}

function animateRoad() {
    for (var r = 0; r < 2; r++) {
        if (roads[r].top == r * roads[r].height) {
            roads[r].top -= 830;
        }
        roads[r].moveRoad();
    }
}


var lanes = [];

function createLane() {
    for (var l = 0; l < 3; l++) {
        this.laneWidth = l * (608) / 3;
        lanes.push(this.laneWidth);
        // console.log(lanes.indexOf(lanes[l]), ':', lanes[l]);
    }
}

this.displayedCars = [];



function drawCars() {
    var car1 = new Car().init();
    // var car2 = new Car().init();
    this.displayedCars.push(car1);
    // this.counter++;
    // if (car1.lane == car2.lane) {
    //     this.displayedCars.pop(car2);
    //     car2.element.remove();
    //     this.counter--;
    //     console.log('car removed ');
    // }
    this.interval1 = setInterval(function() {
            car1.moveCar();
            // car2.moveCar();

        }, 30)
        // console.log(displayedCars);

}
var counter = 0;

function displayScore() {
    this.scoreDiv = document.getElementById('score-wrapper');
    // this.score = this.counter * 10;

    this.interval3 = setInterval(function() {
        this.score = counter * 10;
        this.scoreDiv.innerHTML = 'Score:' + this.score; // console.log(this.scoreDiv + this.score);
    }, 10)
}

function Bullet() {
    var bullet = document.createElement('span');
    bullet.classList.add('bullet');
    this.bullet = bullet;
    this.bullet.style.top = ownCar.top - 120 + 'px';
    this.bullet.style.left = ownCar.element.style.left;
    console.log(ownCar.top);
    console.log(this.bullet.style.left);
    container.appendChild(bullet);

}


function generateNewCar() {
    var car = new Car().init();
    this.displayedCars.push(car);
    // for (var i in this.displayedCars) {
    //     if (displayedCars[i].lane == car.lane) {
    //         this.displayedCars.pop(car);
    //         car.element.remove();
    //         this.counter--;
    //         console.log('car removed ');
    //     }
    // }


    // console.log(this.counter);
    this.interval2 = setInterval(function() {
        car.moveCar();
    }, 30);
    console.log(displayedCars);
}

function startGame() {
    generateRoads();
    createLane();
    drawCars();


    this.interval = setInterval(animateRoad, 16);
}

var oppCars = ['./images/car2.png', './images/car4.png', './images/car5.png', './images/car6.png', './images/car7.png'];

function Car() {
    // this.left = 0;
    this.top = 10;
    this.speedY = 2;
    this.lane = 0;
    // var that = this;
    this.init = function() {
        var a_car = document.createElement('div');
        var rndIndex = Math.floor(Math.random() * 5);
        this.lane = Math.floor(Math.random() * 3);
        a_car.classList.add('car');
        a_car.style.backgroundRepeat = 'no-repeat';
        this.carWidth = 75;
        this.carHeight = 100;
        a_car.style.width = this.carWidth + 'px';
        a_car.style.height = this.carHeight + 'px';
        a_car.style.backgroundImage = 'url(' + oppCars[rndIndex] + ')';
        a_car.style.backgroundSize = 'contain';
        container.appendChild(a_car);
        this.element = a_car;
        this.moveCar();
        return this;
    }


    this.drawCar = function() {
        this.element.style.left = this.lane * 202 + 75 + 'px';
        this.element.style.top = this.top + 'px';
    }

    this.moveCar = function() {
        this.drawCar();
        this.top = this.top + this.speedY;
        this.checkCollision(ownCar);
        if (this.top == 550) {
            this.element.remove();
            displayedCars.pop(this);
            console.log(displayedCars);
            generateNewCar();
            this.checkCollision(ownCar);
            counter++;
            console.log(counter);
            displayScore();

        }


    }

    this.checkCollision = function(ownCar) {
        displayedCars.forEach(function(oppCar) {
            if (ownCar.element.style.left == oppCar.element.style.left && ownCar.top - ownCar.carHeight <= oppCar.top + oppCar.carHeight && ownCar.top - ownCar.carHeight >= oppCar.top) {
                console.log('collision detected');
                clearInterval(this.interval);
                clearInterval(this.interval1);
                clearInterval(this.interval2);
                document.removeEventListener('keydown', changeLane);
            }
        })
    }

}

function OwnCar() {
    // this.left = 0;
    this.bottom = 20;
    this.currLane = 1;
    this.init = function() {
        var a_car = document.createElement('div');
        a_car.classList.add('car');
        a_car.style.backgroundRepeat = 'no-repeat';
        this.carHeight = 100;
        this.carWidth = 75;
        this.top = 550 - this.bottom;
        a_car.style.width = this.carWidth + 'px';
        a_car.style.height = this.carHeight + 'px';
        a_car.style.backgroundImage = 'url("./images/redcar.png")';
        a_car.style.backgroundSize = 'contain';
        container.appendChild(a_car);
        this.element = a_car;
        this.drawOwnCar();
        return this;
    }

    this.drawOwnCar = function() {
        this.element.style.bottom = this.bottom + 'px';
        this.element.style.left = this.currLane * 202 + 75 + 'px';
    }

    this.shiftRight = function() {
        if (this.currLane == 2) {
            this.currLane = 2;

            return;
        }
        this.currLane++;
        this.element.style.left = this.currLane * 202 + 75 + 'px';

    }
    this.shiftLeft = function() {
        if (this.currLane == 0) {
            this.currLane = 0;

            return;
        }
        this.currLane--;
        this.element.style.left = this.currLane * 202 + 75 + 'px';

    }

    this.hit = function() {
        Bullet();
        console.log('bullet created');
    }

}

document.addEventListener('keydown', changeLane);
var ownCar = new OwnCar().init();
document.addEventListener('keydown', hitBullet);

function hitBullet(event) {
    if (event.keyCode === 32) {
        ownCar.hit();
    }
}

function changeLane(event) {
    // console.log(event.keyCode);
    if (event.keyCode === 39) {
        ownCar.shiftRight();
    }
    if (event.keyCode === 37) {
        ownCar.shiftLeft();
    }
}
startGame();