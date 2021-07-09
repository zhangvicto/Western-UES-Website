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

function fadeInLong(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
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

//CAROUSEL
var i = 1;
var carouselTime = 3000;
var carouselSize = 3;
var carouselRun = 1;
let circleColor = "rgba(53, 53, 53, 0.5)";

function carousel() {
    if (carouselRun = 1) {
        setTimeout(function () {
            let next = i + 1;
            if (i != 0) {
                fadeOut(document.getElementById("slide" + i));
                document.getElementById("circle" + i).style.backgroundColor = circleColor;
            } else {
                document.getElementById("slide" + carouselSize).style.zIndex = "2";
                fadeOut(document.getElementById("slide" + carouselSize));
                document.getElementById("circle" + carouselSize).style.backgroundColor = circleColor;
            }
            document.getElementById("slide" + next).style.display = "block";
            document.getElementById("slide" + next).style.opacity = "1";
            document.getElementById("circle" + next).style.backgroundColor = "rgba(255, 255, 255, 1)";
            if (next == carouselSize) {
                i = 0;
                document.getElementById("slide" + carouselSize).style.zIndex = "-1";
                carousel();
            } else {
                i++;
                carousel();
            }
        }, carouselTime)
    }
}

carousel();

//if click on circle then stop carousel
// function stopCarousel() {
//     for (let i = 1; i <= 3; i++) {
//         document.getElementById("circle" + i).addEventListener("click",function() {
//             carouselRun = 0;
//         })
//     }
// }

// stopCarousel();

//Dropdown
document.getElementById("")

//Menu Button for Mobile
let menuButton = document.getElementById("menu-mobile");

document.getElementById("menu-button").addEventListener("mouseover",function(){
    menuButton.style.display = "block";
});

document.getElementById("menu-button").addEventListener("mouseleave",function(){
    menuButton.style.display = "none";
});