import {Serie} from "./serie.js";

import {series} from "./data.js"


let seriesTable:HTMLElement = document.getElementById("series")!;
let average: HTMLElement = document.getElementById("promedio-temporadas")!;
let card: HTMLElement = document.getElementById("card")!;

mostrarSeries(series);
mostrarPromedio(series);


function mostrarSeries(series: Serie[]):void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for(let serie of series)
    {   
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<th scope="row">${serie.id}</th>
        <td><a href="#" onclick="changeCard(${serie.id.toString},series);">${serie.nombre}</a></td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
      }
    seriesTable.appendChild(seriesTbody);

}
    

function mostrarPromedio(series:Serie[]):void{
    let index: number = 0;
    let sum: number = 0;
    let trElement:HTMLElement = document.createElement("tr");
    for(let serie of series)
    {   
        sum += serie.temporadas;
        index++;
    }
    let prom: number = sum/index;
    trElement.innerHTML = `Seasons Average: ${prom}`;
    average.appendChild(trElement);

}
function getSerie(Id: number, series: Serie[]):Serie{
  let serieP : Serie = null!;
  for(let serie of series){
    if(serie.id==Id){
      serieP = serie
    }
  }
  return serieP
}
   
function changeCard(Id: number, series: Serie[]): void {
    let c = getSerie(Id,series);
    let divElement = document.createElement("div");
    divElement.innerHTML = `<img class="card-img-top" src= ${c.imagen} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title"> ${c.nombre} </h5>
      <p class="card-text">${c.descripcion}.</p>
      <a href=${c.ulr} class="card-link">${c.ulr}</a>
    </div>`;

    console.log(divElement.innerHTML);
    card.appendChild(divElement);
  }