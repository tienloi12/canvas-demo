let canvas = document.getElementById("myCanvas");

/**
 * 
 * @param {any} canvas 
 * @returns {CanvasRenderingContext2D}
 */
function createPaper(canvas) {
    return canvas.getContext("2d");
}
let paper = createPaper(canvas);

let currentTime = Date.now();
let veloccityX = 100;
let circleX = 70;
let omega = 1;

setInterval(() => {
    let delta = (Date.now() - currentTime) / 1000;
    let fps = 1 / delta;
    currentTime = Date.now();
    paper.clearRect(0, 0, canvas.width, canvas.height);
    console.log("FPS: " + Math.floor(fps));
    //draw
    paper.beginPath();
    paper.strokeStyle = "yellow";
    paper.fillStyle = "yellow";
    paper.arc(circleX, 50, 30, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
    // circleX += 100 *delta;

    circleX =  270 + (270 / 2) + Math.cos((omega * currentTime) / 1000) * 100;

}, 1000 / 60);