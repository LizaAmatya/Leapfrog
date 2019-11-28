// var images = ['./image/img1.jpg', './image/img2.jpg', './image/img3.jpg', './image/img4.jpg'];

var imgWidth = 400;
// var IMG_HEIGHT = 200;

var carouselWrapper = document.getElementById('img-wrapper');
// var left = carouselWrapper.style.width = imgCount * IMG_WIDTH + 'px';

var image = carouselWrapper.getElementsByTagName('img');
var imgCount = image.length;

var currIndex = 0;
// var slides = [];

for (var i = 0; i < imgCount; i++) {
    image[i].style.left = i * imgWidth + 'px';
    // slides.push(image[i]);
}

// setInterval(slide, 1000);

console.log('currentindex', currIndex);
var nxtBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

// function prev(index) {

// }
prevBtn.addEventListener('click', function() {
    // console.log('clicked');
    // var indicatorIndex = document.getElementById('slide'+currIndex).split('slide')[1];
    // prev(indicatorIndex);
    var nextIndex = (currIndex + imgCount - 1) % imgCount;
    // console.log('nextIndex', nextIndex);
    var currWrapper = currIndex * imgWidth;
    var nextWrapper = nextIndex * imgWidth;
    carouselWrapper.style.left = -nextWrapper + 'px';
    // document.getElementById('slide' + currIndex).style.left = -currIndex * imgWidth + 'px';
    // document.getElementById('slide' + nextIndex).style.left = 0;
    console.log('currentindex', currIndex);
    // console.log('next', nextIndex);
    currIndex = nextIndex;
    console.log('currentindex', currIndex);
    var speed = 100;
    var interval = setInterval(function() {
        if (nextIndex == imgCount - 1) {
            currWrapper += speed;
        } else {
            currWrapper -= speed;
        }

        carouselWrapper.style.left = -currWrapper + 'px';
        console.log('current>>', currWrapper);
        console.log('next>>', nextWrapper);
        if (nextIndex == imgCount - 1) {
            if (currWrapper >= nextWrapper) {
                clearInterval(interval);
            }
        } else {
            if (currWrapper <= nextWrapper) {
                clearInterval(interval);
            }

        }
    }, 10)
})


// function next() {
nxtBtn.addEventListener('click', function() {
    // console.log('clicked');
    var nextIndex = (currIndex + 1) % imgCount;
    var currWrapper = currIndex * imgWidth;
    var nextWrapper = nextIndex * imgWidth;
    console.log('currentindex', currIndex);
    // document.getElementById('slide' + currIndex).style.left = -currIndex * imgWidth + 'px';
    // document.getElementById('slide' + nextIndex).style.left = 0;

    currIndex = nextIndex;
    var speed = 100;
    console.log('currentindex', currIndex);
    var interval = setInterval(function() {
        if (nextIndex == 0) {
            currWrapper -= speed;
        } else {
            currWrapper += speed;
        }

        carouselWrapper.style.left = -currWrapper + 'px';
        console.log('current>>', currWrapper);
        console.log('next>>', nextWrapper);
        if (nextIndex == 0) {
            if (currWrapper <= nextWrapper) {
                clearInterval(interval);
            }
        } else {
            if (currWrapper >= nextWrapper) {
                clearInterval(interval);
            }

        }
    }, 10)

})



function slide() {
    var nextIndex = (currIndex + 1) % 4;
    // document.getElementById('slide' + currIndex).style.left = -100 + '%';
    // document.getElementById('slide' + nextIndex).style.left = 0;
    var currWrapper = currIndex * imgWidth;
    var nextWrapper = nextIndex * imgWidth;
    carouselWrapper.style.left = -nextWrapper + 'px';
    console.log('currentindex', currIndex);
    console.log('next', nextIndex);
    currIndex = nextIndex;
    var speed = 100;

    var interval = setInterval(function() {
        if (nextIndex == 0) {
            currWrapper -= speed;
        } else {
            currWrapper += speed;
        }

        carouselWrapper.style.left = -currWrapper + 'px';
        console.log('current>>', currWrapper);
        console.log('next>>', nextWrapper);
        if (nextIndex == 0) {
            if (currWrapper <= nextWrapper) {
                clearInterval(interval);
            }
        } else {
            if (currWrapper >= nextWrapper) {
                clearInterval(interval);
            }

        }
    }, 10)
}

// setInterval(slide, 2000);


function indicator() {
    var div = document.getElementById('indicator');
    // var ballId = [];
    var id = [];
    for (i = 0; i < imgCount; i++) {
        var ball = document.createElement("span");
        ball.id = 'dot' + i;
        ball.className = 'dot';
        div.appendChild(ball);
        // ballId.push(ball.id);

        id[i] = document.getElementById(ball.id);
        console.log(id);

    }

    id.forEach(function(el) {
        el.addEventListener('click', function() {
            var indicatorIndex = el.getAttribute('id').split('dot')[1];
            console.log('indicator >> ', indicatorIndex);
            gotoSlide(indicatorIndex);
        })
    })

}

indicator();

function gotoSlide(index) {

    console.log('dot clicked');
    var nextIndex = index;
    console.log('nextindex', nextIndex);

    console.log('curr index', currIndex);
    var currWrapper = currIndex * imgWidth;
    var nextWrapper = nextIndex * imgWidth;
    carouselWrapper.style.left = -nextIndex * imgWidth + 'px';
    // currIndex = nextIndex;
}

setInterval(slide, 3000);