// var canvas = document.getElementById('bounce');
// canvas.width = 500;
// canvas.height = 500;
// canvas.style.border = "1px solid black";
// var ctx = canvas.getContext("2d");
// var x = 50;
// var y = 50;
// var dx = 5;
// var dy = 5;
// setInterval(move, 2);

// function move() {
//     ctx.clearRect(0, 0, 500, 500);
//     ctx.beginPath();
//     ctx.arc(x * 5, y, 20, 0, 2 * Math.PI);
//     ctx.fillStyle = 'blue';
//     ctx.fill();
//     ctx.closePath();
//     // if (x < 200 || x > 200) dx = -dx;
//     if (y < 0 || y > 500) dy = -dy;
//     // x += dx;
//     y += dy;

// }

var div = document.getElementById('ball');
var ball = document.getElementById('circle');
var dy = 2;
var pos = 0;

// var x = 50;
// var y = 50;
// var dx = 5;
// var dy = 5;
// var int = setInterval(move, 10);
var ii = setInterval(move, 2);

function move() {
    pos += dy;

    if (pos < 0 || pos > 370) {
        dy = -dy;
    }
    ball.style.top = pos + 'px';
    // console.log(ball.style.top);
    // ball.style.top = 50 + 'px';
}