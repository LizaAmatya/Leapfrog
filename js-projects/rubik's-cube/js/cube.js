var that = this;

function Point3D(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function Point2D(x, y) {
    this.x = x;
    this.y = y;
}



function Rubix() {

    var size = 50;

    this.init = function() {


        // Point3D.call(this, x, y, z);
        this.rubixCube = [];
        this.rubixVertices = [];
        for (var xVal = 0; xVal < 3; xVal++) {
            for (var yVal = 0; yVal < 3; yVal++) {
                for (var zVal = 1; zVal <= 3; zVal++) {

                    var cube = new DrawCubelets().cubelets(xVal * 50, yVal * 50, zVal * 50, size);

                    this.rubixCube.push(cube);
                }
            }
        }

        this.rubixEdges();
        return this;
    }

    this.rubixEdges = function() {
        var rubixIndeces = [0, 18, 6, 24, 2, 20, 8, 26];
        var i = 0;
        for (var j = 0; j <= 7; j++) {
            this.rubixVertices.push(this.rubixCube[rubixIndeces[i]].vertices[j]);
            rubixIndeces[i++];

        }
    }

}

function RotateX(cube, radian) {
    //to rotate x axis, y and z is changed

    var cosine = Math.cos(radian);
    var sine = Math.sin(radian);
    for (var i = 0; i < cube.rubixVertices.length; i++) {
        var p = cube.rubixVertices[i];

        //p.y/p.z - this.y/this.z is done to rotate cube about its own and not rotate around the world
        var yVal = (p.y - cube.y) * cosine - (p.z - cube.z) * sine;
        var zVal = (p.y - cube.y) * sine + (p.z - cube.z) * cosine;
        p.y = yVal + cube.y;
        p.z = zVal + cube.z;

    }
}

function RotateY(cube, radian) {
    //to rotate y axis, x and z is changed

    var cosine = Math.cos(radian);
    var sine = Math.sin(radian);
    for (var i = 0; i < this.rubixVertices.length; i++) {
        var p = this.rubixVertices[i];

        //p.y/p.z - this.y/this.z is done to rotate cube about its own and not rotate around the world
        var xVal = (p.x - this.x) * cosine - (p.z - this.z) * sine;
        var zVal = (p.x - this.x) * sine + (p.z - this.z) * cosine;
        p.x = xVal + this.x;
        p.z = zVal + this.z;

    }
}