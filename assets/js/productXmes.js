$(document).ready(function () {
  obtenerProductos();
  google.charts.load("current", {
    packages: ["corechart", "bar", "table", "line"],
  });
  setTimeout(function () {
    $("#loading").fadeOut(300);
  }, 5000);
  //line chart

  google.charts.setOnLoadCallback(drawChartline);
});

function drawChartline() {
  var options = {
    title: "Productos Por Año",
    width: "100%",
    height: "100%",

    showRowNumber: true,
    legend: { position: "bottom" },
    bar: { groupWidth: "80%", groupSpacing: "40%" },

    animation: { startup: true, duration: 1000, easing: "out" },
    isStacked: true,
  };
  var option2 = {
    title: "Producto por ano",
    width: "100%",
    height: "100%",
    showRowNumber: true,

    animation: { duration: 1000, easing: "out" },
    isStacked: true,
  };

  //json data ajax
  let productId = $("#cbProducto").val();
  let year = $("#yearpick").val();
  var jsondata = $.ajax({
    url: `https://localhost:5001/api/Products/Meses/${productId}/${year}`,
    dataType: "json",
    async: false,
    success: function (data) {
      jsondata = data;

      c = jsondata;

      var data = new google.visualization.DataTable();
      data.addColumn("string", "Mes");
      data.addColumn("number", "Cantidad vendida");
      data.addRows(c.length);
      for (var i = 0; i < c.length; i++) {
        switch (c[i].mes) {
          case 1:
            data.setValue(i, 0, "ENE");
            data.setValue(i, 1, c[i].cantidad);
            break;
          case 2:
            data.setValue(i, 0, "FEB");
            data.setValue(i, 1, c[i].cantidad);
            break;
          case 3:
            data.setValue(i, 0, "MAR");
            data.setValue(i, 1, c[i].cantidad);
            break;
          case 4:
            data.setValue(i, 0, "ABR");
            data.setValue(i, 1, c[i].cantidad);
            break;
          case 5:
            data.setValue(i, 0, "MAY");
            data.setValue(i, 1, c[i].cantidad);
            break;
          case 6:
            data.setValue(i, 0, "JUN");
            data.setValue(i, 1, c[i].cantidad);
            break;
          case 7:
            data.setValue(i, 0, "JUL");
            data.setValue(i, 1, c[i].cantidad);
            break;
          case 8:
            data.setValue(i, 0, "AGO");
            data.setValue(i, 1, c[i].cantidad);
            break;
          case 9:
            data.setValue(i, 0, "SEP");
            data.setValue(i, 1, c[i].cantidad);
            break;
          case 10:
            data.setValue(i, 0, "OCT");
            data.setValue(i, 1, c[i].cantidad);
            break;
          case 11:
            data.setValue(i, 0, "NOV");
            data.setValue(i, 1, c[i].cantidad);
            break;
          case 12:
            data.setValue(i, 0, "DIC");
            data.setValue(i, 1, c[i].cantidad);
            break;
        }
      }
      datatable = new google.visualization.Table(
        document.getElementById("datatable")
      );
      visualDash = new google.visualization.LineChart(
        document.getElementById("dashboard")
      );
      //visualization.draw(data, options);
      datatable.draw(data, options);
      visualDash.draw(data, options);
    },
  }).responseText;
}

function obtenerProductos() {
  var jsondata = $.ajax({
    url: "https://localhost:5001/api/Products",
    dataType: "json",
    async: false,
    success: function (data) {
      data.forEach((element) => {
        $("#cbProducto").append(
          `<option value="${element.productId}">${element.productName}</option>`
        );
      });
    },
  }).responseText;
  return jsondata;
}
