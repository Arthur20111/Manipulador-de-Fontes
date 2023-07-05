var diferenca = 0;
var pulsoDireitoX = 0;
var pulsoEsquerdoX = 0;
var video, canvas, poseNet;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(0, 0);
    canvas = createCanvas(550, 500);
    canvas.position(550, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet iniciou");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        pulsoDireitoX = results[0].pose.rightWrist.x;
        pulsoEsquerdoX = results[0].pose.leftWrist.x;
        diferenca = floor(pulsoEsquerdoX - pulsoDireitoX);
    }
}

function draw() {
    background("white");
    document.getElementById("font_size").innerHTML = "Tamanho da fonte será" + diferenca + "px";
    textSize(diferenca);
    fill("black");
    text("Arthur", 50, 400);
}