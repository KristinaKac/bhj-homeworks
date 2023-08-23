const card = document.querySelector('.card')

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', function (event) {

  if (xhr.readyState === 4 && xhr.status == 200) {
    let data = JSON.parse(xhr.responseText);

    let poll = createCard(data);

    for (const key in data.data.answers) {
      let buttonAnswer = createPollAnswer(data.data.answers[key]);
      poll.querySelector('.poll__answers').appendChild(buttonAnswer);
    }

    document.querySelector('.card').append(poll);

    const pollAnswer = Array.from(poll.querySelectorAll('.poll__answer'));
    pollAnswer.forEach((element, index) => {
      element.addEventListener('click', function () {

        alert('Спасибо, ваш голос засчитан!');
        returnRequest(data.id, index, data.data.title);

      })
    });
  }
});

function createPollAnswer(key) {
  const button = document.createElement('button');
  button.className = 'poll__answer';
  button.innerText = key;

  return button;
}
function createCard(data) {

  const poll = document.createElement('div');
  poll.className = 'poll';

  const pollTitle = document.createElement('div');
  pollTitle.className = 'poll__title';
  pollTitle.setAttribute('id', 'poll__title');
  pollTitle.innerText = data.data.title;

  const pollAnswers = document.createElement('div');
  pollAnswers.className = 'poll__answers';
  pollAnswers.setAttribute('id', 'poll__answers');

  poll.appendChild(pollTitle);
  poll.appendChild(pollAnswers);

  return poll;
}
function returnRequest(id, index, title) {

  const xhr2 = new XMLHttpRequest();
  xhr2.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr2.send('vote=' + id + '&answer=' + index);
  xhr2.onreadystatechange = function () {
    if (xhr2.readyState === 4) {

      let data = JSON.parse(xhr2.responseText);

      const survey = document.createElement('div');
      survey.className = 'survey';

      const surveyTitle = document.createElement('div');
      surveyTitle.className = 'survey_title';
      surveyTitle.innerText = title;

      survey.appendChild(surveyTitle);

      data.stat.forEach(element => {
        let surveyInfo = document.createElement('div');
        surveyInfo.className = 'survey_info';

        let surveyAnswer = document.createElement('div');
        surveyAnswer.className = 'survey_answer';
        surveyAnswer.innerText = element.answer + ': ';

        let surveyVotes = document.createElement('div');
        surveyVotes.className = 'survey_votes'
        surveyVotes.innerText = element.votes;

        surveyInfo.appendChild(surveyAnswer);
        surveyInfo.appendChild(surveyVotes);
        survey.appendChild(surveyInfo);

        card.appendChild(survey)
      })
    }
  }
}