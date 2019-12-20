var queue = [];

var Point = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.project = function() {
        return new Point(

            width * (this.x / (this.z * 2 * Math.tan(1 / 2)) + 1 / 2),
            height * (this.y / (this.z * 2 * Math.tan(1 / 2)) + 1 / 2)
        );
    }

    this.rotateX = function(theta) {
        return new Point(
            this.x,
            this.y * Math.cos(theta) - this.z * Math.sin(theta),
            this.y * Math.sin(theta) + this.z * Math.cos(theta)
        );
    }
    this.rotateY = function(theta) {
        return new Point(
            this.x * Math.cos(theta) - this.z * Math.sin(theta),
            this.y,
            this.x * Math.sin(theta) + this.z * Math.cos(theta)
        );
    }
    this.rotateZ = function(theta) {
        return new Point(
            this.x * Math.cos(theta) - this.y * Math.sin(theta),
            this.x * Math.sin(theta) + this.y * Math.cos(theta),
            this.z
        );
    }
    this.translate = function(x, y, z) {
        return new Point(
            this.x + x,
            this.y + y,
            this.z + z
        );
    }
}


//point projection for each face in here
function queueVertex(point0, point1, point2, point3, color) {
    var averageZ = (point0.z + point1.z + point2.z + point3.z) / 4;
    var element = [color, averageZ, point0.project(), point1.project(), point2.project(), point3.project()];
    if (queue.length === 0)
        queue[0] = element;
    else {
        queue[queue.length] = element;
        for (var x = queue.length - 2; x >= 0 && queue[x][1] < averageZ; x -= 1) {
            queue[x + 1] = queue[x];
            queue[x] = element;
        }
    }
}

var clearDrawQueue = function() {
    queue = [];
}

var drawQueue = function() {
    for (var x = 0; x < queue.length; x++) {
        ctx.fillStyle = queue[x][0];
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.4;
        ctx.beginPath();
        ctx.moveTo(queue[x][2].x, queue[x][2].y);
        for (var y = 3; y < queue[x].length; y++)
            ctx.lineTo(queue[x][y].x, queue[x][y].y);
        ctx.lineTo(queue[x][2].x, queue[x][2].y);
        ctx.fill();
        ctx.stroke();
    }
}