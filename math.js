
var CIRCLE_SHIFT = 10;
var pointer = document.getElementById("point");
var circler = document.getElementById("circle");
var pos_x = parseInt(circler.style.left.replace('px',''), 10);
var pos_y = parseInt(circler.style.left.replace('px',''), 10);
var square_width = parseInt(document.getElementById('square').style.width.replace('px',''), 10);
var square_height = parseInt(document.getElementById('square').style.height.replace('px',''), 10);
var circle_width = parseInt(document.getElementById('circle').style.width.replace('px',''), 10);
var circle_height = parseInt(document.getElementById('circle').style.height.replace('px',''), 10);
var rad = parseInt(document.getElementById('circle').style.width.replace('px',''), 10)/2;



function getXPositionOfPoint() {
    var x_position = Math.floor(Math.random() * square_width);
    pointer.style.top = x_position;

}
function getYPositionOfPoint() {
    var y_position = Math.floor(Math.random() * square_height);
    pointer.style.left = y_position;
}

function getNewPoint(){
    getYPositionOfPoint();
    getXPositionOfPoint();
}

getNewPoint();

function moveCircle(keyCode){
    
    var pos_x = +circler.style.left.replace('px','');
    var pos_y = +circler.style.top.replace('px','');
    switch (keyCode){
        case 37: 
            if (pos_x != 0 ) circler.style.left = (pos_x - CIRCLE_SHIFT) + 'px';
            break;
        case 38:
            if (pos_y != 0)circler.style.top = (pos_y - CIRCLE_SHIFT) + 'px';
            break;
        case 39:
            if (pos_x + CIRCLE_SHIFT < (square_width - circle_width)) circler.style.left = (pos_x + 10) + 'px';
            break;
        case 40:
            if (pos_y + CIRCLE_SHIFT < (square_height - circle_height))circler.style.top = (pos_y + 10) + 'px';
            break;
    }
    var midXCoord = parseInt(circler.style.left.replace('px',''), 10) +rad;
    var midYCoord = parseInt(circler.style.top.replace('px',''), 10) +rad;
    console.log(midXCoord);
    var xCoordByMid = midXCoord - parseInt(pointer.style.left.replace('px',''), 10);
    var yCoordByMid = midYCoord - parseInt(pointer.style.top.replace('px',''), 10);

    pos_x = parseInt(circler.style.left.replace('px',''), 10);
    pos_y = parseInt(circler.style.top.replace('px',''), 10);
    if( xCoordByMid * xCoordByMid + yCoordByMid * yCoordByMid < rad * rad){
       getNewPoint();
       setTimeout("alert('Good Job!!!')", 1);
    }

}