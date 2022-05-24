$(document).ready(function () {
  setTimeout(function () {
    $("#loading").fadeOut(300);
  }, 5000);

  obtenerProductos(); //se llama la funcion para obtener los productos

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
  let productId = $("#cbProducto").val(); //se obtiene el valor del id del producto seleccionado
  let ware = $("#cbWarehouse").val(); //se obtiene el valor del id del almacen seleccionado
  var jsondata = $.ajax({
    url: `https://localhost:5001/api/Products/montoXalmacen/${productId}/${ware}`, //se obtiene la url del api
    dataType: "json", 
    async: false,
    success: function (data) {
      jsondata = data;

      c = jsondata;

      var data = new google.visualization.DataTable(); //se crea una nueva instancia de la clase dataTable
      var formatter3 = new google.visualization.DateFormat({ //se crea una nueva instancia de la clase DateFormat
        pattern: "yyyy MMM",
      });
      //date
      data.addColumn("date", "Año"); //se agrega una columna de tipo fecha
      data.addColumn("number", "$MXN");   //se agrega una columna de tipo number

      data.addRows(c.length);
      for (var i = 0; i < c.length; i++) {
        formatter3.format(data, 0); //se formatea la columna 0
        switch (c[i].mes) {
          case 1:
            data.setValue(i, 0, new Date(c[i].anio, c[i].mes, 1)); // inicia el constructor new Date(año, mes, dia)
            data.setValue(i, 1, c[i].cantidad);  
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
      datatable = new google.visualization.Dashboard( //se crea una nueva instancia de la clase Dashboard
        document.getElementById("dashboard_div") 
      );
      var donutRangeSlider = new google.visualization.ControlWrapper({ 
        controlType: "DateRangeFilter",   //se asigna el tipo de control rango por fecha
        containerId: "filter_div", //se optiene el id del div donde se va a mostrar el control
        state: {
          lowValue: new Date(1996, 12), 
          highValue: new Date(1997, 12),
        },
        options: {
          filterColumnIndex: 0, // se filtra la columna del año
          ui: {
            format: { pattern: "yyyy MMM", date: { month: { short: true } } }, //se formatea fecha en el control rango
          },
        },
      });

      var pieChart = new google.visualization.ChartWrapper({ 
        chartType: "ColumnChart", //se asigna el tipo de grafico a columnas
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

      //visualization.draw(data, options);
      datatable.bind(donutRangeSlider, pieChart); // se cargan rangeSlider y pieChart en el dashboard
      datatable.draw(data); //se dibuja el dashboard con los datos que optiene de la variable data
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
          `<option value="${element.productId}">${element.productName}</option>` // se inserta un option en el select con el valor del id y el nombre del producto 
        );
      });
    },
  });
}
