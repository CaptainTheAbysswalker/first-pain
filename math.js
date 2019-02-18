
// var x_max = +document.getElementById("square").style.height;
// var y_max = +document.getElementById("square").style.width;
var pointer = document.getElementById("point");
var circler = document.getElementById("circle");
var pos_x = +circler.style.left.replace('px','');
var pos_y = +circler.style.left.replace('px','');
var square_width = +document.getElementById('square').style.width.replace('px','');
var square_height = +document.getElementById('square').style.height.replace('px','');
var circle_width = +document.getElementById('circle').style.width.replace('px','');
var circle_height = +document.getElementById('circle').style.height.replace('px','');

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
            if (pos_x != 0 ) circler.style.left = (pos_x - 10) + 'px';
            break;
        case 38:
            if (pos_y != 0)circler.style.top = (pos_y - 10) + 'px';
            break;
        case 39:
            if (pos_x < (square_width - circle_width)) circler.style.left = (pos_x + 10) + 'px';
            break;
        case 40:
            if (pos_y  < (square_height - circle_height))circler.style.top = (pos_y + 10) + 'px';
            break;
    }
    x_position = +pointer.style.left.replace('px','');
    y_position = +pointer.style.top.replace('px','');
    pos_x = +circler.style.left.replace('px','');
    pos_y = +circler.style.top.replace('px','');
    if((x_position >= pos_x && x_position <= pos_x + circle_width) && 
    (y_position >= pos_y && y_position <= pos_y + circle_height)){
        
       getNewPoint();
       setTimeout("alert('Good Job!!!')", 1);
    }

}