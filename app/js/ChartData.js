(function () {
  "use strict";
  Chart.defaults.global.defaultFontFamily = '';
  Chart.defaults.global.defaultFontColor = '#292b2c';

  var ctx = document.getElementById("temperatureLineChart");
  var temperatureLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Mar 1", "Mar 2"],
      datasets: [{
        label: "Sessions",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [10000, 30162],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'date'
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
            max: 40000,
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
        backgroundColor: ['#F0E68C', '#DCDCDC'],
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
          fontColor: '#F0E68C',
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
  Charts.temperatureLineChart;
})(); 
