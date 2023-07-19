// Task №1

// let timerContest = document.getElementById('timer').textContent;

// let time = setInterval(() => {
//     if (timerContest == 0) {
//       alert('Вы победили в конкурсе');
//       clearInterval(time);
//       return;
//     }
//     timerContest = Number(timerContest) - 1;
//     document.getElementById('timer').textContent = timerContest;
//   }, 1000);

// Task №2
// Version №1

// let endDate = new Date("July 19, 2023 21:16:00").getTime();

// setInterval(() => {
//     let now = new Date().getTime();
//     let diffTime = endDate - now;

//         let hours = Math.floor(diffTime / (1000 * 60 * 60));
//         let min = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
//         let sec = Math.floor((diffTime % (1000 * 60)) / (1000));

//         document.getElementById('hour').textContent = hours;
//         document.getElementById('minute').textContent = min;
//         document.getElementById('seconds').textContent = sec;
// }, 1000);


// Version №2

// let startTime = new Date;
// startTime.setHours(document.getElementById('hour').textContent);
// startTime.setMinutes(document.getElementById('minute').textContent);
// startTime.setSeconds(document.getElementById('seconds').textContent);
// startTime = startTime.getTime();

// let endTime = new Date();
// endTime.setHours(0);
// endTime.setMinutes(0);
// endTime.setSeconds(0);
// endTime = endTime.getTime();

// setInterval(() => {
//     if (startTime != endTime) {
//         startTime = startTime - 1000;

//         let diffTime = startTime - endTime;

//         let hours = Math.floor(diffTime / (1000 * 60 * 60));
//         let min = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
//         let sec = Math.floor((diffTime % (1000 * 60)) / (1000));

//         document.getElementById('hour').textContent = hours;
//         document.getElementById('minute').textContent = min;
//         document.getElementById('seconds').textContent = sec;
//     }

// }, 1000);



