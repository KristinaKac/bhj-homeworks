const cookie = document.getElementById('cookie');
let constDate = 0;
const clickTime = 1000;

cookie.onclick = () => {
    let date1 = new Date();
    document.getElementById('speed_click').textContent = (clickTime / (date1 - constDate)).toFixed(2);
    constDate = date1;

    document.getElementById('clicker__counter').textContent++;


    if (cookie.width == 200) {
        cookie.width = 220;
    } else {
        cookie.width = 200;
    }
}