(function () {
  "use strict";
  Chart.defaults.global.defaultFontFamily = '';
  Chart.defaults.global.defaultFontColor = '#292b2c';

  var ctx = document.getElementById("temperatureLineChart");
  var temperatureLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: "Sessions",
        lineTension: 0.3,
        backgroundColor: "rgba(255, 114, 111,0.2)",
        borderColor: "rgba(255, 114, 111,1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(255, 114, 111,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(255, 114, 111,1)",
        pointHitRadius: 30,
        pointBorderWidth: 3,
        data: [],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'time'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 1000,
            maxTicksLimit: 5
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });


  var ctx = document.getElementById("moistureLineChart");
  var moistureLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: "Sessions",
        lineTension: 0.3,
        backgroundColor: "rgba(153, 204, 255,0.2)",
        borderColor: "rgba(153, 204, 255,1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(153, 204, 255,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(153, 204, 255,1)",
        pointHitRadius: 30,
        pointBorderWidth: 3,
        data: [],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'time'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            maxTicksLimit: 5
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });



  var ctx = document.getElementById("lightLineChart");
  var lightLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: "Sessions",
        lineTension: 0.3,
        backgroundColor: "rgba(242, 160, 15,0.2)",
        borderColor: "rgba(242, 160, 15,1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(242, 160, 15,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(242, 160, 15,1)",
        pointHitRadius: 30,
        pointBorderWidth: 3,
        data: [],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'time'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 1000,
            maxTicksLimit: 5
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });







  var ctx = document.getElementById("temperatureChart");
  var temperatureChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['', ''],
      datasets: [{
        data: [0, 100],
        backgroundColor: ['#ff726f', '#DCDCDC']
      }],
    },
    options: {
      legend: {
        display: false
      },
      cutoutPercentage: 90,
      elements: {
        arc: {
          roundedCornersFor: 0
        },
        center: {
          maxText: '100%',
          text: '0%',
          fontColor: '#ff726f',
          fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          fontStyle: 'normal',
          minFontSize: 30,
          maxFontSize: 60,
        }
      }
    }
  });


  var ctx = document.getElementById("moistureChart");
  var moistureChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['', ''],
      datasets: [{
        data: [0, 100],
        backgroundColor: ['#99ccff', '#DCDCDC'],
      }],
    },

    options: {
      legend: {
        display: false
      },
      cutoutPercentage: 90,
      elements: {
        arc: {
          roundedCornersFor: 0
        },
        center: {
          maxText: '100%',
          text: '0%',
          fontColor: '#99ccff',
          fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          fontStyle: 'normal',
          minFontSize: 30,
          maxFontSize: 60,
        }
      }
    }
  });



  var ctx = document.getElementById("lightChart");
  var lightChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['', ''],
      datasets: [{
        data: [0, 100],
        backgroundColor: ['#f2a00f', '#DCDCDC'],
      }],
    },

    options: {
      legend: {
        display: false
      },
      cutoutPercentage: 90,
      elements: {
        arc: {
          roundedCornersFor: 0
        },
        center: {
          maxText: '100%',
          text: '0%',
          fontColor: '#f2a00f',
          fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          fontStyle: 'normal',
          minFontSize: 30,
          maxFontSize: 60,
        }
      }
    }
  });

  Charts.light = lightChart;
  Charts.moisture = moistureChart;
  Charts.temperature = temperatureChart;

  Charts.temperatureLineChart = temperatureLineChart;
  Charts.moistureLineChart = moistureLineChart;
  Charts.lightLineChart = lightLineChart;
})(); 
