
var pic;

function setup() {
    initializeFields();
    createCanvas(1000, 1000);
    pic = loadImage("pruebaa.jpg");
    pic.resize(1000, 1000);
}

function draw() {
    background(255);
    fill(153, 235, 184);
    noStroke();
    var tiles = mouseX / 5;
    var tileSize = width / tiles;
    translate(tileSize / 2, tileSize / 2);
    for (var x = 0; x < tiles; x++) {
        for (var y = 0; y < tiles; y++) {
            var c = pic.get(int(x * tileSize), int(y * tileSize));
            var size = map(brightness(c), 0, 255, tileSize, 0);
            ellipse(x * tileSize, y * tileSize, size, size);
        }
    }
    fill(255, 105, 122);
    noStroke();
    var tiles2 = mouseX / 5;
    var tileSize2 = width / tiles2;
    translate(tileSize2 / 2, tileSize2 / 2);
    for (var x = 0; x < tiles; x++) {
        for (var y = 0; y < tiles; y++) {
            var c = pic.get(int(x * tileSize2), int(y * tileSize2));
            var size = map(brightness(c), 0, 255, tileSize2, 0);
            ellipse(x * tileSize2, y * tileSize2, size, size);
        }
    }
}

function initializeFields() {
    pic = null;
}

function preload() {

    pic = loadImage(pruebaa.jpg)
// TODO: put method calls that load from files into this method
// I found the following calls that you should move here:
// - on line 6: pic = loadImage("pruebaa.jpg")
// (note that line numbers are from your Processing code)
}