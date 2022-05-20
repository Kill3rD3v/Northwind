$(document).ready(function () {
  //line chart
  google.charts.load("current", {
    packages: ["corechart", "bar", "table"],
  });
  google.charts.setOnLoadCallback(drawChartline);
});

function drawChartline() {
  var options = {
    title: "Top 5 Mejores Empleados",
    width: "100%",
    height: "100%",

    showRowNumber: true,
    legend: { position: "bottom" },
    bar: { groupWidth: "80%", groupSpacing: "40%" },

    animation: { duration: 1000, easing: "out" },
    isStacked: true,
  };
  var option2 = {
    title: "Top 5 Mejores Empleados",
    width: "100%",
    height: "100%",
    showRowNumber: true,

    animation: { duration: 1000, easing: "out" },
    isStacked: true,
  };

  //json data ajax
  var jsondata = $.ajax({
    url: "https://localhost:44379/api/Employees/top5",
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
      datatable = new google.visualization.Table(
        document.getElementById("datatable")
      );
      visualDash = new google.visualization.BarChart(
        document.getElementById("dashboard")
      );
      //visualization.draw(data, options);
      datatable.draw(data, options);
      visualDash.draw(data, options);
    },
  }).responseText;
}
