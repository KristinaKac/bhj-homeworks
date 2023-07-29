let tab = Array.from(document.getElementsByClassName('tab'));
let tabContent = Array.from(document.getElementsByClassName('tab__content'));

tab.forEach((element, index, array) => {
    element.addEventListener('click', function switcher() {

        let parentElement = element.parentElement.parentElement;
        let tabChild = Array.from(parentElement.getElementsByClassName('tab'));
        let tabContentChild = Array.from(parentElement.getElementsByClassName('tab__content'));

        tabChild.forEach(item => item.classList.remove('tab_active'));
        tab[index].classList.add('tab_active');

        tabContentChild.forEach(item => item.classList.remove('tab__content_active'));
        tabContent[index].classList.add('tab__content_active');
    })
});
