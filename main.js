nosex=0;
nosey=0;
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
difference=0;
function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotposes);
}
function draw(){
    background("#00FF00");
    fill("#0000FF");
    textSize(difference)
    text("kush",50,400);
    document.getElementById("font_side").innerHTML="Width and height of the font will be="+difference+"px";
    }
    function modelLoaded(){
        console.log("posenet is initialized");
    }
    function gotposes(results){
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex+" nosey="+nosey);
        leftWristX=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+" rightWristX="+rightWristX+" difference="+difference);
    }
    }
    