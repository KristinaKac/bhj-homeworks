const book = document.getElementById('book').classList;

const fontSizeArr = Array.from(document.getElementsByClassName('font-size'));
const colorArr = Array.from(document.getElementsByClassName('color'));

const colorBgArr = [];
const colorTextArr = [];


function resetText() {
    book.remove('book_color-gray');
    book.remove('book_color-black');
    book.remove('book_color-whitesmoke');
}
function resetFontSize() {
    book.remove('book_fs-big');
    book.remove('book_fs-small');
}
function resetBg() {
    book.remove('book_bg-gray');
    book.remove('book_bg-black');
    book.remove('book_bg-white');
}

fontSizeArr.forEach((element, index, arr) => {

    element.addEventListener('click', function switcher(event) {
        event.preventDefault();

        arr.forEach(el => el.classList.remove('font-size_active'));

        element.classList.add('font-size_active');

        if (element.className.includes('font-size_small')) {
            resetFontSize();
            book.add('book_fs-small');
        } else if (element.className.includes('font-size_big')) {
            resetFontSize();
            book.add('book_fs-big');
        } else {
            resetFontSize();
        }

    })
});

colorArr.forEach(element => {
    if (element.className.includes('text_color')) {
        colorTextArr.push(element);
    }
});

colorTextArr.forEach((element, index, arr) => {

    element.addEventListener('click', function switcher(event) {
        event.preventDefault();

        arr.forEach(el => el.classList.remove('color_active'));

        element.classList.add('color_active');

        if (element.className.includes('text_color_black')) {
            resetText();
            book.add('book_color-black');
        } else if (element.className.includes('text_color_gray')) {
            resetText();
            book.add('book_color-gray');
        } else if (element.className.includes('text_color_whitesmoke')) {
            resetText();
            book.add('book_color-whitesmoke');
        }

    })
});

colorArr.forEach(element => {
    if (element.className.includes('bg_color')) {
        colorBgArr.push(element);
    }
});

colorBgArr.forEach((element, index, arr) => {

    element.addEventListener('click', function switcher(event) {
        event.preventDefault();

        arr.forEach(el => el.classList.remove('color_active'));

        element.classList.add('color_active');

        if (element.className.includes('bg_color_black')) {
            resetBg();
            book.add('book_bg-black');
        } else if (element.className.includes('bg_color_gray')) {
            resetBg();
            book.add('book_bg-gray');
        } else if (element.className.includes('bg_color_white')) {
            resetBg();
            book.add('book_bg-white');
        }
    })
});
