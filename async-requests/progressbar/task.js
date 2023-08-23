const btn = document.getElementById('send');
const progress = document.getElementById('progress');
const form = document.getElementById('form');

btn.addEventListener('click', function (event) {
  event.preventDefault();

  const formData = new FormData();

  const xhr = new XMLHttpRequest(form);
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.addEventListener('progress', function (e) {
    const percentComplete = (e.loaded / e.total) * 100;
    progress.setAttribute('value', percentComplete);
  })

  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  })

  xhr.send(formData);
});