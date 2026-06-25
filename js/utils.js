// Utility Functions

/* ===========================================
   NAVBAR
=========================================== */

export function initializeNavbar() {

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}

/* ===========================================
   ACTIVE LINKS
=========================================== */

export function initializeActiveLinks() {

    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.id;

            }

        });

        links.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}

/* ===========================================
   COUNTERS
=========================================== */

export function initializeCounters() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let value = 0;
            const increment = Math.ceil(target / 40);

            function update() {

                value += increment;

                if (value >= target) {

                    if (target === 4) {

                        counter.textContent = "4+";

                    } else {

                        counter.textContent = target + "%";

                    }

                    return;

                }

                counter.textContent = value;

                requestAnimationFrame(update);

            }

            update();

            observer.unobserve(counter);

        });

    });

    counters.forEach(counter => observer.observe(counter));

}

/* ===========================================
   EXPERIENCE ACCORDION
=========================================== */

export function initializeExperience() {

    const cards = document.querySelectorAll(".experience-card");

    cards.forEach(card => {

        const button = card.querySelector(".expand-btn");

        button.addEventListener("click", () => {

            card.classList.toggle("active");

            const text = button.querySelector("span");

            text.textContent = card.classList.contains("active")

                ? "Collapse Engineering Journey"

                : "Explore Engineering Journey";

        });

    });

}