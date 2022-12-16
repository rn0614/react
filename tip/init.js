var width = window.innerWidth;
var height = window.innerHeight;
var smile = new Image();
smile.src = "./image/smile.png";

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRRequestAnimationFrame     ||
        window.msRequestAnimationFrame     ||
        function(/*function */ callback, /*DOMElement*/ element ){
            window.setTimeout(callback, 1000/60);
        };
})();

function init(){
    console.log('init');

    canvas.getContext("2d").canvas.width = width;
    canvas.getContext("2d").canvas.height = height;

    requestAnimFrame(update);
}


function update(){
    //console.log("update");
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(smile, 0, 0);
    requestAnimFrame(update);
}