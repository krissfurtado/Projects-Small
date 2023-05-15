const canvasEl = document.querySelector("canvas"),
canvasCtx = canvasEl.getContext("2d")

function setup() {
    canvasEl.width = canvasCtx.width = window.innerWidth
    canvasEl.height = canvasCtx.height = window.innerHeight
}

function draw() {
    //set table color (green)
    canvasCtx.fillStyle = "#286047"
    canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)
}

setup()
draw()