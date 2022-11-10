console.log("ready!");

function init() {
  Papa.parse(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_SZHhcqGdR-dPcLI98ZEklgrhuT8ggn4NqZ70QyoIvCl8j6Cw82j9XZ2XlNGzzsLr2MUQ0YhxM0ay/pub?output=csv",
    {
      download: true,
      header: true,
      complete: function (results) {
        var data = results.data;
        console.log(data);
        console.log(data[0].Timestamp);

        var options = {
          element: document.getElementById("table"),
          data: data,
        };

        var table = new Table(options);
        table.view();
      },
    }
  );
}

window.addEventListener("DOMContentLoaded", init);