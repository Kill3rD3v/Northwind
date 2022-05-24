$(document).ready(function () {
  setTimeout(function () {
    $("#loading").fadeOut(300);
  }, 300);

  obtenerProductos();

  //line chart
  google.charts.load("current", {
    packages: ["corechart", "controls", "bar", "table", "line", "vegachart"],
  });

  google.charts.setOnLoadCallback(drawChartline);
});

function drawChartline() {
  var options = {
    title: "Productos Por Año",
    width: "100%",
    height: "100%",
    showRowNumber: true,
    legend: { position: "bottom" },
    bar: { groupWidth: "80%", groupSpacing: "30%" },
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
  let ware = $("#cbWarehouse").val();
  var jsondata = $.ajax({
    url: `https://localhost:5001/api/Products/montoXalmacen/${productId}/${ware}`,
    dataType: "json",
    async: false,
    success: function (data) {
      jsondata = data;

      c = jsondata;

      var data = new google.visualization.DataTable();
      var formatter3 = new google.visualization.DateFormat({
        pattern: "yyyy MMM",
      });
      //date
      data.addColumn("date", "Año");
      data.addColumn("number", "$MXN");

      data.addRows(c.length);
      for (var i = 0; i < c.length; i++) {
        switch (c[i].mes) {
          case 1:
            data.setValue(i, 0, new Date(c[i].anio, c[i].mes, 1));
            data.setValue(i, 1, c[i].cantidad);
            formatter3.format(data, 0);
            break;
          case 2:
            data.setValue(i, 0, new Date(c[i].anio, 2, 1));
            data.setValue(i, 1, c[i].cantidad);

            break;
          case 3:
            data.setValue(i, 0, new Date(c[i].anio, 3, 1));
            data.setValue(i, 1, c[i].cantidad);

            break;
          case 4:
            data.setValue(i, 0, new Date(c[i].anio, 4, 1));
            data.setValue(i, 1, c[i].cantidad);

            break;
          case 5:
            data.setValue(i, 0, new Date(c[i].anio, 5, 1));
            data.setValue(i, 1, c[i].cantidad);

            break;
          case 6:
            data.setValue(i, 0, new Date(c[i].anio, 6, 1));
            data.setValue(i, 1, c[i].cantidad);

            break;
          case 7:
            data.setValue(i, 0, new Date(c[i].anio, 7, 1));
            data.setValue(i, 1, c[i].cantidad);

            break;
          case 8:
            data.setValue(i, 0, new Date(c[i].anio, 8, 1));
            data.setValue(i, 1, c[i].cantidad);

            break;
          case 9:
            data.setValue(i, 0, new Date(c[i].anio, 9, 1));
            data.setValue(i, 1, c[i].cantidad);

            break;
          case 10:
            data.setValue(i, 0, new Date(c[i].anio, 10, 1));
            data.setValue(i, 1, c[i].cantidad);

            break;
          case 11:
            data.setValue(i, 0, new Date(c[i].anio, 11, 1));
            data.setValue(i, 1, c[i].cantidad);

            break;
          case 12:
            data.setValue(i, 0, new Date(c[i].anio, 12, 1));
            data.setValue(i, 1, c[i].cantidad);

            break;
        }
      }
      datatable = new google.visualization.Dashboard(
        document.getElementById("dashboard_div")
      );
      var donutRangeSlider = new google.visualization.ControlWrapper({
        controlType: "DateRangeFilter",
        containerId: "filter_div",
        state: {
          lowValue: new Date(1996, 12),
          highValue: new Date(1997, 12),
        },
        options: {
          filterColumnIndex: 0,
          ui: {
            format: { pattern: "yyyy MMM", date: { month: { short: true } } },
          },
        },
      });

      var pieChart = new google.visualization.ChartWrapper({
        chartType: "ColumnChart",
        containerId: "chart_div",

        options: {
          title: "Producto Por Año",
          width: "100%",
          height: "100%",
          pieSliceText: "value",
          legend: "right",
          animation: { duration: 1000, easing: "out" },
          isStacked: true,
        },
      });

      var table = new google.visualization.ChartWrapper({
        chartType: "Table",
        containerId: "table_div",
        options: {
          width: "100%",
          height: "100%",
          showRowNumber: true,
          legend: { position: "bottom" },
          bar: { groupWidth: "80%" },
          animation: { startup: true, duration: 1000, easing: "out" },
          isStacked: true,
        },
      });

      //visualization.draw(data, options);
      datatable.bind(donutRangeSlider, pieChart, table);
      datatable.draw(data);
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
