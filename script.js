// loader
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("dissapear");
    }, 3500)
})


const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const navMenu = document.querySelector(".nav-menu");
const navList = document.querySelectorAll(".navlist");

// showing toggle 
toggleBtn.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
})

// remove toggle
closeBtn.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
})

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.querySelector('.nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// !not finished yet
// remove navbar when user click in the outside
window.addEventListener("click", function (el) {
    navList.forEach(function (e) {
        if (el.target == e) {
            console.log("ok");
        }
    })
})

// sticky effect for nav bar
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 50);
})

// Modal
const modalViews = document.querySelectorAll(".services-modal");
const modalBtn = document.querySelectorAll(".viewMoreBtn");
const modalClose = document.querySelectorAll(".close");


// add modal when user click the button
modalBtn.forEach(function (event, i) {
    event.addEventListener("click", function () {
        // !Cara Kedua
        function m(i) {
            modalViews[i].classList.add("active-modal");
        }
        m(i)
    })
})

// remove modal when user click in outside
window.addEventListener("click", function (e) {
    modalViews.forEach(function (mv) {
        if (e.target == mv) {
            mv.classList.remove("active-modal");
        }
    })
})

// remove modal when user click closeBtn
for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener("click", function () {
        for (let j = 0; j < modalViews.length; j++) {
            modalViews[j].classList.remove("active-modal");
        }
    })
}

// Gallery
const listGallery = document.querySelectorAll(".list-gallery");
const itemBox = document.querySelectorAll(".item-box");

// * Remove "active" when user clicked another list-item
listGallery.forEach(function (e) {
    e.addEventListener("click", function (el) {
        listGallery.forEach(function (el) {
            el.classList.remove("active");
        })
        el.target.classList.add("active");

        let dataFilter = e.getAttribute("data-filter");
        itemBox.forEach(function (event) {
            event.style.transform = "scale(0)";
            setTimeout(() => {
                event.style.display = "none"
            }, 500);
            if (event.getAttribute("data-item") == dataFilter || dataFilter == "all") {
                event.style.transform = "scale(1)";
                setTimeout(() => {
                    event.style.display = "block"
                }, 500);
            }

        })
    })
})