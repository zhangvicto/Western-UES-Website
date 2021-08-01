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

//DROP DOWN MENU
let aboutMenu = document.getElementById("menu-about");
let westernDropdown = document.getElementById("western-dropdown");
let joinMenu = document.getElementById("menu-join");
let joinDropdown = document.getElementById("join-dropdown");
let councilMenu = document.getElementById("menu-council");
let councilDropdown = document.getElementById("council-dropdown");
let adminMenu = document.getElementById("menu-admin");
let adminDropdown = document.getElementById("admin-dropdown");
let storeMenu = document.getElementById("menu-store");
let storeDropdown = document.getElementById("store-dropdown");
let coopMenu = document.getElementById("menu-coop");
let coopDropdown = document.getElementById("coop-dropdown");
let campaignMenu = document.getElementById("menu-campaign");
let campaignDropdown = document.getElementById("campaign-dropdown");

aboutMenu.addEventListener("mouseenter", function(){
    fadeIn(westernDropdown);
});

aboutMenu.addEventListener("mouseleave", function() {
    fadeOut(westernDropdown);
});

joinMenu.addEventListener("mouseenter", function(){
    fadeIn(joinDropdown);
});

joinMenu.addEventListener("mouseleave", function() {
    fadeOut(joinDropdown);
});

councilMenu.addEventListener("mouseenter", function(){
    fadeIn(councilDropdown);
});

councilMenu.addEventListener("mouseleave", function() {
    fadeOut(councilDropdown);
});

adminMenu.addEventListener("mouseenter", function(){
    fadeIn(adminDropdown);
});

adminMenu.addEventListener("mouseleave", function() {
    fadeOut(adminDropdown);
});

storeMenu.addEventListener("mouseenter", function(){
    fadeIn(storeDropdown);
});

storeMenu.addEventListener("mouseleave", function() {
    fadeOut(storeDropdown);
});

coopMenu.addEventListener("mouseenter", function(){
    fadeIn(coopDropdown);
});

coopMenu.addEventListener("mouseleave", function() {
    fadeOut(coopDropdown);
});

campaignMenu.addEventListener("mouseenter", function(){
    fadeIn(campaignDropdown);
});

campaignMenu.addEventListener("mouseleave", function() {
    fadeOut(campaignDropdown);
});


//MOBILE MENU
let menuButton = document.getElementById("menu-mobile");

document.getElementById("menu-button").addEventListener("mouseover", function () {
    menuButton.style.display = "block";
});

document.getElementById("menu-button").addEventListener("mouseleave", function () {
    menuButton.style.display = "none";
});

//FEE BREAKDOWN
let labPie = document.getElementById("pie-circle");

if (labPie) {
    labPie.addEventListener("mouseover", function () {
        fadeIn(document.getElementById("lab-text"));
    });
}

if (labPie) {
    labPie.addEventListener("mouseout", function () {
        fadeOut(document.getElementById("lab-text"));
    });
}

let projectPie = document.getElementById("pie-circle");

if (projectPie) {
    projectPie.addEventListener("click", function () {
        fadeIn(document.getElementById("lab-text"));
    });
}

if (projectPie) {
    projectPie.addEventListener("mouseout", function () {
        fadeOut(document.getElementById("lab-text"));
    });
}

let uesPie = document.getElementById("pie-lab");

if (uesPie) {
    uesPie.addEventListener("click", function () {
        fadeIn(document.getElementById("lab-text"));
    });
}

if (uesPie) {
    uesPie.addEventListener("mouseout", function () {
        fadeOut(document.getElementById("lab-text"));
    });
}