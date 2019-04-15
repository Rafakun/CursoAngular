var seriesArray = [];
var Serie = /** @class */ (function () {
    function Serie(Nombre, capitulos) {
        this.Nombre = Nombre;
        this.capitulos = capitulos;
    }
    Serie.prototype.setNombre = function (Nombre) {
        this.Nombre = Nombre;
    };
    Serie.prototype.getNombre = function () {
        return this.Nombre;
    };
    Serie.prototype.setCapitulos = function (capitulos) {
        this.capitulos = capitulos;
    };
    Serie.prototype.getCapitulos = function () {
        return this.capitulos;
    };
    return Serie;
}());
function guardarSeries() {
    var serieNombre = document.getElementById("lblSerie");
    var serieCapitulos = (document.getElementById("lblCapitulos"));
    var serieNueva = new Serie(serieNombre.value, parseInt(serieCapitulos.value));
    seriesArray.push(serieNueva);
}
function imprimirSerie() {
    var tipoLista = document.getElementById("ddlModo");
    var table = document.createElement("table");
    var nombreHTML;
    var capitulosHTML;
    var div = document.getElementById("contentObject");
    if (tipoLista.value == "optLista") {
        var olSel = document.createElement("ol");
        div.appendChild(olSel);
        seriesArray.forEach(function (Serie) {
            var liSel = document.createElement("li");
            nombreHTML = document.createElement(Serie.getNombre());
            capitulosHTML = document.createElement(Serie.getCapitulos());
            liSel.appendChild(nombreHTML);
            liSel.appendChild(capitulosHTML);
        });
    }
    else if (tipoLista.value == "optTabla") {
        div.appendChild(table);
        seriesArray.forEach(function (Serie) {
            var trTable = document.createElement("tr");
            table.appendChild(trTable);
            for (var j = 0; j < 2; j++) {
                var tdTable = document.createElement("td");
                trTable.appendChild(tdTable);
                if (j == 0) {
                    nombreHTML = document.createElement(Serie.getNombre());
                    tdTable.appendChild(nombreHTML);
                }
                else {
                    capitulosHTML = document.createElement(Serie.getCapitulos());
                    tdTable.appendChild(capitulosHTML);
                }
            }
        });
    }
}
window.onload = function () {
    var btnGuardar = document.getElementById("btnGuardar");
    btnGuardar.addEventListener("click", guardarSeries);
    var selectList = document.getElementById("ddlModo");
    selectList.addEventListener("click", imprimirSerie);
};
