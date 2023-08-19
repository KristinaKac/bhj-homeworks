// открывается несколько подсказок

// const body = document.querySelector('body');
// let count = 0;

// body.addEventListener('click', function name(event) {
//     event.preventDefault();
//     const selectElement = event.target;
//     if (selectElement.classList.contains('has-tooltip')) {
//         let tooltip;


//         if (selectElement.classList.contains('has-tooltip--active')) {
//             selectElement.classList.remove('has-tooltip--active');
//             let elements = Array.from(document.getElementsByClassName('tooltip'));

//             elements.forEach(el => {

//                 if (el.dataset.id === selectElement.dataset.id) {
//                     el.classList.remove('tooltip_active');
//                 }
//             })

//         } else {
//             selectElement.classList.add('has-tooltip--active');
//             count++;

//             tooltip = document.createElement('div');
//             tooltip.className = 'tooltip';
//             tooltip.innerText = selectElement.getAttribute('title');
//             tooltip.dataset.id = count;
//             document.body.append(tooltip);

//             selectElement.dataset.id = count;

//             let coords = selectElement.getBoundingClientRect();

//             tooltip.style.left = Math.round(coords.left) + 'px';
//             tooltip.style.top = (window.scrollY + coords.bottom) + 'px';
//             selectElement.style.position = 'relative';
//             tooltip.style.position = 'absolute';
//             tooltip.classList.add('tooltip_active');
//         }
//     }
// })

// Открывается только одна подсказка

const body = document.querySelector('body');
let tooltip = document.createElement('div');;
tooltip.className = 'tooltip';

body.addEventListener('click', function name(event) {
    event.preventDefault();

    const selectElement = event.target;
    if (selectElement.classList.contains('has-tooltip')) {

        const arr = Array.from(document.getElementsByClassName('has-tooltip'));
        let item = '';

        arr.forEach(elem => {
            if (elem.classList.contains('has-tooltip--active')) {
                item = elem;
            }
        });
        if (item !== '') {
            console.log(item)
            console.log(selectElement)
            if (item !== selectElement) {
                item.classList.remove('has-tooltip--active');

                selectElement.classList.add('has-tooltip--active');
                tooltip.innerText = selectElement.getAttribute('title');
                document.body.append(tooltip);

                let coords = selectElement.getBoundingClientRect();

                tooltip.style.left = Math.round(coords.left) + 'px';
                tooltip.style.top = (window.scrollY + coords.bottom) + 'px';
                selectElement.style.position = 'relative';
                tooltip.style.position = 'absolute';
                tooltip.classList.add('tooltip_active');

                return;
            } else if (item === selectElement) {
                selectElement.classList.remove('has-tooltip--active');
                item.classList.remove('has-tooltip--active');
                tooltip.classList.remove('tooltip_active');
                return;
            }
        }
        selectElement.classList.add('has-tooltip--active');

        tooltip.innerText = selectElement.getAttribute('title');
        document.body.append(tooltip);

        let coords = selectElement.getBoundingClientRect();

        tooltip.style.left = Math.round(coords.left) + 'px';
        tooltip.style.top = (window.scrollY + coords.bottom) + 'px';
        selectElement.style.position = 'relative';
        tooltip.style.position = 'absolute';
        tooltip.classList.add('tooltip_active');
    }
})
