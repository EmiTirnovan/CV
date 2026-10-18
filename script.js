document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 60,
            easing: 'ease-out'
        });
    }

    // 2. Typed.js for dynamic headline typing
    if (document.querySelector('.auto-type') && typeof Typed !== 'undefined') {
        new Typed('.auto-type', {
            strings: [
                'Full-Stack Web Development.',
                'Modern Cloud & Systems Architecture.',
                'Volunteer Firefighting (ISU).',
                'Digital Product Incubation.',
                'Tech Community Leadership.'
            ],
            typeSpeed: 50,
            backSpeed: 35,
            backDelay: 2500,
            startDelay: 300,
            loop: true
        });
    }

    // 3. Mobile Navigation Burger
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const menuLinks = document.querySelectorAll('.nav-links a');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    }

    // 4. View More / View Less Projects Toggle
    const toggleProjectsBtn = document.getElementById('toggle-projects-btn');
    const extraProjectsGrid = document.getElementById('extra-projects');

    if (toggleProjectsBtn && extraProjectsGrid) {
        const btnText = toggleProjectsBtn.querySelector('.btn-text');
        const btnIcon = toggleProjectsBtn.querySelector('.btn-icon');

        toggleProjectsBtn.addEventListener('click', () => {
            const isHidden = extraProjectsGrid.classList.contains('hidden');

            if (isHidden) {
                // Reveal extra projects
                extraProjectsGrid.classList.remove('hidden');
                btnText.textContent = 'View Fewer Projects';
                if (btnIcon) btnIcon.classList.add('rotate');

                // Refresh tilt effect and AOS for newly revealed cards
                if (typeof VanillaTilt !== 'undefined') {
                    const newCards = extraProjectsGrid.querySelectorAll('[data-tilt]');
                    VanillaTilt.init(newCards);
                }
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            } else {
                // Hide extra projects
                extraProjectsGrid.classList.add('hidden');
                btnText.textContent = 'View More Projects (4)';
                if (btnIcon) btnIcon.classList.remove('rotate');

                // Smooth scroll back to projects section
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // 5. Vanta.js Waves (Subtle deep graphite & slate tones)
    try {
        if (document.querySelector('#projects') && typeof VANTA !== 'undefined' && VANTA.WAVES) {
            VANTA.WAVES({
                el: "#projects",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x0f161b,
                shininess: 12.00,
                waveHeight: 9.00,
                waveSpeed: 0.45,
                zoom: 0.85
            });
        }
    } catch (error) {
        console.warn("Vanta JS initialization error: ", error);
    }

    // 6. tsParticles (Subtle constellation)
    if (document.getElementById("tsparticles") && typeof tsParticles !== 'undefined') {
        (async () => {
            await tsParticles.load("tsparticles", {
                particles: {
                    number: { 
                        value: 38, 
                        density: { enable: true, value_area: 850 } 
                    },
                    color: { 
                        value: ["#c9d1d9", "#3fb950"] 
                    },
                    shape: { 
                        type: "circle" 
                    },
                    opacity: { 
                        value: 0.35, 
                        random: true 
                    },
                    size: { 
                        value: 2.4, 
                        random: true 
                    },
                    line_linked: { 
                        enable: true, 
                        distance: 140, 
                        color: "#2ea043", 
                        opacity: 0.18, 
                        width: 1 
                    },
                    move: { 
                        enable: true, 
                        speed: 1.2, 
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
                        grab: { distance: 140, line_linked: { opacity: 0.4 } },
                        push: { particles_nb: 2 }
                    }
                },
                retina_detect: true
            });
        })();
    }
});