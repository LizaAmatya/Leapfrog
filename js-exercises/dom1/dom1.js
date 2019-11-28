var points = [
    { x: 10, y: 20 },
    { x: 40, y: 40 },
    { x: 60, y: 20 },
    { x: 80, y: 30 },

];

// var canvas = document.getElementById('plot');
// var ctx = canvas.getContext("2d");


// points.forEach(function(circle) {
//     ctx.beginPath();
//     ctx.arc(circle.x * 5, circle.y * 5, 5, 0, 2 * Math.PI); //*5 is for point placed according to size of canvas
//     // ctx.stroke();
//     ctx.fillStyle = "blue";
//     ctx.fill();
//     // ctx.scale(2, 2);    //circle is enlarged
// })


var div = document.getElementById('scatter');


// var dx = 20;
// var dy = 20;

// scatter();

points.forEach(function(circle) {
    var ball = document.createElement("span");

    ball.className = "dot";
    ball.style.left = circle.x * 5 + 'px';
    ball.style.top = circle.y * 5 + 'px';
    div.appendChild(ball);
})