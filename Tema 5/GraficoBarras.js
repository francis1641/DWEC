google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños'],
        ['PP', 66],
        ['PSOE', 123],
        ['VOX', 43],
        ['UNIDAS PODEMOS', 20],
        ['CS', 15]
      ]);

      var options = {
        chart: {
          title: 'ELECCIONES GENERALES'
        },
        hAxis: {
          title: 'Escaños',
          minValue: 0,
        },
        vAxis: {
          title: 'Partidos'
        },
      };
      var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
      materialChart.draw(data, options);
    }