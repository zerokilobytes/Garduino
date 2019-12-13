var Readable = require("stream").Readable;
var util = require("util");
util.inherits(MyStream, Readable);
function MyStream(opt) {
  Readable.call(this, opt);
}
MyStream.prototype._read = function () { };
// hook in our stream
process.__defineGetter__("stdin", function () {
  if (process.__stdin) return process.__stdin;
  process.__stdin = new MyStream();
  return process.__stdin;
});

var five = require("johnny-five");
var board = new five.Board({
  repl: false
});

var valueDiv = document.querySelector("#moistureValue");

var temperatureValue = 0;
var moistureValue = 0;
var lightValue = 0;

board.on("ready", function () {
  var sensor = new five.Sensor({
    pin: "A0",
    freq: 250,
    threshold: 2
  });

  sensor.on("change", function () {
    moistureValue = AurdinoUtils.getFixedMoistureReading(this.value);

    var time = AurdinoUtils.getTime();
    document.querySelector("#moistureTime").innerHTML = `Last updated ${time}`;

    Charts.moisture.data.datasets[0].data = [moistureValue, 100 - moistureValue];
    Charts.moisture.config.options.elements.center.text = moistureValue + '%';
    Charts.moisture.update();
  });

});


EmulatorAdaptor.addSensor({
  name: "temperature",
  interval: 5000,
  range: [42, 47],
  onchange: function (sender) {
    var time = AurdinoUtils.getTime();
    document.querySelector("#temperatureTime").innerHTML = `Last updated ${time}`;

    temperatureValue = sender.value;
    var value = sender.value;
    Charts.temperature.data.datasets[0].data = [value, 100 - value];
    Charts.temperature.config.options.elements.center.text = value + '%';
    Charts.temperature.update();
  }
});

EmulatorAdaptor.addSensor({
  name: "light",
  interval: 3000,
  range: [53, 70],
  onchange: function (sender) {
    var time = AurdinoUtils.getTime();
    document.querySelector("#lightTime").innerHTML = `Last updated ${time}`;

    lightValue = sender.value;
    var value = sender.value;
    Charts.light.data.datasets[0].data = [value, 100 - value];
    Charts.light.config.options.elements.center.text = value + '%';
    Charts.light.update();
  }
});


setInterval(function () {
  var time = AurdinoUtils.getTime();

  Charts.temperatureLineChart.data.labels.push(time);
  Charts.temperatureLineChart.data.datasets[0].data.push(temperatureValue * 10);
  Charts.temperatureLineChart.update();

  Charts.moistureLineChart.data.labels.push(time);
  Charts.moistureLineChart.data.datasets[0].data.push(moistureValue);
  Charts.moistureLineChart.update();

  Charts.lightLineChart.data.labels.push(time);
  Charts.lightLineChart.data.datasets[0].data.push(lightValue * 10);
  Charts.lightLineChart.update();

  document.querySelectorAll('.linetime').forEach(function (linetime) {
    linetime.innerHTML = `Last updated ${time}`;
  })
}, 10000);