document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully! 🚀");

    // Animation on Scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('section, .chart-container');
        elements.forEach(element => {
            element.classList.add('fade-in');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => observer.observe(element));
    };

    // Initialize animations
    animateOnScroll()
});