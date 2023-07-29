class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.interval;

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.stopTimer();
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  runTimer() {
    let time = (Array.from((this.wordElement).getElementsByClassName('symbol'))).length;

    this.interval = setInterval(() => {
      time--;
      document.querySelector('.timer').textContent = time;
      if (time === 0) {
        if (this.currentSymbol !== null) {
          this.fail()
        } else {
          this.success();
        }
      }
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.interval);
    return;
  }

  registerEvents() {
    document.addEventListener('keydown', function compareSymbols(event) {
      let selectedElement = event.key;
      compare.apply(game);

      function compare() {

        if ((selectedElement.toUpperCase()) === this.currentSymbol.textContent ||
          (selectedElement.toLowerCase()) === this.currentSymbol.textContent) {
          this.success();
        } else {
          this.fail();
        }
      }
    });
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.stopTimer();
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.stopTimer();
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    this.runTimer();
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

let game = new Game(document.getElementById('game'))

