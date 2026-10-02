/* =========================
   GET ELEMENTS
========================= */

const themeButton = document.getElementById("themeButton");
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

const contactForm = document.getElementById("contactForm");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const popupOk = document.getElementById("popupOk");
const popupTitle = document.getElementById("popupTitle");


/* =========================
   MOBILE MENU
========================= */

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================
   DARK / LIGHT MODE
========================= */

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


/* =========================
   PROJECT POPUP
========================= */

function showProject(projectName) {

    popupTitle.textContent = projectName;

    popup.classList.add("active");

}


/* =========================
   CLOSE POPUP
========================= */

closePopup.addEventListener("click", function () {

    popup.classList.remove("active");

});


popupOk.addEventListener("click", function () {

    popup.classList.remove("active");

});


/* =========================
   CLOSE POPUP BY CLICKING
   OUTSIDE THE BOX
========================= */

popup.addEventListener("click", function (event) {

    if (event.target === popup) {

        popup.classList.remove("active");

    }

});


/* =========================
   CONTACT FORM
========================= */

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thanks " + name +
        "! Your message has been received."
    );

    contactForm.reset();

});


/* =========================
   SKILL BARS
========================= */

const progressBars =
    document.querySelectorAll(".progress-bar");


function animateSkills() {

    progressBars.forEach(function (bar) {

        const width = bar.getAttribute("data-width");

        bar.style.width = width;

    });

}


/* =========================
   NUMBER COUNTER
========================= */

const counters =
    document.querySelectorAll(".stat h2");


let countersStarted = false;


function startCounters() {

    if (countersStarted) {
        return;
    }

    countersStarted = true;

    counters.forEach(function (counter) {

        const target =
            Number(counter.getAttribute("data-number"));

        let current = 0;

        const increment =
            Math.max(1, Math.ceil(target / 50));

        const timer = setInterval(function () {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.textContent = current;

        }, 30);

    });

}


/* =========================
   SCROLL DETECTION
========================= */

window.addEventListener("scroll", function () {

    const skillsSection =
        document.getElementById("skills");

    const statsSection =
        document.querySelector(".stats-section");

    const skillsPosition =
        skillsSection.getBoundingClientRect().top;

    const statsPosition =
        statsSection.getBoundingClientRect().top;


    if (skillsPosition < window.innerHeight - 100) {

        animateSkills();

    }


    if (statsPosition < window.innerHeight - 100) {

        startCounters();

    }

});


/* =========================
   WELCOME MESSAGE
========================= */

console.log(
    "Welcome to Mohamad's portfolio!"
);

console.log(
    "Try changing the HTML, CSS and JavaScript."
);


/* =========================
   CURRENT YEAR
========================= */

const year =
    new Date().getFullYear();

console.log(
    "Current year: " + year
);