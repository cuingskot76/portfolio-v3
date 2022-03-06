const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const navMenu = document.querySelector(".nav-menu");

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

// remove navbar when user click in the outside
window.addEventListener("click", function (el) {
    if (el.target == window) {
        navMenu.forEach(function (e) {
            navMenu.classList.remove("show-menu");
        })
    }
})

// sticky effect for nav bar
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 100);
})

// Modal
const modalViews = document.querySelectorAll(".services-modal");
const modalBtn = document.querySelectorAll(".viewMoreBtn");
const modalClose = document.querySelectorAll(".close");

// !Cara Pertama = menampilkan modalViews untuk semua modal ketika tombol di klik
// let modal = function (e) {
//     modalViews[e].classList.add("active-modal");
// }

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
// ! With For
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
// ? With simple forEach (cara simple)
listGallery.forEach(function (e) {
    e.addEventListener("click", function (el) {
        // ! Cara Pertama
        // List gallery di loop lagi
        listGallery.forEach(function (el) {
            el.classList.remove("active");
        })
        // Saat function j.target.classList.add, maka akan menambahkan class active tanpa menghilangkan class active sebelumnya
        el.target.classList.add("active");

        // ! Cara Kedua
        // if (el.target.classList.contains("list-gallery")) {
        //     listGallery.forEach(function (a) {
        //         a.classList.remove("active");
        //     })
        // }
        // el.target.classList.add("active");

        let dataFilter = e.getAttribute("data-filter");
        itemBox.forEach(function (event) {
            // ! cara pertama
            // event.classList.add("hide");
            // if (event.getAttribute("data-item") == dataFilter || dataFilter == "all") {
            //     event.classList.add("show");
            //     event.classList.remove("hide");
            // }

            // ! cara kedua
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

// ? With for
// for (let i = 0; i < listGallery.length; i++) {
//     listGallery[i].addEventListener('click', r);
// }

// function r(e) {
//     for (let i = 0; i < listGallery.length; i++) {
//         listGallery[i].classList.remove('active');
//     }
//     e.target.classList.add('active');
// }

// ? With forEach(cara ribet)
// listGallery.forEach(function (i) {
//     i.addEventListener("click", e)
// })

// function e(event) {
//     listGallery.forEach(function (j) {
//         j.classList.remove("active");
//     })
//     event.target.classList.add("active");
// }

// const slides = document.querySelectorAll(".testimonials-content");
// const btn = document.querySelectorAll(".btn");
// let currentSlide = 1;
// let slideNumber = 0;
// const NumberOfSides = slides.length

// const manualNav = function (manual) {
//     slides.forEach((slide) => {
//         slide.classList.remove("aktip");
//         btn.forEach((btn) => {
//             btn.classList.remove("aktip");
//         })
//     })
//     slides[manual].classList.add("aktip");
//     btn[manual].classList.add("aktip");
// }
// btn.forEach((btn, i) => {
//     btn.addEventListener("click", () => {
//         manualNav(i);
//         currentSlide = i;
//     })
// })

// let playSlider;
// const repeater = () => {
//     setInterval(function () {
//         slides.forEach((slide) => {
//             slide.classList.remove("aktip");
//         });

//         slideNumber++;
//         if (slideNumber > (NumberOfSides - 1)) {
//             slideNumber = 0;
//         }
//         slides[slideNumber].classList.add("active");
//     }, 4000);
// }
// repeater();