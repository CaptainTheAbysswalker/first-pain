

var pointer = document.getElementById("point");

function getXPositionOfElement() {
    var x_position = Math.floor(Math.random() * window.innerWidth);
    pointer.style.top = x_position;
}
function getYPositionOfElement() {
    var y_position = Math.floor(Math.random() * window.innerHeight);
    pointer.style.left = y_position;
}

    getXPositionOfElement();
    getYPositionOfElement();

