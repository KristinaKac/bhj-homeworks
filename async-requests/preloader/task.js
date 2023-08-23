const items = document.getElementById('items');
checkLocalStorage();

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status == 200) {

    let data = JSON.parse(xhr.responseText);

    const loader = document.querySelector('.loader');
    if (loader.className.includes('loader_active')) {
      loader.classList.remove('loader_active');
    } else {
      Array.from(document.querySelectorAll('.item')).forEach(el => {
        el.remove();
      });
      localStorage.clear();
    }

    for (const key in data.response.Valute) {
      createElement(data.response.Valute[key]);
      localStorage.setItem(localStorage.length++, JSON.stringify(data.response.Valute[key]));
    }
  }
}

function checkLocalStorage() {
  if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      createElement(JSON.parse(value))

      const loader = document.querySelector('.loader');
      loader.classList.remove('loader_active');
    }
  }
}

function createElement(element) {
  const item = document.createElement('div');
  item.className = 'item';

  const itemCode = document.createElement('div');
  itemCode.className = 'item__code';
  itemCode.innerText = element.CharCode;

  const itemValue = document.createElement('div');
  itemValue.className = 'item__value';
  itemValue.innerText = element.Value;

  const itemCurency = document.createElement('div');
  itemCurency.className = 'item__currency';
  itemCurency.innerText = 'руб.';

  item.appendChild(itemCode);
  item.appendChild(itemValue);
  item.appendChild(itemCurency);

  items.appendChild(item);
}