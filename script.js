document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    
    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
                section.style.transition = "opacity 0.6s ease-in-out";
                section.style.opacity = 1;
            }
        });
    });
});
