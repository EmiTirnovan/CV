document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    //auto-type
    if(document.querySelector('.auto-type')) {
        var typed = new Typed('.auto-type', {
            strings: ['Web Development.', 'Databases.', 'Volunteering.', 'Photo/Video Editing.', 'Technology and Innovation.'],
            typeSpeed: 65,
            backSpeed: 50,
            backDelay: 3500,
            loop: false // Am pus true ca să se repete animația
        });
    }

    //burger
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const menuLinks = document.querySelectorAll('.nav-links a'); 

    if(burger){
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    navLinks.forEach((link) => {
                        link.style.animation = '';
                    });
                }
            });
        });
    }

    //Vanta.js
    try {
        if(document.querySelector('#projects')) {
            VANTA.WAVES({
                el: "#projects",
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x180B1D
            });
        }
    } catch (error) {
        console.log("Vanta JS nu a putut fi încărcat (posibil lipsesc librăriile din HTML): ", error);
    }

    //tsParticles
    if(document.getElementById("tsparticles")) {
        (async () => {
            await tsParticles.load("tsparticles", {
                particles: {
                    number: { value: 50, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "triangle" },
                    opacity: { value: 0.5, random: false },
                    size: { value: 3, random: true },
                    line_linked: { 
                        enable: true, 
                        distance: 150, 
                        color: "#8e44ad", 
                        opacity: 0.4, 
                        width: 1 
                    },
                    move: { 
                        enable: true, 
                        speed: 2, 
                        direction: "none", 
                        random: false, 
                        straight: false, 
                        out_mode: "out", 
                        bounce: false 
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 140, line_linked: { opacity: 1 } }
                    }
                },
                retina_detect: true
            });
        })();
    }
});