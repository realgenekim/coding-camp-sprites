var canvasWidth = 650;
var canvasHeight = 200;

var spriteWidth = 864;
var spriteHeight = 280;

var rows = 2;
var cols = 8;

var trackRight = 0;
var trackLeft = 1;

var width = spriteWidth / cols;
var height = spriteHeight / rows;

var curFrame = 0;
var frameCount = 8;

var x = 0;
var y = 10;

var srcX;
var srcY;

var left = false;
var right = true;
var stop = false;

var speed = 12;

var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext("2d");

var character = new Image();
character.src = "https://storage.googleapis.com/realgenekim-public/character.png"

function updateFrame() {
    if (stop) {
        curFrame = curFrame % frameCount;
    } else {
        curFrame = ++curFrame % frameCount;
    }
    srcX = curFrame * width;
    ctx.clearRect(x, y, width, height);

    // move left?
    if (left && x > 0) {
        srcY = trackLeft * height;
        x -= speed;
    }
    // move right?
    if (right && x < canvasWidth - width) {
        srcY = trackRight * height;
        x += speed;
    }
}

function draw() {
    updateFrame();
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}


function moveLeft() {
    left = true;
    right = false;
    stop = false;
}

function moveRight() {
    left = false;
    right = true;
    stop = false;
}

function stopCharacter() {
    stop = true;
    left = false;
    right = false;
}
// redraw every 100 milliseconds
setInterval(draw, 100);
