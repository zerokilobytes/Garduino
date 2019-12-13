function Sensor(data) {
  this.value = 0;
  this.read = function () {
    setInterval(this.updateReadings.bind(this), data.interval);
  };
  this.randomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  this.updateReadings = function () {
    this.value = this.randomInteger(data.range[0], data.range[1]);
    data.onchange(this);
  };
}

