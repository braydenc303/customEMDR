let background;
let ball;
let bpm;

document.getElementById("colorPicker1").addEventListener("change", chooseBackground);
document.getElementById("colorPicker2").addEventListener("change", chooseBall);
document.getElementById("bpm").addEventListener("change", chooseBpm);

function chooseBackground() {
    background = document.getElementById("colorPicker1").value;
    let brightness = 0
    for (let i = 1; i < background.length; i++) {
        console.log(background[i])
        console.log(parseInt(background[i]))
        console.log(typeof parseInt(background[i]))
        if (parseInt(background[i]) !== 0 && !parseInt(background[i])) {
            brightness++;
        }
    }
    console.log(brightness);
    if (brightness < 3) {
        document.getElementById("box2").style.color = "#FFFFFF"
        document.getElementById("box3").style.color = "#FFFFFF"
        document.getElementById("box4").style.color = "#FFFFFF"
    } else {
        document.getElementById("box2").style.color = "#000000"
        document.getElementById("box3").style.color = "#000000"
        document.getElementById("box4").style.color = "#000000"
    }
    console.log(parseInt(background[5]));
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