var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var height = canvas.height = 400;
var width = canvas.width = 400;

var worldTransform = { x: 0, y: 0, z: 6, xrot: 0, yrot: 0, zrot: 0 };

var flag = 0;

var main = new Rubix();

var draw = function() {
    ctx.clearRect(0, 0, width, height);

    worldTransform.xrot = 45;
    worldTransform.yrot = 10;
    worldTransform.zrot = 50;

    clearDrawQueue();
    animation(main);
    drawQueue();


    requestAnimationFrame(draw);

};

requestAnimationFrame(draw);

document.addEventListener('keydown', function(event) {
    //up -> x rotation
    if (event.keyCode === 38) {
        flag = 1;

    }

    //down -> y rotation
    if (event.keyCode === 40) {
        flag = 2;
    }
})