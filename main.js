noseX=0;
noseY=0;
difference=0;
leftWrist=0;
rightWrist=0;

function setup(){
   canvas=createCanvas(550,400);
   canvas.position(560,150);

   video=createCapture(VIDEO);
   video.size(550,400);

   posenet=ml5.poseNet(video,modelloaded);
   posenet.on('pose',gotPoses)
}

function modelloaded(){
    console.log("Posenet initialized!");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftWrist=results[0].pose.leftWrist.x;
    rightWrist=results[0].pose.rightWrist.x;
    difference=floor(leftWrist-rightWrist);
   console.log("Left wrist: "+leftWrist+", Right wrist; "+rightWrist+", Difference: "+difference)
}
}

function draw(){
    background("#C4FFB2")

    document.getElementById("square-size").innerHTML="Height and Width of the square is "+difference+"px";
    fill("#AD6A6C");
    stroke("#AD6A6C");
    square(noseX,noseY,difference);
}
