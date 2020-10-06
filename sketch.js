var ball2;
var database,position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball2 = createSprite(250,250,10,10);
    ball2.shapeColor = "red";
    var ballposition=database.ref('Ball/Position');
    ballposition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('Ball/Position').set({
        'x':position.x+x,
        'y':position.y+y
    })
    
}

function readposition(data){
    position=data.val();
    ball2.x=position.x;
    ball2.y=position.y;
}

function showerror(){
    console.log("error in reading the value from database");
}