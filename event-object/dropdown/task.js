let dropdownValue = Array.from(document.querySelectorAll('div .dropdown__value'));

dropdownValue.forEach(element => {
  element.addEventListener('click', function changerList() {

    const parentDropdown = element.parentNode;
    let dropdownList = parentDropdown.querySelector('.dropdown__list');

    if (dropdownList.className.includes('dropdown__list_active')) {
      dropdownList.classList.remove('dropdown__list_active');
    } else {
      dropdownList.classList.add('dropdown__list_active');

      let arrLinks = Array.from(dropdownList.getElementsByClassName('dropdown__link'));

      arrLinks.forEach(element => {
        element.addEventListener('click', function chooseElement(event) {

          event.preventDefault();

          let selectedElement = event.currentTarget.textContent;
          parentDropdown.querySelector('div .dropdown__value').textContent = selectedElement;
          dropdownList.classList.remove('dropdown__list_active');
        });
      });
    }
  });
});