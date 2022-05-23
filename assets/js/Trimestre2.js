$(document).ready(function () {
  //line chart
  google.charts.load("current", {
    packages: ["corechart", "bar", "table", "line", "vegachart"],
  });

  google.charts.setOnLoadCallback(drawChartline2);
});

function drawChartline2() {
  var options = {
    title: "Trimestre 2 Top 5",
    width: "100%",
    height: "100%",
    showRowNumber: true,
    legend: { position: "bottom" },
    bar: { groupWidth: "80%", groupSpacing: "30%" },
    animation: { startup: true, duration: 1000, easing: "out" },
    isStacked: true,
  };

  //json data ajax

  var jsondata = $.ajax({
    url: "https://localhost:5001/api/Products/Trimestre2Top5",
    dataType: "json",
    async: false,
    success: function (data) {
      jsondata = data;

      c = jsondata;

      var data = new google.visualization.DataTable();
      data.addColumn("string", "Nombre");
      data.addColumn("number", "Cantidad");
      data.addRows(c.length);
      for (var i = 0; i < c.length; i++) {
        data.setValue(i, 0, c[i].productName);
        data.setValue(i, 1, c[i].cantidad);
      }

      visualDash = new google.visualization.PieChart(
        document.getElementById("Trimestre2")
      );

      //visualization.draw(data, options);

      visualDash.draw(data, options);
    },
  }).responseText;
}
