function begin() {

    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 500;
    loop();
    // window.requestAnimationFrame(loop);
}


begin();

var rad = 0.05;

function loop() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var cube = new Rubix().init();
    console.log(cube);
    canvas.addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // RotateX(cube, rad);
        // cube.rotateY(rad);
        Projection(cube.rubixVertices);
        rad += 0.01;
    });
    Projection(cube.rubixVertices);

    // window.requestAnimationFrame(loop);

}