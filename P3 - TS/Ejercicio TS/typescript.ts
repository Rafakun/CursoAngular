var seriesArray:Serie[] = [];

class Serie {
  private Nombre: string;
  private capitulos: number;

  constructor(Nombre: string, capitulos: number) {
    this.Nombre = Nombre;
    this.capitulos = capitulos;
  }

  setNombre(Nombre: string) {
    this.Nombre = Nombre;
  }
  getNombre() {
    return this.Nombre;
  }

  setCapitulos(capitulos: number) {
    this.capitulos = capitulos;
  }
  getCapitulos() {
    return this.capitulos;
  }
}

function guardarSeries() {
  let serieNombre = <HTMLInputElement>document.getElementById("lblSerie");
  let serieCapitulos = <HTMLInputElement>(
    document.getElementById("lblCapitulos")
  );
  let serieNueva = new Serie(serieNombre.value, parseInt(serieCapitulos.value));

  seriesArray.push(serieNueva);
}

function imprimirSerie() {
  var tipoLista = <HTMLSelectElement>document.getElementById("ddlModo");
  let table = document.createElement("table");
  var nombreHTML;
  var capitulosHTML;
  var div = document.getElementById("contentObject");

  if (tipoLista.value == "optLista") {      
    let olSel = document.createElement("ol");
    div.appendChild(olSel);

    seriesArray.forEach(Serie => {
    let liSel = document.createElement("li");
      nombreHTML = document.createElement(Serie.getNombre());
      capitulosHTML = document.createElement(Serie.getCapitulos());
      liSel.appendChild(nombreHTML);
      liSel.appendChild(capitulosHTML);  
    });

  } else if(tipoLista.value == "optTabla") {
    div.appendChild(table);
    seriesArray.forEach(Serie => {
        let trTable = document.createElement("tr");
        table.appendChild(trTable);
        for (var j = 0; j < 2; j++) {
            let tdTable = document.createElement("td");
            trTable.appendChild(tdTable);
            if(j==0){
                nombreHTML = document.createElement(Serie.getNombre());
                tdTable.appendChild(nombreHTML);
            }
            else{
                capitulosHTML = document.createElement(Serie.getCapitulos());
                tdTable.appendChild(capitulosHTML);
            }
        }
    });
  }
}

window.onload = function() {
  let btnGuardar = <HTMLInputElement>document.getElementById("btnGuardar");
  btnGuardar.addEventListener("click", guardarSeries);

  let selectList = <HTMLInputElement>document.getElementById("ddlModo");
  selectList.addEventListener("click", imprimirSerie);
};
