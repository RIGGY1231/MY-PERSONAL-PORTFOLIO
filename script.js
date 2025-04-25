
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
function revealOnScroll() {
    const sections=document.querySelectorAll('.section');
    const triggerBottom=window. innerHeight *0.85;
    sections. forEach(section=> {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop<triggerBottom) {
            section.classList.remove('reveal');
        } else {
            section.classList.remove('reveal');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load',revealOnScroll);