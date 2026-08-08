/* ================= TYPING ================= */

const words = [
    "Web Developer",
    "JavaScript Learner",
    "Creative Builder",
    "Gaming Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const element =
        document.getElementById("typing");

    if (!element) return;


    const word =
        words[wordIndex];


    if (!deleting) {

        element.textContent =
            word.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === word.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;

        }

    } else {

        element.textContent =
            word.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );

}


typeEffect();



/* ================= THEME ================= */

const themeButton =
    document.getElementById(
        "theme-toggle"
    );


themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "light"
        );


        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            themeButton.textContent = "☀️";

        } else {

            themeButton.textContent = "🌙";

        }

    }
);



/* ================= BACK TO TOP ================= */

const backTop =
    document.getElementById(
        "back-top"
    );


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


backTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".section, .project, .skill-card, .about-box, .stat, .gaming-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function (element) {

        observer.observe(
            element
        );

    }
);