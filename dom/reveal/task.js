const reveal = Array.from(document.querySelectorAll('.reveal'));
let viewPortHeight = window.innerHeight;

window.addEventListener('scroll', function appearElements() {
    reveal.forEach((element) => {
        const { top, bottom } = element.getBoundingClientRect();
        if (top < viewPortHeight && bottom > 0) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
});
