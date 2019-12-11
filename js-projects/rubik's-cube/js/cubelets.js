function DrawCubelets() {

    this.cubelets = function(x, y, z, size) {

        size *= 0.5;
        Point3D.call(this, x, y, z);
        this.vertices = [
            new Point3D(x - size, y - size, z - size), //front top left
            new Point3D(x + size, y - size, z - size), //front top right
            new Point3D(x - size, y + size, z - size), //front bottom left
            new Point3D(x + size, y + size, z - size), //front bottom right
            new Point3D(x - size, y - size, z + size), //back top left
            new Point3D(x + size, y - size, z + size), //back top right
            new Point3D(x - size, y + size, z + size), //back bottom left
            new Point3D(x + size, y + size, z + size) //back bottom right
        ]

        Projection(this.vertices);
        return this;
    }

}

function Project(points3d, width, height) {
    var points2d = new Array(points3d.length);
    var cameraPoint = 50;

    for (var i = 0; i < points3d.length; i++) {

        var p = points3d[i];
        var x = p.x * (cameraPoint / p.z) + width * 0.2;
        var y = p.y * (cameraPoint / p.z) + height * 0.2;

        points2d[i] = new Point2D(x, y);

    }
    return points2d;
}

function Projection(vertices) {

    this.vertices = vertices;
    var faces = [
        [0, 1, 3, 2],
        [4, 5, 7, 6],
        [0, 4, 5, 1],
        [2, 6, 7, 3],
        [0, 4, 6, 2],
        [1, 5, 7, 3]
    ]
    var projectedVertices = Project(this.vertices, canvas.width, canvas.height);

    ctx.strokeStyle = 'black';
    // ctx.fillStyle = 'red';

    for (var index = 0; index < faces.length; index++) {
        face = faces[index];

        ctx.beginPath();

        ctx.moveTo(projectedVertices[face[0]].x, projectedVertices[face[0]].y);
        for (var i = 1; i <= 3; i++) {
            ctx.lineTo(projectedVertices[face[i]].x, projectedVertices[face[i]].y);
        }
        ctx.closePath();
        // ctx.fill();
        ctx.stroke();
    }
}