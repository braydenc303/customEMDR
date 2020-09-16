let background;
let ball;
let bpm;

document.getElementById("colorPicker1").addEventListener("change", chooseBackground);
document.getElementById("colorPicker2").addEventListener("change", chooseBall);
document.getElementById("bpm").addEventListener("change", chooseBpm);

function chooseBackground() {
    background = document.getElementById("colorPicker1").value;
    console.log(background);
    document.body.style.background = background;
}

function chooseBall() {
    ball = document.getElementById("colorPicker2").value;
    console.log(ball);
    document.getElementById("ball").style.background = ball;
}

function chooseBpm() {
    bpm = document.getElementById("bpm").value;
    let duration = 120/bpm;
    document.getElementById("ball").style.animationDuration = duration + "s";
}