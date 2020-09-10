function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    img = createCapture(VIDEO);
    img.hide();
}

function draw() {
    image(img, 0, 0, 640, 480);
}

function take_snapshot() {
    save("my_image.png");
}