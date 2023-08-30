const btn = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

(function checkLocalStorage() {
    if (localStorage.getItem('id')) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.getItem('id');

        const btnExit = document.getElementById('btn__exit');

        btnExit.addEventListener('click', function (event) {
            event.preventDefault();
            localStorage.removeItem('id');
            welcome.classList.remove('welcome_active');
            signin.classList.add('signin_active');
            form.reset();
        })
    }
})();

btn.addEventListener('click', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);

    xhr.addEventListener('error', function () {
        console.log(`Ошибка соединения ${xhr.status}: ${xhr.statusText}`);
    })

    xhr.addEventListener('progress', function (event) {
        if (event.lengthComputable) {
            console.log(`Получено ${event.loaded} из ${event.total} байт`);
        } else {
            console.log(`Получено ${event.loaded}`);
        }
    })

    xhr.addEventListener('load', function () {
        console.log(`Готово, получили ${xhr.responseText.length} байт`);

        const response = JSON.parse(xhr.responseText);
        if (response.success === true) {
            const id = response.user_id;
            localStorage.setItem('id', id);
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.innerText = id;

            const btnExit = document.getElementById('btn__exit');

            btnExit.addEventListener('click', function (event) {
                event.preventDefault();
                localStorage.removeItem('id');
                welcome.classList.remove('welcome_active');
                signin.classList.add('signin_active');
                form.reset();
            })
        } else {
            alert('Неверный логин/пароль');
            form.reset();
        }
    });
})


