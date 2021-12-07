timer_counter=0
function setup() {
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function clearCanvas(){
    background("white");
}

function draw(){
    strokeWeight(13);
    stroke(0);
    line(pmouseX, pmouseY, mouseX, mouseY);
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;
    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}

if (timer_counter = 400){
    timer_counter=completed;
    console.log("timer completed");
    answer_holder = set;
} 

function updateCanvas(){
    canvas.background=white;
}

if (timer_counter = completed){
    updateCanvas;
    timer_counter="";
    answer_holder="";
}

