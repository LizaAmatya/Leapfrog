var bases = [];
var baseHeight = 171;

function Background() {

    this.init = function() {
        var bcg = document.createElement('img');
        bcg.src = '../images/bcg.png';
        bcg.classList.add('bcg');
        main.appendChild(bcg);
        this.element = bcg;
        return this;
    }

}

function BackgroundBase(left) {
    this.speed = 5;
    this.width = 1000;
    this.left = left;
    this.height = baseHeight;

    this.init = function() {
        var bcgBase = document.createElement('img');
        bcgBase.src = '../images/bcg-base.png';
        bcgBase.classList.add('bcg-base');
        main.appendChild(bcgBase);
        this.element = bcgBase;

        return this;
    }

    this.drawBase = function() {
        this.element.style.left = this.left + 'px';
    }

    this.moveBase = function() {
        this.drawBase();
        this.left += this.speed;
    }
}

function generateBase() {
    for (var r = 0; r < 2; r++) {
        var bcgBase = new BackgroundBase(r * 1000).init();

        bases.push(bcgBase);

    }
}

function animateBase() {
    for (var r = 0; r < 2; r++) {
        if (bases[r].left == r * bases[r].width) {
            bases[r].left -= 1000;
        }
        bases[r].moveBase();
    }
}