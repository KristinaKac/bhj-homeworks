const textarea = document.getElementById('editor');
const btn = document.querySelector('.btn__clear');

if (localStorage.length != 0) {
    textarea.value = localStorage.getItem('text');
}
textarea.addEventListener('keyup', function () {
    localStorage.setItem('text', textarea.value);
});
btn.addEventListener('click', function () {
    textarea.value = '';
    localStorage.clear();
});