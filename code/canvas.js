var myCanv = document.getElementById('myCanvas');
var context = myCanv.getContext('2d');

function fadeOut(text) {
    var alpha = 0,   // full opacity
        interval = setInterval(function () {
            myCanv.width = myCanv.width; // Clears the canvas
            context.fillStyle = "rgba(102, 203, 255, " + alpha + ")";
            context.font = "Bold 60pt Arial";
            context.fillText(text, ((myCanv.width/2) - 200), 200);
            alpha = alpha + 0.05; // increase opacity (fade in)
            if (alpha > 1) {
                clearInterval(interval);
                context.fillStyle = "rgba(0, 0, 0, 1)";
                context.fillRect(((myCanv.width/2) - 120), 250, 245, 80);
                context.fillStyle = "rgba(255, 255, 255, 1)";
                context.font = "Bold 24pt Arial";
				context.fillText('Start Game', ((myCanv.width/2) - 90), 300);
            }
        }, 100);
}


function removeCanvas() {
    myCanv.parentNode.removeChild(myCanv);
}

// handlemouse-click event
myCanv.onclick= function(e) {

    var pos = getMousePos(myCanv, e);
    var x = pos.x;
    var y = pos.y;

    if ((x >= 180 && x <= 425) && (y >= 250 && y <= 330)) {
        // Remove the canvas
        removeCanvas();
    }
}

// get mouse position relative to canvas
function getMousePos(canvas, evt) {
    var rect = myCanv.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

fadeOut('Sky Jumper');
