const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

function getCookie(key) {
    const line = '; ' + document.cookie;
    let parts = line.split('; ' + key + '=');
    if (parts.length === 2) {
        return parts
            .pop()
            .split(';')
            .shift();
    }
}
if (getCookie('modal') === 'close') {
    modal.classList.remove('modal_active');
} else {
    modal.classList.add('modal_active');
    modalClose.addEventListener('click', function () {
        modal.classList.remove('modal_active');
        document.cookie = "modal=close; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    })
}
