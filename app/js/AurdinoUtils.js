var AurdinoUtils = {
  MOISTURE_SCALE: 1023,
  getFixedMoistureReading: function (value) {

    if (this.isNumber(value)) {
      value = this.clampInteger(value, 0, this.MOISTURE_SCALE);
      var level = (this.MOISTURE_SCALE - value) / this.MOISTURE_SCALE;
      return parseInt(level * 100);
    }
  },
  isNumber: function (number) {
    return !isNaN(parseFloat(number)) && !isNaN(number - 0);
  },
  clampInteger: function (value, min, max) {
    value = parseInt(value);
    return Math.min(Math.max(value, min), max);
  }
}