img=""
status =""
objects=[];
function preload() {
img=loadImage("dog_cat.jpg")

}

function draw(){
    image(video,0,0,380,380);
    if(status !="")
    {
        r=random(225);
        g=random(225);
        b=random(225);
        objectDetector.detect(video,gotResults);
        for (i= 0; i<objects.length;i++)
        {
            document.getElementById("status").innerHTML="status: obejct Detected";
            document.getElementById("number_of_objects").innerHTML="number of objects detected are:"+objects.length;
            fill(r,g,b);
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y)
            noFill()
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }

}


function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function modalLoaded() {
    console.log("modal Loaded!");
    status=true;
   
}

function gotResults(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;
}

function start() {
 objectDetector = ml5.objectDetector('cocossd',modalLoaded); 
 document.getElementById("status").innerHTML = "Status : Detecting Objects";
 }