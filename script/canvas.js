var canvas;
var context;
var isDrawing = false;
window.onload = function () {
    "use strict";
    canvas = document.getElementById("canva");
    canvas.width = 350;
    canvas.height = 230;
    context = canvas.getContext("2d");
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
    document.getElementById('subm').onclick = function () {
        alert('Дякую за учать у конкурсі');
        location = 'index.html';
    };
};
function startDrawing(e) { //зафіксувати початок рисування
    "use strict";
    isDrawing = true;
    e = e || window.event; //якщо немає підтримки event
    if (!e.pageX) { //якщо немає підтримки pageX
        e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    context.beginPath();
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}
function draw(e) {
    "use strict";
    if (isDrawing === true) { //рисування - з*єднування двіх сусідніх точок, поки isDrawing == true
        e = e || window.event;//для підтримки event
        if (!e.pageX) {
            e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        var x = +e.pageX - (+canvas.offsetLeft);
        var y = +e.pageY - (+canvas.offsetTop);
        context.lineTo(x, y);
        context.stroke();
    }
}
function stopDrawing() {//зафіксувати кінець рисування
    "use strict";
    isDrawing = false;
}