const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));

let check = false;

let tooltip = document.createElement('div');
tooltip.className = 'tooltip';

hasTooltip.forEach(element => {
    element.addEventListener('click', function showTooltop(event) {
        event.preventDefault();

        if (check === false) {
            tooltip.innerText = element.getAttribute('title');
            document.body.append(tooltip);

            let coords = element.getBoundingClientRect();

            tooltip.style.left = Math.round(coords.left) + 'px';
            tooltip.style.top = (window.scrollY + coords.bottom) + 'px';
            element.style.position = 'relative';
            tooltip.style.position = 'absolute';

            tooltip.classList.add('tooltip_active');
            check = true;
        } else {
            tooltip.classList.remove('tooltip_active');
            check = false;
        }
    })
});
