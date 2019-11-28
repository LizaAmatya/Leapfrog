function Image() {
    this.IMG_WIDTH = 400;
    this.IMG_HEIGHT = 200;
    this.content = null;
    this.currIndex = 0;
    this.nextIndex = null;
}


// function Image(width, height) {


//     // Carousel.call(this, parentElement);
//     console.log(this.imgCount);


// }

// new Image(400, 200).imgStyleLeft();

// Image.prototype = Object.create(Carousel.prototype);
var pic = new Image(400, 200);
pic.imgStyleLeft();

console.log(Image.nextIndex);

var image = carouselWrapper.getElementsByTagName('img');
var imgCount = image.length;

for (var i = 0; i < imgCount; i++) {
    image[i].style.left = i * imgWidth + 'px';
}
var currIndex = 0;
var btn = document.getElementById("next");
var prevBtn = document.getElementById("prev");


function prev() {
    var nextIndex = (currIndex + imgCount - 1) % imgCount;
    var currWrapper = currIndex * imgWidth;
    var nextWrapper = nextIndex * imgWidth;
    carouselWrapper.style.left = -nextWrapper + 'px';
    currIndex = nextIndex;
}

function next() {
    var nextIndex = (currIndex + 1) % imgCount;
    var currWrapper = currIndex * imgWidth;
    var nextWrapper = nextIndex * imgWidth;
    carouselWrapper.style.left = -nextWrapper + 'px';
    currIndex = nextIndex;
}

prevBtn.addEventListener('click', function() {
    prev();
})

nxtBtn.addEventListener('click', function() {
    next();
})