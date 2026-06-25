

export function initializeAnimations() {

    const animatedElements = document.querySelectorAll(".fade-up");

    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(element => observer.observe(element));

}