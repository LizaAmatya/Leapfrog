function begin() {

    var canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 700;

    window.requestAnimationFrame(draw);
}
var maxCircleSize = 20;
var phase = 0;
var speed = 0.0002;

var cols = 15;
var rows = 10;

function draw() {

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.fillStyle = '#043a4a';
    this.ctx.fillRect(0, 0, 800, 700);
    for (var strand = 0; strand < 2; strand++) {
        if (strand === 0) {
            strandPhase = phase;
        } else {
            strandPhase = phase + Math.PI;
        }
        for (var col = 0; col < cols; col++) {
            var colOffSet = (col * Math.PI) / 15;
            var x = 125 + col * 50;
            for (var row = 0; row < rows; row++) {

                var y = canvas.height / 2 + row * 25 + Math.sin(strandPhase + colOffSet) * 50;
                phase = (frames.length++) * speed;
                // console.log(frames.length++);
                var sizeOffset = (Math.cos(strandPhase - (row / 15) + colOffSet) + 1) * 0.5
                var circleSize = sizeOffset * maxCircleSize;

                this.ctx.beginPath();
                this.ctx.fillStyle = '#eb879a';
                this.ctx.ellipse(x, y, circleSize, circleSize, Math.PI, 0, 2 * Math.PI);
                this.ctx.fill();

            }
        }

    }



    window.requestAnimationFrame(draw);

}

begin();