class App {
  constructor() {
    this.isOn = false;
    this.interval = undefined;

    this.centiSeconds = 0;
    this.seconds      = 0;
    this.minutes      = 0;
    this.hours        = 0;

    this.toggleButton = document.querySelector('.toggle');
    this.resetButton = document.querySelector('.reset');

    this.centiSecondsSpan = document.querySelector('.centiseconds');
    this.secondsSpan      = document.querySelector('.seconds');
    this.minutesSpan      = document.querySelector('.minutes');
    this.hoursSpan        = document.querySelector('.hours');

    this.toggleButton.addEventListener('click', this.startStop.bind(this));
    this.resetButton.addEventListener('click', this.reset.bind(this));
  }

  startStop() {
    if (this.isOn) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    this.interval = setInterval(this.addTime.bind(this), 10);
    this.toggleButton.textContent = 'Stop';
    this.isOn = true;
  }

  stop() {
    clearInterval(this.interval);
    this.toggleButton.textContent = 'Start';
    this.isOn = false;
  }

  addTime() {
    this.centiSeconds += 1;
    if (this.centiSeconds === 100) {
      this.centiSeconds = 0;
      this.seconds += 1;

      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1

        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours += 1;
        }
      }
    }

    this.displayTime();
  }

  reset() {
    if (this.isOn) this.stop();

    this.centiSeconds = 0;
    this.seconds = 0;
    this.minutes = 0
    this.hours = 0;

    this.displayTime();
  }

  displayTime() {
    this.centiSecondsSpan.textContent = this.centiSeconds < 10 ? '0' + this.centiSeconds : this.centiSeconds;
    this.secondsSpan.textContent = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    this.minutesSpan.textContent = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.hoursSpan.textContent = this.hours < 10 ? '0' + this.hours : this.hours;
  }
}

new App();