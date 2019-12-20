var faces = [
    [0, 1, 3, 2], //front
    [0, 4, 5, 1], //top
    [1, 5, 7, 3], //right
    [2, 3, 7, 6], //down
    [0, 2, 6, 4], //left
    [4, 6, 7, 5] //back
];


var colors = ['#ff8000', '#003366', 'yellow', 'white', 'green', '#C41E3A', '#1a1a1a'];


function Cube(xpos, ypos, zpos, rotx, roty, rotz) {
    this.x = xpos;
    this.y = ypos;
    this.z = zpos;
    this.rotx = rotx;
    this.roty = roty;
    this.rotz = rotz;

    this.faceMatrix = [0, 1, 2, 3, 4, 5];

    this.points = [];
    for (var x = -0.5; x <= 0.5; x++)
        for (var y = -0.5; y <= 0.5; y++)
            for (var z = -0.5; z <= 0.5; z++)
                this.points.push(new Point(x, y, z));

    this.rotateColors = function(xrot, yrot, zrot) {

        for (var i = 0; i < xrot; i++)
            this.faceMatrix = [this.faceMatrix[0], this.faceMatrix[2], this.faceMatrix[3], this.faceMatrix[4], this.faceMatrix[1], this.faceMatrix[5]];

        // this.faceMatrix = [this.faceMatrix[0], this.faceMatrix[2], this.faceMatrix[3], this.faceMatrix[4], this.faceMatrix[1], this.faceMatrix[5]];
        for (var i = 0; i < yrot; i++)
            this.faceMatrix = [this.faceMatrix[2], this.faceMatrix[1], this.faceMatrix[5], this.faceMatrix[3], this.faceMatrix[0], this.faceMatrix[4]];
        for (var i = 0; i < zrot; i++)
            this.faceMatrix = [this.faceMatrix[3], this.faceMatrix[0], this.faceMatrix[2], this.faceMatrix[5], this.faceMatrix[4], this.faceMatrix[1]];
    }


    this.queue = function() {
        for (var x = 0; x < 6; x++) {
            var vertex = [];
            for (var y = 0; y < 4; y++) {

                var point = this.points[faces[x][y]];
                point = point.translate(this.x, this.y, this.z);
                // point = point.rotateX(this.rotx).rotateY(this.roty);
                point = point.rotateX(worldTransform.xrot).rotateY(worldTransform.yrot).rotateZ(worldTransform.zrot);
                point = point.translate(worldTransform.x, worldTransform.y, worldTransform.z);


                if (flag == 1) {
                    var point = this.points[faces[x][y]];
                    point = point.translate(this.x, this.y, this.z);
                    point = point.rotateX(this.rotx);
                    point = point.rotateX(worldTransform.xrot).rotateY(worldTransform.yrot).rotateZ(worldTransform.zrot);
                    point = point.translate(worldTransform.x, worldTransform.y, worldTransform.z);
                } else if (flag == 2) {
                    var point = this.points[faces[x][y]];
                    point = point.translate(this.x, this.y, this.z);
                    point = point.rotateY(this.roty);
                    point = point.rotateX(worldTransform.xrot).rotateY(worldTransform.yrot).rotateZ(worldTransform.zrot);
                    point = point.translate(worldTransform.x, worldTransform.y, worldTransform.z);

                }
                vertex.push(point);
            }
            queueVertex(vertex[0], vertex[1], vertex[2], vertex[3], colors[this.faceMatrix[x]]);
        }
    }
}

function Rubix() {
    this.cubelets = [];
    for (var x = -1; x <= 1; x++)
        for (var y = -1; y <= 1; y++)
            for (var z = -1; z <= 1; z++)
                this.cubelets.push(new Cube(x, y, z, 0, 0, 0));
}