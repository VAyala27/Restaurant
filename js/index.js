$(document).ready(function () {
    $("#All").addClass("tabActive");

    $("#one").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 4,
                loop: true,
            },
        },
    });

    $("#two").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
                loop: true,
            },
        },
    });

    //     //Smooth Scrolling
    //     $("#mainNav a").on("click", function (e) {
    //         if (this.hash !== "") {
    //             e.preventDefault();
    //             const hash = this.hash;
    //             $("html, body").animate({
    //                     scrollTop: $(hash).offset().top - 82,
    //                 },
    //                 800,
    //                 function () {
    //                     window.location.hash = hash;
    //                 }
    //             );
    //         }
    //     });
});

const navbar = document.querySelector("#mainNav");
const linksContainer = document.querySelector(".links-container");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
            e.target.classList.add("active");
        });

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
    });
});

function initMap() {
    const loc = {
        lat: 40.79637,
        lng: -73.93788
    };
    const map = new google.maps.Map(document.querySelector(".map"), {
        zoom: 15,
        center: loc,
    });
    const marker = new google.maps.Marker({
        position: loc,
        map: map,
    });
}