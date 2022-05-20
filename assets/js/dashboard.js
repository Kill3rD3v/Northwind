$(document).ready(function () {
  //line chart
  google.charts.load("current", {
    packages: ["corechart", "line", "controls", "table"],
  });
  google.charts.setOnLoadCallback(drawChartline);
});

function drawChartline() {
  var options = {
    title: "top5",
    width: "100%",
    height: "100%",
    showRowNumber: true,

    animation: { duration: 1000, easing: "out" },
    isStacked: true,
  };

  //json data ajax
  var jsondata = $.ajax({
    url: "https://localhost:5001/api/Employees/top5",
    dataType: "json",
    async: false,
    success: function (data) {
      jsondata = data;

      c = jsondata;

      var data = new google.visualization.DataTable();
      data.addColumn("string", "empleado");
      data.addColumn("number", "ventas");
      data.addRows(c.length);
      for (var i = 0; i < c.length; i++) {
        data.setValue(i, 0, c[i].empleado);
        data.setValue(i, 1, c[i].ventas);
      }

      visualDash = new google.visualization.Table(
        document.getElementById("dashboard")
      );
      //visualization.draw(data, options);

      visualDash.draw(data, options);
    },
  }).responseText;
}
