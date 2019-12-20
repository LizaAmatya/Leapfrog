var animationDuration = 50;
var animationTimer = null;

//merging cubelets to form blocks around x,y,z axis
var blocks = [
    [2, 1, 0, 5, 4, 3, 8, 7, 6],
    [11, 10, 9, 14, 13, 12, 17, 16, 15],
    [20, 19, 18, 23, 22, 21, 26, 25, 24],
    [2, 1, 0, 11, 10, 9, 20, 19, 18],
    [5, 4, 3, 14, 13, 12, 23, 22, 21],
    [8, 7, 6, 17, 16, 15, 26, 25, 24],
    [6, 3, 0, 15, 12, 9, 24, 21, 18],
    [7, 4, 1, 16, 13, 10, 25, 22, 19],
    [8, 5, 2, 17, 14, 11, 26, 23, 20]
];


function animationTimeCalc(timeDiff, rotationCounter, duration) {

    timeDiff /= duration / 2;

    if (timeDiff < 1)
        return rotationCounter / 2 * timeDiff * timeDiff * timeDiff * timeDiff * timeDiff;
    timeDiff -= 2;
    return rotationCounter / 2 * (timeDiff * timeDiff * timeDiff * timeDiff * timeDiff + 2);
}


function startAnimation(obj) {
    //random block
    if (flag == 1) {

        obj.slice = parseInt(Math.random() * 3);
    } else if (flag == 2) {
        obj.slice = parseInt(Math.random() * 6);
    }

    obj.rotationAmount = (parseInt(Math.random() * 2) + 1);
    if (Math.random() * 2 > 1)
        obj.rotationAmount *= -1;
    obj.animationTimer = animationDuration;
}

function updateAnimation(obj) {
    obj.animationTimer--;
    var currRotation = animationTimeCalc(animationDuration - obj.animationTimer, obj.rotationAmount * Math.PI / 2, animationDuration);
    console.log(obj.slice);
    for (var i = 0; i < 9; i++) {
        if (obj.slice < 3)
            obj.cubelets[blocks[obj.slice][i]].rotx = currRotation;
        else if (obj.slice < 6)
            obj.cubelets[blocks[obj.slice][i]].roty = currRotation;
        else
            obj.cubelets[blocks[obj.slice][i]].rotz = currRotation;
    }
};

function endAnimation(obj) {

    var value = obj.rotationAmount;
    if (value == -1)
        value = 3;
    else if (value == -2)
        value = 2;

    for (var i = 0; i < 9; i++) {

        if (obj.slice < 3)
            obj.cubelets[blocks[obj.slice][i]].rotateColors(value, 0, 0);
        else if (obj.slice < 6)
            obj.cubelets[blocks[obj.slice][i]].rotateColors(0, value, 0);
        else
            obj.cubelets[blocks[obj.slice][i]].rotateColors(0, 0, value);

        obj.cubelets[blocks[obj.slice][i]].rotx = 0;
        obj.cubelets[blocks[obj.slice][i]].roty = 0;
        obj.cubelets[blocks[obj.slice][i]].rotz = 0;
    }
}

function fixColors(obj) {
    var value = obj.rotationAmount;
    if (value == -1)
        value = 3;
    else if (value == -2)
        value = 2;

    for (var x = 0; x < value; x++) {
        var temp = obj.cubelets[blocks[obj.slice][0]].faceMatrix.slice();
        obj.cubelets[blocks[obj.slice][0]].faceMatrix = obj.cubelets[blocks[obj.slice][6]].faceMatrix.slice();
        obj.cubelets[blocks[obj.slice][6]].faceMatrix = obj.cubelets[blocks[obj.slice][8]].faceMatrix.slice();
        obj.cubelets[blocks[obj.slice][8]].faceMatrix = obj.cubelets[blocks[obj.slice][2]].faceMatrix.slice();
        obj.cubelets[blocks[obj.slice][2]].faceMatrix = temp.slice();

        temp = obj.cubelets[blocks[obj.slice][1]].faceMatrix.slice();
        obj.cubelets[blocks[obj.slice][1]].faceMatrix = obj.cubelets[blocks[obj.slice][3]].faceMatrix.slice();
        obj.cubelets[blocks[obj.slice][3]].faceMatrix = obj.cubelets[blocks[obj.slice][7]].faceMatrix.slice();
        obj.cubelets[blocks[obj.slice][7]].faceMatrix = obj.cubelets[blocks[obj.slice][5]].faceMatrix.slice();
        obj.cubelets[blocks[obj.slice][5]].faceMatrix = temp.slice();
    }
}

function animation(obj) {

    if (obj.animationTimer > 0) {
        updateAnimation(obj);
    } else if (obj.animationTimer == 0) {
        flag = 0;
        endAnimation(obj);
        fixColors(obj);
        obj.animationTimer = null;

    } else if (!obj.animationTimer && (flag == 1 || flag == 2)) {
        startAnimation(obj);
    }
    for (var x = 0; x < obj.cubelets.length; x++) {
        obj.cubelets[x].queue();
    }
}