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
var carouselTime = 4000;
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

if (document.getElementById("slide1")) {
    carousel();
}

if (document.getElementById("days")) {
    (function () {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let birthday = "Sep 9, 2021 00:00:00",
            countDown = new Date(birthday).getTime(),
            x = setInterval(function () {

                let now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                if (distance < 0) {
                    let headline = document.getElementById("headline"),
                        countdown = document.getElementById("countdown");

                    headline.innerText = "Oweek is here!";
                    countdown.style.display = "none";

                    clearInterval(x);
                }
                //seconds
            }, 0)
    }());
}


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

aboutMenu.addEventListener("mouseenter", function () {
    fadeIn(westernDropdown);
});

aboutMenu.addEventListener("mouseleave", function () {
    fadeOut(westernDropdown);
});

joinMenu.addEventListener("mouseenter", function () {
    fadeIn(joinDropdown);
});

joinMenu.addEventListener("mouseleave", function () {
    fadeOut(joinDropdown);
});

councilMenu.addEventListener("mouseenter", function () {
    fadeIn(councilDropdown);
});

councilMenu.addEventListener("mouseleave", function () {
    fadeOut(councilDropdown);
});

adminMenu.addEventListener("mouseenter", function () {
    fadeIn(adminDropdown);
});

adminMenu.addEventListener("mouseleave", function () {
    fadeOut(adminDropdown);
});

storeMenu.addEventListener("mouseenter", function () {
    fadeIn(storeDropdown);
});

storeMenu.addEventListener("mouseleave", function () {
    fadeOut(storeDropdown);
});

coopMenu.addEventListener("mouseenter", function () {
    fadeIn(coopDropdown);
});

coopMenu.addEventListener("mouseleave", function () {
    fadeOut(coopDropdown);
});

campaignMenu.addEventListener("mouseenter", function () {
    fadeIn(campaignDropdown);
});

campaignMenu.addEventListener("mouseleave", function () {
    fadeOut(campaignDropdown);
});



//MOBILE MENU
let mobileMenu = document.getElementById("menu-mobile");
let menuButton = document.getElementById("menu-button");
let buttonState = 0;

menuButton.addEventListener("click", function () {
    if (buttonState == 0) {
        var op = 0.1;  // initial opacity
        mobileMenu.style.display = 'flex';
        var timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            mobileMenu.style.opacity = op;
            mobileMenu.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 8);
        menuButton.classList.toggle("open");
        buttonState = 1;

    } else {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1) {
                clearInterval(timer);
                mobileMenu.style.display = 'none';
            }
            mobileMenu.style.opacity = op;
            mobileMenu.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 8);
        menuButton.classList.remove("open");
        buttonState = 0; //reset button
    }
});

//MOBILE DROPDOWN
let mobileMenuItems = document.getElementsByClassName("mobile-menu-item");

for (let i = 0; i < mobileMenuItems.length; i++) {
    let menuButtonState = 0;
    mobileMenuItems[i].addEventListener("click", function () {
        if (menuButtonState == 0) {
            mobileMenuItems[i].querySelector(".mobile-menu-dropdown").style.display = "block";
            menuButtonState = 1;
        } else {
            mobileMenuItems[i].querySelector(".mobile-menu-dropdown").style.display = "none";
            menuButtonState = 0;
        }
    });
}

//HIDE MOBILE MENU ON WINDOW RESIZE
window.addEventListener('resize', function () {
    fadeOut(mobileMenu);
    buttonState = 0;
    menuButton.classList.remove("open");
});


//FEE BREAKDOWN
let piePieces = document.getElementsByClassName("pie-piece");
let pieText = document.getElementsByClassName("pie-middle-text");
let defaultText = document.getElementById("donation-default");

for (let i = 0; i < piePieces.length; i++) {
    piePieces[i].addEventListener("mouseover", function () {
        fadeIn(pieText[i]);
        fadeOut(defaultText);
    });
    piePieces[i].addEventListener("mouseleave", function () {
        fadeOut(pieText[i]);
        fadeIn(defaultText);
    });
}

//JACKETS GALLERY
let galleryButton1 = document.getElementById("button-gallery-1");
let galleryButton2 = document.getElementById("button-gallery-2");
let galleryClose = document.getElementById("gallery-close");

let gallery1 = document.getElementById("gallery-1");

if (galleryButton1) {
    galleryButton1.addEventListener("click", function () {
        fadeIn(gallery1);
    });
    galleryClose.addEventListener("click", function () {
        fadeOut(gallery1);
    })
}


//GALLERY
if (document.getElementsByClassName("jacket-gallery-photo")[0]) {
    !(function (d) {
        let itemClassName = "jacket-gallery-photo";
        let items = d.getElementsByClassName(itemClassName);
        let totalItems = items.length;
        let slide = 0;
        let moving = true;

        // Set classes
        function setInitialClasses() {
            // Targets the previous, current, and next items
            // This assumes there are at least three items.
            items[totalItems - 1].classList.add("prev");
            items[0].classList.add("active");
            items[1].classList.add("next");
        }

        // Set event listeners
        function setEventListeners() {
            let next = d.getElementsByClassName("jacket-gallery-button--next")[0];
            let prev = d.getElementsByClassName("jacket-gallery-button--prev")[0];
            next.addEventListener("click", function () { moveNext() });
            prev.addEventListener("click", function () { movePrev() });
        }

        function disableInteraction() {
            // Set 'moving' to true for the same duration as our transition.
            // (0.5s = 500ms)

            moving = true;
            // setTimeout runs its function once after the given time
            setTimeout(function () {
                moving = false
            }, 500);
        }

        function moveCarouselTo(slide) {
            // Check if carousel is moving, if not, allow interaction
            if (!moving) {
                // temporarily disable interactivity
                disableInteraction();
                // Update the "old" adjacent slides with "new" ones
                let newPrevious = slide - 1,
                    newNext = slide + 1,
                    oldPrevious = slide - 2,
                    oldNext = slide + 2;
                // Test if carousel has more than three items
                if ((totalItems - 1) > 3) {
                    // Checks and updates if the new slides are out of bounds
                    if (newPrevious <= 0) {
                        oldPrevious = (totalItems - 1);
                    } else if (newNext >= (totalItems - 1)) {
                        oldNext = 0;
                    }
                    // Checks and updates if slide is at the beginning/end
                    if (slide === 0) {
                        newPrevious = (totalItems - 1);
                        oldPrevious = (totalItems - 2);
                        oldNext = (slide + 1);
                    } else if (slide === (totalItems - 1)) {
                        newPrevious = (slide - 1);
                        newNext = 0;
                        oldNext = 1;
                    }

                    items[oldPrevious].className = itemClassName;
                    items[oldNext].className = itemClassName;
                    // Add new classes
                    items[newPrevious].className = itemClassName + " prev";
                    items[slide].className = itemClassName + " active";
                    items[newNext].className = itemClassName + " next";
                }
            }
        }


        // Next navigation handler
        function moveNext() {
            // Check if moving
            if (!moving) {
                // If it's the last slide, reset to 0, else +1
                if (slide === (totalItems - 1)) {
                    slide = 0;
                } else {
                    slide++;
                }
                // Move carousel to updated slide
                moveCarouselTo(slide);
            }
        }

        // Previous navigation handler
        function movePrev() {
            // Check if moving
            if (!moving) {
                // If it's the first slide, set as the last slide, else -1
                if (slide === 0) {
                    slide = (totalItems - 1);
                } else {
                    slide--;
                }

                // Move carousel to updated slide
                moveCarouselTo(slide);
            }
        }

        function initCarousel() {
            setInitialClasses();
            setEventListeners();
            // Set moving to false so that the carousel becomes interactive
            moving = false;
        }

        initCarousel();

    }(document));
}


//TEAM
// let execCards = document.getElementsByClassName("exec-card");

// if (execCards) {
//     for (let i = 0; i < execCards.length; i++) {
//         let execDesc = execCards[i].querySelector(".exec-description");
//         let state = 0;

//         execCards[i].addEventListener("click", function () {
//             if (state == 0) {
//                 execDesc.style.display = "block";
//                 state = 1;
//             } else {
//                 execDesc.style.display = "none";
//                 state = 0;
//             }
//         });
//     }
// }

let councilCards = document.getElementsByClassName("council-card");

if (councilCards) {
    for (let i = 0; i < councilCards.length; i++) {
        let councilDesc = councilCards[i].querySelector(".council-description");
        let state = 0;

        councilCards[i].addEventListener("click", function () {
            if (state == 0) {
                councilDesc.style.display = "block";
                state = 1;
            } else {
                councilDesc.style.display = "none";
                state = 0;
            }
        });
    }
}

//CLUBS
let clubContentBtn = document.getElementsByClassName("club-name-wrapper");
let clubCard = document.getElementsByClassName("club-name-wrapper");
let clubContentClose = document.getElementsByClassName("club-content-x");
//let clubContent = document.getElementById("club-content");


for (let i = 0; i < clubContentBtn.length; i++) {
    clubContentBtn[i].addEventListener("click", function () {
        fadeIn(clubContentBtn[i].parentElement.parentElement.querySelector(".club-content-wrapper"));
    });
    clubContentClose[i].addEventListener("click", function () {
        fadeOut(clubContentBtn[i].parentElement.parentElement.querySelector(".club-content-wrapper"));
    });
}

//WELLNESS
if (document.getElementsByClassName("wellness-social-card")) {
    let socialCard = document.getElementsByClassName("wellness-social-card");

    for (let i = 0; i < socialCard.length; i++) {
        socialCard[i].addEventListener("mouseenter", function () {
            socialCard[i].style.transform = "none";
        })
        socialCard[i].addEventListener("mouseleave", function () {
            socialCard[i].style.transform = "translateX(95px)";
        })
    }
}

//SUSTAINABILITY
if (document.getElementsByClassName("sustainability-photo")) {
    let sustainPhoto = document.getElementsByClassName("sustainability-photo");
    let sustainTip = document.getElementsByClassName("sustainability-tip");

    for (let i = 0; i < sustainTip.length; i++) {
        let state = 0;

        sustainPhoto[i].addEventListener("click", function () {
            if (state == 0) {
                sustainTip[i].style.display = "block";
                state = 1;
            } else {
                sustainTip[i].style.display = "none";
                state = 0;
            }
        });
    }
}

//ADMIN 
if (document.getElementsByClassName("admin-card")) {
    let sustainPhoto = document.getElementsByClassName("admin-card");
    let sustainTip = document.getElementsByClassName("admin-content");

    for (let i = 0; i < sustainTip.length; i++) {
        let state = 0;

        sustainPhoto[i].addEventListener("click", function () {
            if (state == 0) {
                sustainTip[i].style.display = "block";
                state = 1;
            } else {
                sustainTip[i].style.display = "none";
                state = 0;
            }
        });
    }
}