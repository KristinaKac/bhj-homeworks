const arr = Array.from(document.querySelectorAll('.rotator'));

// работает с изменением времени интервала, но не работает на нескольких списках
let timer;
let count = 0;

function switcher() {
    arr.forEach(element => {
        element.children[count].classList.remove('rotator__case_active');
        count++;
        if (count === element.children.length) {
            count = 0;
        }
        element.children[count].classList.add('rotator__case_active');
        element.children[count].style.color = element.children[count].dataset.color;
        clearTimeout(timer)
        timer = setTimeout(switcher, element.children[count].dataset.speed)
    });
}
function setTimer() {
    clearTimeout(timer);
    timer = setTimeout(switcher, 1000)
}

setTimer();

// Могли бы вы, пожалуйста, подсказать как сделать так, чтобы программа работала на нескольких списках с изменением интервала?
// Спасибо!


// работает на нескольких списках, но без изменения времени интервала
// arr.forEach(element => {
//     let count = 0;

//     setInterval(() => {
//         element.children[count].classList.remove('rotator__case_active');
//         count++;
//         if (count === element.children.length) {
//             count = 0;
//         }
//         element.children[count].classList.add('rotator__case_active');
//         element.children[count].style.color = element.children[count].dataset.color;
        
//     }, 1000);
// });
