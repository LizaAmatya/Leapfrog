function Carousel(parentElement) {

    this.parentElement = parentElement;
    this.imgWrapperElement = null;
    this.images = ['./image/img1.jpg', './image/img2.jpg', './image/img3.jpg', './image/img4.jpg', './image/img5.jpg'];
    this.imgCount = this.images.length;
    this.IMG_WIDTH = 400;
    this.IMG_HEIGHT = 200;
    this.currIndex = 0;
    this.nextIndex = 0;
    this.slides = [];
    var that = this;
    this.indicatorIndex = 0;


    this.init = function() {
        var carouselContainer = document.createElement('div');
        carouselContainer.classList.add('carousel-container');
        this.parentElement.appendChild(carouselContainer);
        var imageWrapper = document.createElement('div');
        this.imageWrapperElement = imageWrapper;
        imageWrapper.className = 'img-wrapper';
        imageWrapper.id = 'img-wrapper';
        carouselContainer.appendChild(imageWrapper);

        this.createImgs();

        var slideshowBtn = document.createElement('div');
        slideshowBtn.className = 'slideshow-btn';
        carouselContainer.appendChild(slideshowBtn);
        var prevbtn = document.createElement('button');
        prevbtn.id = 'prev';
        this.prevbtn = prevbtn;
        var prevIcon = document.createElement('img');
        prevIcon.src = './image/prev-icon.png';
        var nextbtn = document.createElement('button');
        nextbtn.id = 'next';
        this.nextbtn = nextbtn;
        var nextIcon = document.createElement('img');
        nextIcon.src = './image/next-icon.png';
        prevbtn.appendChild(prevIcon);
        nextbtn.appendChild(nextIcon);
        slideshowBtn.appendChild(prevbtn);
        slideshowBtn.appendChild(nextbtn);
        var slides = imageWrapper.getElementsByTagName('img');
        this.slides = slides;
        var indicator = document.createElement('div');
        indicator.id = 'indicator';
        indicator.className = 'indicator';
        carouselContainer.appendChild(indicator);
        var carouselWrapper = document.getElementById('img-wrapper');
        this.carouselWrapper = carouselWrapper;
        // console.log(carouselWrapper);
        console.log(this.imageWrapperElement);
        this.indicator();
        this.imgStyleLeft();
        this.prevClick();
        this.nextClick();
        setInterval(this.slide.bind(this), 3000);

    }
    console.log('img count', this.imgCount);

    this.createImgs = function() {
        for (var i = 0; i < this.imgCount; i++) {
            var img = document.createElement('img');
            img.id = 'slide' + i;
            img.setAttribute('src', this.images[i]);
            this.imageWrapperElement.appendChild(img);
        }
    }

    this.imgStyleLeft = function() {
        for (var i = 0; i < this.imgCount; i++) {
            this.slides[i].style.left = i * this.IMG_WIDTH + 'px';
            console.log('image styling', this.slides[i], ':', this.slides[i].style.left);
        }
    }

    this.prevClick = function() {

        this.prevbtn.addEventListener('click', function() {
            that.nextIndex = (that.currIndex + that.imgCount - 1) % that.imgCount;
            that.currWrapper = that.currIndex * that.IMG_WIDTH;
            that.nextWrapper = that.nextIndex * that.IMG_WIDTH;
            // console.log('currentindex', that.imageWrapperElement);
            that.carouselWrapper.style.left = -that.nextWrapper + 'px';
            // console.log('currentindex', that.currIndex);
            that.currIndex = that.nextIndex;
            var speed = 100;
            var interval = setInterval(function() {
                if (that.nextIndex == that.imgCount - 1) {
                    that.currWrapper += speed;
                } else {
                    that.currWrapper -= speed;
                }

                that.carouselWrapper.style.left = -that.currWrapper + 'px';
                console.log('current>>', currWrapper);
                console.log('next>>', nextWrapper);
                if (that.nextIndex == that.imgCount - 1) {
                    if (that.currWrapper >= that.nextWrapper) {
                        clearInterval(interval);
                    }
                } else {
                    if (that.currWrapper <= that.nextWrapper) {
                        clearInterval(interval);
                    }

                }
            }, 10)
        })
    }

    this.nextClick = function() {
        this.nextbtn.addEventListener('click', function() {

            that.nextIndex = (that.currIndex + 1) % that.imgCount;
            that.currWrapper = that.currIndex * that.IMG_WIDTH;
            that.nextWrapper = that.nextIndex * that.IMG_WIDTH;
            console.log('currentindex', that.currIndex);
            that.currIndex = that.nextIndex;
            var speed = 100;
            console.log('currentindex', that.currIndex);
            var interval = setInterval(function() {
                if (that.nextIndex == 0) {
                    that.currWrapper -= speed;
                } else {
                    that.currWrapper += speed;
                }

                that.carouselWrapper.style.left = -that.currWrapper + 'px';
                console.log('current>>', that.currWrapper);
                console.log('next>>', that.nextWrapper);
                if (that.nextIndex == 0) {
                    if (that.currWrapper <= that.nextWrapper) {
                        clearInterval(interval);
                    }
                } else {
                    if (that.currWrapper >= that.nextWrapper) {
                        clearInterval(interval);
                    }

                }
            }, 10)

        })
    }
    this.slide = function() {
        that.nextIndex = (that.currIndex + 1) % that.imgCount;

        that.currWrapper = that.currIndex * that.IMG_WIDTH;
        that.nextWrapper = that.nextIndex * that.IMG_WIDTH;
        that.carouselWrapper.style.left = -that.nextWrapper + 'px';
        console.log('currentindex', that.currIndex);
        console.log('next', that.nextIndex);
        that.currIndex = that.nextIndex;
        var speed = 100;

        var interval = setInterval(function() {
            if (that.nextIndex == 0) {
                that.currWrapper -= speed;
            } else {
                that.currWrapper += speed;
            }

            that.carouselWrapper.style.left = -that.currWrapper + 'px';
            console.log('current>>', that.currWrapper);
            console.log('next>>', that.nextWrapper);
            if (that.nextIndex == 0) {
                if (that.currWrapper <= that.nextWrapper) {
                    clearInterval(interval);
                }
            } else {
                if (that.currWrapper >= that.nextWrapper) {
                    clearInterval(interval);
                }

            }
        }, 10)
    }

    this.indicator = function() {
        var div = document.getElementById('indicator');

        var id = [];
        for (i = 0; i < this.imgCount; i++) {
            var ball = document.createElement("span");
            ball.id = 'dot' + i;
            ball.className = 'dot';
            div.appendChild(ball);


            id[i] = document.getElementById(ball.id);
            console.log(id);

        }

        id.forEach(function(el) {
            el.addEventListener('click', function() {
                that.indicatorIndex = el.getAttribute('id').split('dot')[1];
                // console.log('indicator >> ', indicatorIndex);
                that.gotoSlide(that.indicatorIndex);
            })
        })

    }

    this.gotoSlide = function(index) {

        console.log('dot clicked');
        this.nextIndex = index;
        console.log('this.nextIndex', this.nextIndex);

        console.log('curr index', this.currIndex);
        this.currWrapper = this.currIndex * this.IMG_WIDTH;
        this.nextWrapper = this.nextIndex * this.IMG_WIDTH;
        that.carouselWrapper.style.left = -this.nextIndex * this.IMG_WIDTH + 'px';
        // this.currIndex = this.nextIndex;
    }

}


var parentElement = document.getElementById('main');
carousel = new Carousel(parentElement);
carousel.init();
// setInterval(carousel.slide(), 3000);
// carousel.imgStyleLeft();