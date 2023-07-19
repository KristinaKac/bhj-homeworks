let hole = document.querySelectorAll('.hole');
let killing = Number(document.getElementById('dead').textContent);
let miss = Number(document.getElementById('lost').textContent);

for (let i = 0; i < 9; i++) {
    hole[i].onclick = () => {
        if (hole[i].className.includes('hole_has-mole')) {
            killing++;
            document.getElementById('dead').textContent = killing;
            if (killing === 10) {
                zeroing();
                alert('Вы выйграли');
            }
        } else {
            miss++;
            document.getElementById('lost').textContent = miss;
            if (miss === 5) {
                zeroing();
                alert('Вы проиграли');

            }
        }
    }
}
function zeroing() {
    document.getElementById('lost').textContent = '0';
    document.getElementById('dead').textContent = '0';
    killing = 0;
    miss = 0;
}