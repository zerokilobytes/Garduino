var EmulatorAdaptor = {
  sensors: [],
  addSensor: function (data) {
    var sensor = new Sensor(data);
    sensor.read();
    this.sensors.push(sensor);
  }
}