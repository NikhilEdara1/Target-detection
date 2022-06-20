function preload()
{
A=loadImage("20220615_083257.jpg");

}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
}


function draw()
{
    image(A,0,0,640,420);
    fill("red");
    text("human",140,50);
    noFill();
     stroke("red");
     rect(140,40,100,90);

    
     
}