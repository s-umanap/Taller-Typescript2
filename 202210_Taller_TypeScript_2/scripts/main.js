import { series } from "./data.js";
var seriesTable = document.getElementById("series");
var average = document.getElementById("promedio-temporadas");
var card = document.getElementById("card");
mostrarSeries(series);
mostrarPromedio(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(serie.id, "</th>\n        <td><a href=\"#\" onclick=\"changeCard(").concat(serie.id.toString, ",series);\">").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function mostrarPromedio(series) {
    var index = 0;
    var sum = 0;
    var trElement = document.createElement("tr");
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        sum += serie.temporadas;
        index++;
    }
    var prom = sum / index;
    trElement.innerHTML = "Seasons Average: ".concat(prom);
    average.appendChild(trElement);
}
function getSerie(Id, series) {
    var serieP = null;
    for (var _i = 0, series_3 = series; _i < series_3.length; _i++) {
        var serie = series_3[_i];
        if (serie.id == Id) {
            serieP = serie;
        }
    }
    return serieP;
}
function changeCard(Id, series) {
    var c = getSerie(Id, series);
    var divElement = document.createElement("div");
    divElement.innerHTML = "<img class=\"card-img-top\" src= ".concat(c.imagen, " alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\"> ").concat(c.nombre, " </h5>\n      <p class=\"card-text\">").concat(c.descripcion, ".</p>\n      <a href=").concat(c.ulr, " class=\"card-link\">").concat(c.ulr, "</a>\n    </div>");
    console.log(divElement.innerHTML);
    card.appendChild(divElement);
}
