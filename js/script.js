function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 8);
}

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 8);
}

function topMarginDown(element, dis, time, speed) {
    var distance = 0 + "px";
    var timer = setInterval(function () {
        if (parseInt(distance) >= dis) {
            clearInterval(timer);
            element.style.paddingTop = dis;
        }
        element.style.marginTop = distance;
        distance = parseInt(distance) + speed + "px";
    }, time);
}

function topMarginUp(element, dis, time, speed) {
    var distance = dis + "px";
    var timer = setInterval(function () {
        if (parseInt(distance) <= 0) {
            clearInterval(timer);
            element.style.paddingTop = distance;
        }
        element.style.marginTop = distance;
        distance = parseInt(distance) - speed + "px";
    }, time);
}

//Carousel
//function carousel() {
//  for (let i = 1; ; i++) {
//    setTimeout(function () {
//      let next = i + 1;
//    console.log("yes")
//    fadeIn(document.getElementById("slide" + next));
//    fadeOut(document.getElementById("slide" + i));
//}, 3000)
//if (i >= 2) {
//    i = 0;
//}
//}
//}

//carousel();

var i = 1;

function carousel() {
    setTimeout(function () {
        let next = i + 1;
        if (i != 0) {
            document.getElementById("slide" + i).style.display = "none";
        } else {
            document.getElementById("slide" + 3).style.display = "none";
        }
        fadeIn(document.getElementById("slide" + next));
        if (next == 3) {
            i = 0;
            carousel();
            console.log("ok next")
        } else {
            i++;
            carousel();
        }
    }, 3000)
}

carousel();

